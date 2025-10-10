// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { client } from '@/lib/sanity'
import Nav from '@/app/components/Nav/Nav'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Headless Site",
  description: "A headless CMS with Next.js and Sanity",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(`*[_type == "settings"][0]`)

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Nav global */}
        <Nav settings={settings} />
        
        {/* Contenido de cada página */}
        {children}
        
        {/* Footer global */}
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="font-semibold">{settings?.title} © {new Date().getFullYear()}</p>
            <p className="text-gray-400 mt-2">{settings?.description}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}