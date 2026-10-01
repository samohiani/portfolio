import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Manrope, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const cinema = Cormorant_Garamond({
  variable: "--font-cinema",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelohiani-portfolio.vercel.app"),
  title: "Samuel Ohiani, Software Engineer",
  description:
    "Samuel Ohiani is a software engineer building web products, backend APIs and practical automations.",
  keywords: [
    "Samuel Ohiani",
    "Backend Engineer",
    "Software Engineer",
    "Full-stack Engineer",
    "Payment Infrastructure",
  ],
  authors: [{ name: "Samuel Ohiani" }],
  openGraph: {
    title: "Samuel Ohiani, Software Engineer",
    description:
      "Selected work across full-stack products, backend systems and payment infrastructure.",
    type: "website",
  },
};

const introScript = `
  try {
    document.documentElement.dataset.theme = localStorage.getItem("samuel-portfolio-theme") === "light" ? "light" : "dark";
  } catch (error) {
    document.documentElement.dataset.theme = "dark";
  }
  try {
    var key = "samuel-portfolio-intro-v5";
    var seen = sessionStorage.getItem(key);
    var replay = new URLSearchParams(location.search).get("intro") === "1";
    document.documentElement.dataset.intro = seen && !replay ? "skip" : "play";
    if (!seen) sessionStorage.setItem(key, "seen");
  } catch (error) {
    document.documentElement.dataset.intro = "play";
  }
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-intro="play"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} ${cinema.variable}`}
    >
      <body>
        <Script id="intro-session" strategy="beforeInteractive">
          {introScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
