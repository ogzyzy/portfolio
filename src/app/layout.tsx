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
        height: 630,
        alt: "Dominik Zygarski – DevOps Engineer",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
