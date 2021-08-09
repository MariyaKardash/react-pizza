export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  paylload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
