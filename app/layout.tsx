import type { Metadata } from "next";
import "./globals.css";
import FloatingNewsletter from "@/components/FloatingNewsletter";

export const metadata: Metadata = {
  title: "Aquinas Boxing Program",
  description: "Tradition. Discipline. Heart. Official homepage of the Aquinas Institute Boxing Program and Mission Bouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <FloatingNewsletter />
      </body>
    </html>
  );
}
