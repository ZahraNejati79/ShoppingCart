export function checkInCart(cart, product) {
  console.log(cart.find((c) => c.id === product.id));
  return cart.find((c) => c.id === product.id);
}
