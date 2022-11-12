const initialState = [];
export const cartReducer = (cartItems = initialState, action) => {
  switch (action.type) {
    case 'cart/addItem':

      let alreadyInCart = false;
      // if cart not empty, check for duplicates
      if ( cartItems.length ) {
        alreadyInCart = cartItems.find( item => {
          return itemsAreEqual(action.payload, item); 
        });
        // not found === undef, else returns the ref to item that is already present
      }

      if ( !alreadyInCart ) { // no such item found
        action.payload.count = 1;
        return [...cartItems, action.payload];
      } else {
        alreadyInCart.count += 1;
        return [...cartItems];
      }
    case 'cart/removeItem':
      let remainingItems = [...cartItems]; // need a ref
      remainingItems.splice(action.index, 1);
      return remainingItems;

    case 'cart/setCount':
      cartItems[action.itemIndex].count = action.count;
      return [...cartItems];

    default:
      return cartItems;
  }
}

function itemsAreEqual(item1, item2) {
  // first check if attribute name is equal (if no, then feel free to add it to the store)
  if ( item1.name !== item2.name ) {
    return false;
  }
  // then check if attributes exist and attribute.items.length is the same
  else if ( item1.attributes.length && item1.attributes.length !== item2.attributes.length ) {
    return false;
  }
  // if it is, compare the values of the attributes
  else {
    let foundMatches = 0;
    let attributeCount = item1.attributes.length;
    for (let i = 0; i < attributeCount; i++) {
      // attributes for the same item should never change their order
      if (item1.attributes[i].items[0].value === item2.attributes[i].items[0].value) {
        foundMatches++;
      }
    }
    if (foundMatches === attributeCount) {
      return true;
    } else {
      return false;
    }
  }
}