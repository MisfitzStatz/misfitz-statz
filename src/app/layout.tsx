import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DeviceGuard from "../components/DeviceGuard";
import WebMCPProvider from "@/components/WebMCPProvider";
import { AuthProvider } from "@/lib/AuthContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://misfitzstatz.com"),
  title:        "Misfitz Statz",
  description:  "Track your Misfitz progress, compare players, explore leaderboards and view detailed statistics.",

  openGraph: {
    title:        "Misfitz Statz",
    description:  "Track your Misfitz progress, compare players, explore leaderboards and view detailed statistics.",
    url:          "https://misfitzstatz.com",
    siteName:     "Misfitz Stats",
    images: [
      {
        url: "front.png",
        width: 1027,
        height: 310,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card:         "summary_large_image",
    title:        "Misfitz Statz",
    description:  "Track your Misfitz progress, compare players and climb the leaderboards.",
    images: ["/front.png"],
  },
};

export default function RootLayout({children,}:Readonly<{children: React.ReactNode}>) {
return (
<html lang="en">
<body className="min-h-svh bg-[#0B0F19] text-white">
  <WebMCPProvider />
  <AuthProvider>
  <div className="flex min-h-svh flex-col">
    <Header />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
  </AuthProvider>
  </body>
</html>
);
}