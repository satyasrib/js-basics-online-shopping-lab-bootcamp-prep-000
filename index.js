var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItems = new Object({ itemName: "name of the item", itemPrice: "price of the item" });
  for (let i = 0; i< item.length; i++) {
    cart.push(Math.floor(Math.random() * 100) + 1);
  }
  return (`${items} has been added to your cart.`)
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
