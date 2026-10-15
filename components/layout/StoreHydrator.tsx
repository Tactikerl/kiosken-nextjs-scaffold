"use client";

import { useEffect, useRef } from "react";
import { useButikkStore } from "@/store/useButikkStore";

// Storen leses fra localStorage først etter at siden er vist i nettleseren.
// Gjorde vi det under første rendring, ville serveren og nettleseren
// vist ulikt innhold, og React ville klaget på hydrering.
export default function StoreHydrator() {
  const startet = useRef(false);

  useEffect(() => {
    if (startet.current) return;
    startet.current = true;

    async function hent() {
      await useButikkStore.persist.rehydrate();
      useButikkStore.getState().klargjor();
    }

    void hent();
  }, []);

  return null;
}
