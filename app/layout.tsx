import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import TransitionCurtain from "./components/TransitionCurtain";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Editorial serif display face, exposed as --font-syne so `.font-syne`
// markup carried over from nordneuron.com renders the same.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pankaj Kumar — Tools & Writing",
  description:
    "Free AI tools (job application tailor, work-visa fit report), side projects, and essays on AI agents, LLM engineering and governance by Pankaj Kumar.",
  openGraph: {
    title: "Pankaj Kumar — Tools & Writing",
    description:
      "Free AI tools, side projects, and essays on AI agents, LLM engineering and governance.",
    siteName: "Pankaj Kumar",
    images: [{ url: "/architecture.png", width: 1200, height: 630, alt: "Pankaj Kumar" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1339913868506845"
          crossOrigin="anonymous"
        />
      </head>

      <body className={`${inter.variable} ${fraunces.variable}`}>
        <TransitionCurtain />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
