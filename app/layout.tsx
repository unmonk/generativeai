import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/modal-provider";
import { ToasterProvider } from "@/components/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercs AI Generation",
  description: "Mercs Community AI Generation Tools",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gen.mercsclan.com",
    siteName: "Mercs AI Generation",
    title: "Mercs AI Generation",
    description: "Mercs Community AI Generation Tools",
    images: [
      {
        url: "https://gen.mercsclan.com/images/og-image.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://gen.mercsclan.com/images/og-image.png",
      },
    ],
    site: "https://gen.mercsclan.com",
    card: "summary_large_image",
    title: "Mercs AI Generation",
    description: "Mercs Community AI Generation Tools",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToasterProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
