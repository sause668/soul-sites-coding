import type { Metadata, Viewport } from "next";
import "./globals.css";
import { chelaOne, imprima, pottaOne } from "@/app/lib/fonts";
import { NavBar } from "@/app/(_home)/_components/NavBar/NavBar";
import { FooterBar } from "@/app/(_home)/_components/FooterBar/FooterBar";

export const metadata: Metadata = {
  title: "Soul Sites",
  description: "Soul Never Dies",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = [
    pottaOne.variable,
    chelaOne.variable,
    imprima.variable,
  ].join(" ");

  return (
    <html lang="en">
      <body
        className={`${fontVars} min-h-screen bg-screen-white font-body antialiased`}
      >
        <NavBar />
        <main className="pt-14">{children}</main>
        <FooterBar />
      </body>
    </html>
  );
}
