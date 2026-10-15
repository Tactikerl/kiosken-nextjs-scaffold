"use client";

import { hentAktivKunde, useButikkStore } from "@/store/useButikkStore";
import { PAFYLLSBELOP } from "@/data/butikk";
import { formaterKr } from "@/utils/formater";
import styles from "./FyllPaSaldo.module.css";

export default function FyllPaSaldo() {
  const klar = useButikkStore((state) => state.klar);
  const kunde = useButikkStore(hentAktivKunde);
  const fyllPaSaldo = useButikkStore((state) => state.fyllPaSaldo);

  if (!klar) {
    return null;
  }

  return (
    <div className={styles.pafyll}>
      <p role="status">
        {kunde === undefined ? (
          "Velg en kunde for å fylle på gavekortet."
        ) : (
          <>
            {kunde.navn} har <strong>{formaterKr(kunde.saldo)}</strong> på gavekortet.
          </>
        )}
      </p>

      <div className={styles.knapper} role="group" aria-label="Velg beløp">
        {PAFYLLSBELOP.map((belop) => (
          <button key={belop} onClick={() => fyllPaSaldo(belop)} disabled={kunde === undefined}>
            Fyll på {formaterKr(belop)}
          </button>
        ))}
      </div>
    </div>
  );
}
