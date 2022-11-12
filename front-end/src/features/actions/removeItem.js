export function removeItem(itemIndex) {
  return {
    type: 'cart/removeItem',
    index: itemIndex,
  }
}