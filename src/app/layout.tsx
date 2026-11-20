import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0F19",
};

export const metadata: Metadata = {
  title: "1st World Konkani Music Mega Convention | Official Event Photo Library",
  description:
    "Official High-Resolution Photography Archive of Po'ylo Vishv Konknni So'ngeet Mo'hame'll (First World Konkani Music Mega Convention), organized by Mandd Sobhann. Browse albums, download original photos, and share via WhatsApp.",
  referrer: "no-referrer",
  icons: {
    icon: "/brand/event-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased scroll-smooth dark`}>
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#0B0F19] text-white selection:bg-[#FF693C] selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
