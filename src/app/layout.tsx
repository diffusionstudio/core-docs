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
  title: "Core 3.0",
  description: "Core 3.0 is here.",
};

const banner = <Banner storageKey="some-key">Core 3.0 is released 🎉</Banner>;
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
          docsRepositoryBase="https://github.com/diffusionstudio/core-docs/tree/main/docs"
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
