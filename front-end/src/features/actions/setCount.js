export function setCount(item) {
  return {
    type: 'cart/setCount',
    itemIndex: item.index,
    count: item.count,
  }
}