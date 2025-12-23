import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
