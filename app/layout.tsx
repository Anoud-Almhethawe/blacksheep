import React from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { roboto, newsflashbb, proximanova } from "../fonts/font";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "New Black Sheep",
  description: "Generated by create next app",
  icons: {
    icon: "./public/assets/poka-nobke.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "primary-green",
          footerActionLink: "primary-green hover:primary-black",
        },
      }}
    >
      <html
        lang="en"
        className={`${roboto.variable} ${newsflashbb.variable} ${proximanova.variable} `}
      >
        <link rel="preload" as="image" href="/assets/home-img.svg"></link>
        <link rel="preload" as="image" href="/assets/logo.svg"></link>
        <body className="relative overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}