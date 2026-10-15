import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUKTER, STARTSALDO } from "@/data/butikk";
import { blandRekkefolge } from "@/utils/bland";
import type { Kunde, Produkt } from "@/types/butikk";

type ButikkState = {
  kunder: Kunde[];
  aktivKundeId: string | null;
  sortiment: Produkt[];
  sortimentBlandet: boolean;
  klar: boolean;
};

type ButikkActions = {
  leggTilKunde: (navn: string) => void;
  velgKunde: (id: string) => void;
  fyllPaSaldo: (belop: number) => void;
  klargjor: () => void;
};

export function hentAktivKunde(state: ButikkState): Kunde | undefined {
  return state.kunder.find((kunde) => kunde.id === state.aktivKundeId);
}

export const useButikkStore = create<ButikkState & ButikkActions>()(
  persist(
    (set) => ({
      kunder: [],
      aktivKundeId: null,
      sortiment: PRODUKTER,
      sortimentBlandet: false,
      klar: false,

      leggTilKunde: (navn) => {
        const kunde: Kunde = { id: crypto.randomUUID(), navn, saldo: STARTSALDO };
        set((state) => ({ kunder: [...state.kunder, kunde], aktivKundeId: kunde.id }));
      },

      velgKunde: (id) => set({ aktivKundeId: id }),

      fyllPaSaldo: (belop) =>
        set((state) => {
          if (state.aktivKundeId === null || belop <= 0) {
            return state;
          }

          return {
            kunder: state.kunder.map((k) =>
              k.id === state.aktivKundeId ? { ...k, saldo: k.saldo + belop } : k
            ),
          };
        }),

      klargjor: () =>
        set((state) => ({
          sortiment: state.sortimentBlandet ? state.sortiment : blandRekkefolge(PRODUKTER),
          sortimentBlandet: true,
          klar: true,
        })),
    }),
    { name: "kiosken-lager", skipHydration: true }
  )
);
