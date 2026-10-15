"use client";

import { useState, type FormEvent } from "react";
import { useButikkStore } from "@/store/useButikkStore";
import { STARTSALDO } from "@/data/butikk";
import { formaterKr } from "@/utils/formater";
import styles from "./NyKundeSkjema.module.css";

export default function NyKundeSkjema() {
  const [navn, setNavn] = useState("");
  const leggTilKunde = useButikkStore((state) => state.leggTilKunde);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmet = navn.trim();
    if (trimmet === "") {
      return;
    }

    leggTilKunde(trimmet);
    setNavn("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.skjema}>
      <label htmlFor="kundenavn">Navn</label>
      <input
        id="kundenavn"
        value={navn}
        onChange={(event) => setNavn(event.target.value)}
        autoComplete="name"
        required
      />
      <button type="submit">Opprett kunde</button>
      <p className={styles.hint}>Nye kunder får {formaterKr(STARTSALDO)} på gavekortet.</p>
    </form>
  );
}
