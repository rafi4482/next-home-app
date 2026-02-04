import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fire Home",
  description: "Find your next home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <nav className="flex items-center justify-between px-6 py-4 bg-[#0a1128] text-white sticky top-0 z-50">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Fire Home
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild className="text-white hover:bg-white/10 hover:text-white">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-white text-[#0a1128] hover:bg-white/90">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
