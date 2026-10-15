import Link from "next/link";
import { STARTSALDO } from "@/data/butikk";
import { formaterKr } from "@/utils/formater";
import RabattTabell from "@/components/rabatt/RabattTabell";

export default function Info() {
  return (
    <>
      <h1>Om Kiosken</h1>

      <section aria-labelledby="slik-tittel">
        <h2 id="slik-tittel">Slik handler du</h2>

        <ol>
          <li>
            Velg hvem du er på <Link href="/kunder">Kunder</Link>, eller opprett
            en ny kunde. Nye kunder får {formaterKr(STARTSALDO)} på gavekortet.
          </li>
          <li>
            Legg varer i handlekurven i <Link href="/">butikken</Link>.
          </li>
          <li>
            Gå til <Link href="/kasse">kassen</Link> og betal med gavekortet.
          </li>
        </ol>

        <p>
          Handlekurven huskes selv om du bytter side, laster siden på nytt eller
          lukker nettleseren.
        </p>
      </section>

      <section aria-labelledby="rabatt-tittel">
        <h2 id="rabatt-tittel">Rabatter</h2>
        <p>
          Jo mer du handler for, jo mer rabatt får du. Rabatten trekkes fra før
          du betaler.
        </p>

        <RabattTabell />
      </section>
    </>
  );
}
