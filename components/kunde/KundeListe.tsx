"use client";

import { useButikkStore } from "@/store/useButikkStore";
import { formaterKr } from "@/utils/formater";
import styles from "./KundeListe.module.css";

export default function KundeListe() {
  const klar = useButikkStore((state) => state.klar);
  const kunder = useButikkStore((state) => state.kunder);
  const aktivKundeId = useButikkStore((state) => state.aktivKundeId);
  const velgKunde = useButikkStore((state) => state.velgKunde);

  if (!klar) {
    return <p>Laster kunder …</p>;
  }

  if (kunder.length === 0) {
    return <p>Ingen kunder ennå. Opprett den første under!</p>;
  }

  return (
    <ul className={styles.liste}>
      {kunder.map((kunde) => (
        <li key={kunde.id}>
          <button onClick={() => velgKunde(kunde.id)} aria-pressed={kunde.id === aktivKundeId}>
            {kunde.navn} – {formaterKr(kunde.saldo)}
          </button>
        </li>
      ))}
    </ul>
  );
}
