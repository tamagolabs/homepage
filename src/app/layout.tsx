import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/data/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Desenvolvimento de Software, APIs, Mobile e SaaS`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "desenvolvimento de software",
    "desenvolvedor full stack solo",
    "desenvolvimento react native",
    "aplicativos mobile expo",
    "desenvolvimento de apis",
    "desenvolvimento saas",
    "landing pages de alta conversão",
    "programador sênior",
    "next.js 15",
    "bun runtime",
    "tamagolabs",
  ],
  authors: [
    {
      name: siteConfig.founder.name,
      url: siteConfig.founder.portfolioUrl,
    },
  ],
  creator: siteConfig.founder.name,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: `${siteConfig.name} | Desenvolvimento de Software de Alta Performance`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "tamagolabs - Estúdio de Desenvolvimento de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Desenvolvimento de Software`,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased dark`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-emerald-500 selection:text-zinc-950">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
