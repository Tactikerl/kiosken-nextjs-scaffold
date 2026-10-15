"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Saldo from "@/components/kunde/Saldo";
import styles from "./Header.module.css";

const LENKER = [
  { href: "/", tekst: "Butikk" },
  { href: "/kasse", tekst: "Kasse" },
  { href: "/kunder", tekst: "Kunder" },
  { href: "/info", tekst: "Info" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <p className={styles.logo}>🏪 Kiosken</p>

      <nav className={styles.meny} aria-label="Hovedmeny">
        {LENKER.map((lenke) => {
          const erAktiv = lenke.href === pathname;

          return (
            <Link
              key={lenke.href}
              href={lenke.href}
              className={erAktiv ? "active" : undefined}
              aria-current={erAktiv ? "page" : undefined}
            >
              {lenke.tekst}
            </Link>
          );
        })}
      </nav>

      <div className={styles.saldo}>
        <Saldo />
      </div>
    </header>
  );
}
