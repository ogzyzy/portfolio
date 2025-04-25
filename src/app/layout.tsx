import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const isProd = process.env.NODE_ENV === "production";

const baseUrl = isProd
  ? "https://www.dominikzygarski.com"
  : "https://dev.d27y48kw4ohp7k.amplifyapp.com";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Dominik Zygarski – DevOps & Cloud Engineer specialized in AWS, CI/CD, Infrastructure as Code, and Big Data projects.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Portfolio",
    description: "DevOps Engineer specializing in AWS, CI/CD and Cloud.",
    url: baseUrl, 
    siteName: "Dominik Zygarski",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 628,
        alt: "Dominik Zygarski – DevOps Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "DevOps Engineer specializing in AWS, CI/CD and Cloud.",
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Portfolio" />
        <meta property="og:description" content="DevOps Engineer specializing in AWS, CI/CD and Cloud." />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:alt" content="Dominik Zygarski – DevOps Engineer" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio" />
        <meta name="twitter:description" content="DevOps Engineer specializing in AWS, CI/CD and Cloud." />
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
