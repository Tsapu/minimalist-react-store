export function addItem(item) {
  return {
    type: 'cart/addItem',
    payload: item,
  }
}