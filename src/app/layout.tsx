import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1st World Konkani Music Mega Convention | Official Event Photo Library",
  description:
    "Official High-Resolution Photography Archive of Po'ylo Vishv Konknni So'ngeet Mo'hame'll (First World Konkani Music Mega Convention), organized by Mandd Sobhann. Browse albums, download original photos, and share via WhatsApp.",
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
    <html lang="en" className={`${poppins.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-[#F8FAFC] text-slate-900 selection:bg-[#457CF3] selection:text-white">
        {children}
      </body>
    </html>
  );
}
