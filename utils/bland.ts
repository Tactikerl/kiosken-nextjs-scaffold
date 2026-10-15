export function blandRekkefolge<T>(liste: T[]): T[] {
  const kopi = [...liste];

  for (let i = kopi.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopi[i], kopi[j]] = [kopi[j], kopi[i]];
  }

  return kopi;
}
