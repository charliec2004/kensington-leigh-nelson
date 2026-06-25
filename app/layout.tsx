import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isProjectPagesBuild = basePath === "/kensington-leigh-nelson";
const siteUrl = isProjectPagesBuild
  ? `https://charliec2004.github.io${basePath}`
  : "https://kensingtonnelson.com";
const title = "Kensington Leigh Nelson";
const description =
  "Portfolio for Kensington Leigh Nelson, a Chapman University business graduate interested in investment research, economic context, and client-facing wealth management.";
const ogImageUrl = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Kensington Leigh Nelson portfolio preview",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f7f5ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
