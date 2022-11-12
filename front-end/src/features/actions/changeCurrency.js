export function changeCurrency(currency) {
  return {
    type: 'changeCurrency',
    payload: currency,
  }
}