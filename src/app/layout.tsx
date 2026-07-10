import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { BookingDrawer } from "@/components/BookingDrawer";
import { CursorGlow } from "@/components/CursorGlow";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "FÁNCY — дім краси у Рівному",
    template: "%s | FÁNCY",
  },
  description: site.description,
  keywords: [
    "салон краси Рівне",
    "манікюр Рівне",
    "фарбування волосся Рівне",
    "макіяж Рівне",
    "брови Рівне",
    "FÁNCY Рівне",
  ],
  applicationName: "FÁNCY",
  authors: [{ name: "FÁNCY" }],
  creator: "FÁNCY",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: baseUrl,
    siteName: "FÁNCY — дім краси",
    title: "FÁNCY — краса, що звучить як ти",
    description: site.description,
    images: [
      {
        url: "/images/interior.jpg",
        width: 1600,
        height: 900,
        alt: "FÁNCY — дім краси у Рівному",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FÁNCY — дім краси у Рівному",
    description: site.description,
    images: ["/images/interior.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3efe8" },
    { media: "(prefers-color-scheme: dark)", color: "#141310" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "FÁNCY — дім краси",
  image: `${baseUrl}/images/interior.jpg`,
  telephone: site.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Степана Бандери, 11",
    addressLocality: "Рівне",
    addressCountry: "UA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  sameAs: [site.instagramUrl],
  priceRange: "₴₴",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('fancy-theme');if(t){document.documentElement.dataset.theme=t}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.dataset.theme='dark'}}catch(e){}`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <CursorGlow />
        <Header />
        <main>{children}</main>
        <Footer />
        <BookingDrawer />
      </body>
    </html>
  );
}
