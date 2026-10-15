"use client";

import { useButikkStore } from "@/store/useButikkStore";
import Produktkort from "./Produktkort";
import styles from "./Produktliste.module.css";

export default function Produktliste() {
  const klar = useButikkStore((state) => state.klar);
  const sortiment = useButikkStore((state) => state.sortiment);

  if (!klar) {
    return <p>Laster varene …</p>;
  }

  return (
    <ul className={styles.liste}>
      {sortiment.map((produkt) => (
        <li key={produkt.id}>
          <Produktkort produkt={produkt} />
        </li>
      ))}
    </ul>
  );
}
