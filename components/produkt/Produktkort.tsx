"use client";

import { useState } from "react";
import { formaterKr } from "@/utils/formater";
import type { Produkt } from "@/types/butikk";
import styles from "./Produktkort.module.css";

type ProduktkortProps = {
  produkt: Produkt;
};

export default function Produktkort({ produkt }: ProduktkortProps) {
  const [visBakside, setVisBakside] = useState(false);

  return (
    <article
      className={`${styles.kort} ${visBakside ? styles.bakside : ""}`}
      data-kategori={produkt.kategori}
    >
      <p className={styles.kategori}>{produkt.kategori}</p>
      <p className={styles.pris}>{formaterKr(produkt.pris)}</p>
      <h2 className={styles.navn}>{produkt.navn}</h2>

      {visBakside ? (
        <p className={styles.beskrivelse}>{produkt.beskrivelse}</p>
      ) : (
        <p className={styles.bilde} aria-hidden="true">
          {produkt.emoji}
        </p>
      )}

      <div className={styles.knapper}>
        <button onClick={() => setVisBakside((vis) => !vis)} aria-pressed={visBakside}>
          Detaljer<span className="skjult"> om {produkt.navn}</span>
        </button>
      </div>
    </article>
  );
}
