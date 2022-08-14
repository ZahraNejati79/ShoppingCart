export const findInCart = (cart, p) => {
  const index = cart.findIndex((c) => c.id === p.id);
  return cart[index];
};
