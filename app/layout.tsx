import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import StoreHydrator from "@/components/layout/StoreHydrator";

export const metadata: Metadata = {
  title: "Kiosken",
  description: "En liten nettbutikk bygget med Next.js og Zustand",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="no">
      <body>
        <StoreHydrator />

        <a href="#innhold" className="hoppTilInnhold">
          Hopp til innhold
        </a>

        <Header />

        <main id="innhold" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
