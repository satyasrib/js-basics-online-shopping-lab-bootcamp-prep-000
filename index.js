var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = new Object({ itemName: "name of the item", itemPrice: "price of the item", });
  for (i = 0; i< items.length; i++) {
    itemName.push(Math.floor(Math.random() * 100) + 1);
  }
  return itemName
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
