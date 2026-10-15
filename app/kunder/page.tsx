import KundeListe from "@/components/kunde/KundeListe";
import FyllPaSaldo from "@/components/kunde/FyllPaSaldo";
import NyKundeSkjema from "@/components/kunde/NyKundeSkjema";

export default function Kunder() {
  return (
    <>
      <h1>Kunder</h1>

      <section aria-labelledby="velg-tittel">
        <h2 id="velg-tittel">Velg kunde</h2>
        <KundeListe />
      </section>

      <section aria-labelledby="pafyll-tittel">
        <h2 id="pafyll-tittel">Fyll på gavekortet</h2>
        <FyllPaSaldo />
      </section>

      <section aria-labelledby="ny-tittel">
        <h2 id="ny-tittel">Ny kunde</h2>
        <NyKundeSkjema />
      </section>
    </>
  );
}
