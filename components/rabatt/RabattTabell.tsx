import { RABATTNIVAER } from "@/data/butikk";
import { formaterKr } from "@/utils/formater";
import type { Rabattniva } from "@/types/butikk";
import styles from "./RabattTabell.module.css";

type RabattTabellProps = {
  aktivNiva?: Rabattniva;
};

export default function RabattTabell({ aktivNiva }: RabattTabellProps) {
  return (
    <table className={styles.tabell}>
      <caption>Rabattnivåer</caption>
      <thead>
        <tr>
          <th scope="col">Nivå</th>
          <th scope="col">Når du handler for minst</th>
          <th scope="col">Rabatt</th>
        </tr>
      </thead>
      <tbody>
        {RABATTNIVAER.map((rabatt) => {
          const erAktiv = rabatt.niva === aktivNiva;

          return (
            <tr
              key={rabatt.niva}
              className={erAktiv ? styles.aktiv : undefined}
              aria-current={erAktiv ? "true" : undefined}
            >
              <th scope="row">{rabatt.niva}</th>
              <td>{formaterKr(rabatt.grense)}</td>
              <td>{rabatt.prosent} %</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
