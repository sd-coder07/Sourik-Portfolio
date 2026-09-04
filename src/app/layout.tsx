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
  metadataBase: new URL("https://sourikdas.dev"),
  title: {
    default: "Sourik Das — Full Stack Next.js & WordPress Web Developer | UI/UX & Poster Design",
    template: "%s | Sourik Das",
  },
  description:
    "Professional web development & creative services by Sourik Das. Specializing in high-performance Next.js web applications, high-speed WordPress websites (25+ shipped, 90+ Core Web Vitals), custom product & service poster designs, and Figma UI/UX prototyping.",
  keywords: [
    "Sourik Das",
    "Full Stack Web Developer",
    "Next.js Developer India",
    "WordPress Developer India",
    "WordPress Speed Optimization",
    "Core Web Vitals 90+",
    "React Developer",
    "Custom Poster Design",
    "Product Poster Design",
    "Service Poster Design",
    "UI UX Designer Figma",
    "Freelance Web Developer",
    "WooCommerce Developer",
    "Next.js App Router",
    "Tailwind CSS Developer",
  ],
  authors: [{ name: "Sourik Das", url: "https://github.com/sd-coder07" }],
  creator: "Sourik Das",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sourik Das — Full Stack Next.js & WordPress Web Developer",
    description:
      "25+ live websites shipped. Next.js web apps, 90+ Core Web Vitals WordPress builds, high-CTR product & service poster designs, and Figma UI/UX.",
    url: "https://sourikdas.dev",
    siteName: "Sourik Das — Web Engineering & Design",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourik Das — Full Stack Next.js & WordPress Web Developer",
    description:
      "Next.js web apps, 90+ Core Web Vitals WordPress websites, product & service poster designs, and Figma UI/UX.",
    creator: "@sd_coder07",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sourik Das — Web Engineering & Creative Services",
  image: "https://sourikdas.dev/icon.svg",
  url: "https://sourikdas.dev",
  telephone: "",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.5726",
    longitude: "88.3639",
  },
  founder: {
    "@type": "Person",
    name: "Sourik Das",
    jobTitle: "Full Stack Web Developer & Designer",
    url: "https://sourikdas.dev",
    sameAs: [
      "https://github.com/sd-coder07",
      "https://linkedin.com/in/sourik-das",
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development and Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Next.js Web Application Development",
          description:
            "Custom full-stack web applications, dynamic SaaS platforms, and SSR landing pages built with Next.js 14 and React.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WordPress Website Development & Speed Optimization",
          description:
            "Fast, reliable WordPress builds with custom themes, WooCommerce stores, and guaranteed 90+ Core Web Vitals.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Poster Making (Product & Service Based)",
          description:
            "High-impact promotional graphics and social media advertising posters for physical products, e-commerce, and B2B services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Design (Figma & Canva UI/UX)",
          description:
            "Modern UI/UX prototyping in Figma, responsive design systems, and modular Canva brand templates.",
        },
      },
    ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-text-primary font-sans antialiased selection:bg-accent selection:text-bg min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
