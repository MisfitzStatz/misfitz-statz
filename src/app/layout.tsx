import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://misfitzstatz.com"),
  title: "Misfitz Statz",
  description: "Track your Misfitz progress, compare players, explore leaderboards and view detailed statistics.",
  openGraph: {
    title: "Misfitz Statz",
    description: "Track your Misfitz progress, compare players, explore leaderboards and view detailed statistics.",
    url: "https://misfitzstatz.com",
    siteName: "Misfitz Statz",
    images: [{ url: "front.png", width: 1027, height: 310 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misfitz Statz",
    description: "Track your Misfitz progress, compare players and climb the leaderboards.",
    images: ["/front.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
