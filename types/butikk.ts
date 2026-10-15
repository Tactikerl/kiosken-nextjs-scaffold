export type Kategori = "Drikke" | "Bakst" | "Mat" | "Snacks";

export type Produkt = {
  id: string;
  navn: string;
  emoji: string;
  kategori: Kategori;
  pris: number;
  beskrivelse: string;
};

export type Kunde = {
  id: string;
  navn: string;
  saldo: number;
};

export type Rabattniva = "Ingen" | "Bronse" | "Sølv" | "Gull";

export type Rabatt = {
  niva: Rabattniva;
  grense: number;
  prosent: number;
};
