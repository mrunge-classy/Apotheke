const currencyFormatter = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
});

export function formatPrice(amount: number) {
  return currencyFormatter.format(amount);
}

const dateFormatter = new Intl.DateTimeFormat("de-AT", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function formatDate(isoDate: string) {
  return dateFormatter.format(new Date(isoDate));
}
