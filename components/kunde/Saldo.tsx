"use client";

import { hentAktivKunde, useButikkStore } from "@/store/useButikkStore";
import { formaterKr } from "@/utils/formater";

export default function Saldo() {
  const klar = useButikkStore((state) => state.klar);
  const kunde = useButikkStore(hentAktivKunde);

  if (!klar) {
    return null;
  }

  if (kunde === undefined) {
    return <p>Ingen kunde valgt</p>;
  }

  return (
    <p>
      {kunde.navn}: <strong>{formaterKr(kunde.saldo)}</strong>
    </p>
  );
}
