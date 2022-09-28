export default function formatCurrency(currency) {
  var x = currency;
  x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return x;
}
