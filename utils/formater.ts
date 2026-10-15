const kroneFormat = new Intl.NumberFormat("nb-NO", {
  style: "currency",
  currency: "NOK",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 *
 * @param belop Beløpet i hele kroner.
 * @returns Beløpet som tekst med valutategn.
 */
export function formaterKr(belop: number): string {
  return kroneFormat.format(belop);
}
