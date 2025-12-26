import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, phone, streetAddress, city, state, zipCode } = body;

    // Combine first and last name
    const fullName = `${firstName || ''} ${lastName || ''}`.trim();

    // Build address and preferences
    const hasPhone = phone?.trim().length > 0;
    const hasAddress = streetAddress?.trim() || city?.trim() || state?.trim() || zipCode?.trim();
    const fullAddress = hasAddress
      ? `${streetAddress || ''}\n${city || ''}, ${state || ''} ${zipCode || ''}`.trim()
      : '';

    const BEEHIIV_PUBLICATION_ID = 'pub_98b32f92-edcc-4f01-a1f0-b9cdf7544d02';
    const BEEHIIV_API_KEY = process.env.NEXT_PUBLIC_BEEHIIV_API_KEY;

    if (!BEEHIIV_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Check if subscriber already exists
    const checkResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions?email=${encodeURIComponent(email)}&expand=stats`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        },
      }
    );

    if (checkResponse.ok) {
      const checkData = await checkResponse.json();

      // If subscriber exists and is active, inform the user
      if (checkData.data && checkData.data.length > 0) {
        const existingSubscriber = checkData.data[0];

        if (existingSubscriber.status === 'active') {
          console.log('=== DUPLICATE SUBSCRIBER DETECTED ===');
          console.log('Email:', email);
          console.log('Status:', existingSubscriber.status);
          console.log('=====================================');

          return NextResponse.json(
            {
              error: 'already_subscribed',
              message: 'This email is already subscribed to our newsletter. Check your inbox for updates!'
            },
            { status: 409 }
          );
        }
      }
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          custom_fields: [
            { name: 'first_name', value: firstName || '' },
            { name: 'last_name', value: lastName || '' },
            { name: 'phone', value: phone || '' },
            { name: 'street_address', value: streetAddress || '' },
            { name: 'mailing_city', value: city || '' },
            { name: 'mailing_state', value: state || '' },
            { name: 'zip_code', value: zipCode || '' },
            { name: 'mailing_address', value: fullAddress },
          ].filter(field => field.value), // Only send fields with values
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: 'aquinas_boxing_website',
          utm_medium: 'website_form',
        }),
      }
    );

    const data = await response.json();

    // Log successful responses too
    console.log('=== BEEHIIV API RESPONSE ===');
    console.log('Status:', response.status);
    console.log('Success:', response.ok);
    console.log('Response data:', JSON.stringify(data, null, 2));
    console.log('===========================');

    if (!response.ok) {
      console.error('=== BEEHIIV API ERROR ===');
      console.error('Status:', response.status);
      console.error('Response data:', JSON.stringify(data, null, 2));
      console.error('Request body:', JSON.stringify({
        email,
        custom_fields: [
          { name: 'first_name', value: firstName || '' },
          { name: 'last_name', value: lastName || '' },
          { name: 'phone', value: phone || '' },
          { name: 'street_address', value: streetAddress || '' },
          { name: 'mailing_city', value: city || '' },
          { name: 'mailing_state', value: state || '' },
          { name: 'zip_code', value: zipCode || '' },
          { name: 'mailing_address', value: fullAddress },
        ].filter(field => field.value),
      }, null, 2));
      console.error('========================');

      return NextResponse.json(
        { error: data.message || data.error || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
