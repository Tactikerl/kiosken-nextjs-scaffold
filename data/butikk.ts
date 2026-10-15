import type { Produkt, Rabatt } from "@/types/butikk";

export const STARTSALDO = 500;

export const PRODUKTER: Produkt[] = [
  {
    id: "kaffe",
    navn: "Kaffe",
    emoji: "☕",
    kategori: "Drikke",
    pris: 35,
    beskrivelse: "Nytraktet kaffe av lyse bønner. Påfyll er gratis.",
  },
  {
    id: "te",
    navn: "Te",
    emoji: "🍵",
    kategori: "Drikke",
    pris: 29,
    beskrivelse: "Grønn te med et hint av sitron.",
  },
  {
    id: "smoothie",
    navn: "Smoothie",
    emoji: "🥤",
    kategori: "Drikke",
    pris: 55,
    beskrivelse: "Mango, banan og appelsin, mikset når du bestiller.",
  },
  {
    id: "croissant",
    navn: "Croissant",
    emoji: "🥐",
    kategori: "Bakst",
    pris: 32,
    beskrivelse: "Smørbakt og sprø, bakt i morges.",
  },
  {
    id: "muffins",
    navn: "Muffins",
    emoji: "🧁",
    kategori: "Bakst",
    pris: 29,
    beskrivelse: "Blåbærmuffins med sprø smuldretopp.",
  },
  {
    id: "baguett",
    navn: "Baguett",
    emoji: "🥪",
    kategori: "Mat",
    pris: 59,
    beskrivelse: "Baguett med kylling, pesto og salat.",
  },
  {
    id: "suppe",
    navn: "Dagens suppe",
    emoji: "🍲",
    kategori: "Mat",
    pris: 65,
    beskrivelse: "Varm suppe med nybakt brød ved siden av.",
  },
  {
    id: "eple",
    navn: "Eple",
    emoji: "🍎",
    kategori: "Snacks",
    pris: 15,
    beskrivelse: "Saftig norsk eple fra Hardanger.",
  },
  {
    id: "sjokolade",
    navn: "Sjokolade",
    emoji: "🍫",
    kategori: "Snacks",
    pris: 25,
    beskrivelse: "Mørk sjokolade med 70 % kakao.",
  },
];

export const RABATTNIVAER: Rabatt[] = [
  { niva: "Ingen", grense: 0, prosent: 0 },
  { niva: "Bronse", grense: 50, prosent: 5 },
  { niva: "Sølv", grense: 100, prosent: 10 },
  { niva: "Gull", grense: 150, prosent: 15 },
];

export const PAFYLLSBELOP = [100, 200, 500];
