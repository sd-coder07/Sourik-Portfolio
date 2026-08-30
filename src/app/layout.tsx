import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#12110F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sourik Das — Full Stack Developer | Next.js & WordPress",
  description:
    "I build websites that ship — fast, modern Next.js applications for products and high-volume, reliable WordPress websites (25+ shipped). Full-stack developer based in India.",
  keywords: [
    "Sourik Das",
    "Full Stack Developer",
    "Next.js Developer",
    "WordPress Developer",
    "React Developer",
    "Freelance Web Developer",
    "Generative AI",
    "Tailwind CSS",
  ],
  authors: [{ name: "Sourik Das", url: "https://github.com/sd-coder07" }],
  creator: "Sourik Das",
  openGraph: {
    title: "Sourik Das — Full Stack Developer | Next.js & WordPress",
    description:
      "I build websites that ship — Next.js for products, WordPress for business. 25+ production sites shipped.",
    url: "https://sourikdas.dev",
    siteName: "Sourik Das Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourik Das — Full Stack Developer | Next.js & WordPress",
    description:
      "I build websites that ship — Next.js for products, WordPress for business. 25+ production sites shipped.",
    creator: "@sd_coder07",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-bg text-text-primary font-sans antialiased selection:bg-accent selection:text-bg min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
