import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelohiani-portfolio.vercel.app"),
  title: "Samuel Ohiani | Full stack Software Engineer",
  description:
    "Full stack software engineer building reliable fintech systems, product interfaces, payment infrastructure, and API first platforms.",
  keywords: [
    "Samuel Ohiani",
    "Backend Engineer",
    "Full stack Engineer",
    "Node.js Developer",
    "Fintech Engineer",
    "TypeScript",
    "Payment Infrastructure",
  ],
  authors: [{ name: "Samuel Ohiani" }],
  openGraph: {
    title: "Samuel Ohiani | Full stack Software Engineer",
    description:
      "Reliable fintech systems, product interfaces, payment infrastructure, and API first platforms.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Samuel Ohiani | Full stack Software Engineer",
    description:
      "Reliable fintech systems, product interfaces, payment infrastructure, and API first platforms.",
  },
};

const themeScript = `
  try {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    var storedTheme = localStorage.getItem("samuel-theme");
    document.documentElement.dataset.theme = storedTheme === "dark" ? "dark" : "light";
  } catch (error) {
    window.scrollTo(0, 0);
    document.documentElement.dataset.theme = "light";
  }
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${dmSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
    >
      <body>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
