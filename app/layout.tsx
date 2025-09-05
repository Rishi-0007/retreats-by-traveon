import type { Metadata } from "next";
import "./globals.css";
import { poppins, nunito } from "@/lib/fonts";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Retreats by Traveon",
  description: "Retreats that Renew, Teams that Thrive.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Retreats by Traveon",
    description:
      "Immersive wellness, inspiring corporate offsites, community journeys, and MICE experiences.",
    images: [
      { url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retreats by Traveon",
    description: "Wellness, Corporate, Community & MICE experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
