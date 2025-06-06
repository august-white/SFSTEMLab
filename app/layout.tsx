import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
// import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { dark, shadesOfPurple } from '@clerk/themes'




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SF STEM Lab",
  description: "A nonprofit community promiting STEM education in the Bay Area",
  icons: './images/Logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      // <ClerkProvider
      // afterSignOutUrl={'/sign-in'}
      //     appearance={{
      //     baseTheme: dark,
      // }}
      // >
      <html lang="en">
          <body className="dark bg-[#1e439d] justify-start">{children}</body>
      </html>
      // </ClerkProvider>
  );
}
