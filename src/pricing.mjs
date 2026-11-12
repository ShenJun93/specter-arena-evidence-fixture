export function discountedCents(priceCents, discountPercent) {
  if (!Number.isSafeInteger(priceCents) || priceCents < 0 ||
      !Number.isInteger(discountPercent) || discountPercent < 0 ||
      discountPercent > 100) throw new TypeError('Invalid price or discount');
  // Demonstration fix: integer half-up rounding for a fractional-cent discount.
  const product = priceCents * (100 - discountPercent);
  if (!Number.isSafeInteger(product)) throw new RangeError('Price is too large');
  return Math.floor((product + 50) / 100);
}
