import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Banner, Head } from "nextra/components";

import "nextra-theme-docs/style.css";
import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NavbarLogo } from "@/components/ui/navbar-logo";

export const metadata: Metadata = {
  title: "Diffusion Studio Core 3.0 Documentation",
  description: "Official documentation for Diffusion Studio Core 3.0 - The powerful video composition and animation framework for creative developers.",
  keywords: "Diffusion Studio, video composition, animation framework, creative development, video editing API",
  authors: [{ name: "Diffusion Studio Team" }],
  openGraph: {
    title: "Diffusion Studio Core 3.0 Documentation",
    description: "Official documentation for Diffusion Studio Core 3.0 - The powerful video composition and animation framework for creative developers.",
    type: "website",
    siteName: "Diffusion Studio Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diffusion Studio Core 3.0 Documentation",
    description: "Official documentation for Diffusion Studio Core 3.0 - The powerful video composition and animation framework for creative developers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const banner = <Banner storageKey="core-3-release">Welcome to Diffusion Studio Core v4.0 - Now Available! 🎉</Banner>;
const footer = <Footer className="py-5 text-sm">Copyright © 2025 Diffusion Studio. All rights reserved.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`light ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <Head />
      <body className={GeistSans.className}>
        <Layout
          banner={banner}
          nextThemes={{ defaultTheme: "light", forcedTheme: "light" }}
          darkMode={false}
          navbar={
            <Navbar
              logo={<NavbarLogo />}
              projectLink="https://github.com/diffusionstudio/core"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/diffusionstudio/core-docs/tree/main"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: false, toggleButton: false }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
