export default function filterCurrency(priceList, targetCurrency) {
  const price = priceList.find(price => price.currency === targetCurrency);
  return (price !== undefined) ? price.amount : 'N/a';
}