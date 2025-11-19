import type { Metadata } from "next";
import { Libre_Baskerville, Poppins, Handlee } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: "400"
})

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"]
})

const handlee = Handlee({
  variable: "--font-handlee",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Ella Lloyd",
  description: "Ella Lloyd's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} ${poppins.variable} ${handlee.variable} antialiased square-dots-pattern font-sans`}
      >
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}
