export function discountedCents(priceCents, discountPercent) {
  if (!Number.isSafeInteger(priceCents) || priceCents < 0 ||
      !Number.isInteger(discountPercent) || discountPercent < 0 ||
      discountPercent > 100) throw new TypeError('Invalid price or discount');
  // Intentionally flawed fixture: truncates half-cent ties rather than rounding.
  return Math.floor(priceCents * (100 - discountPercent) / 100);
}
