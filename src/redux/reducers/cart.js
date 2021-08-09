const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPlice = (array) => array.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPlice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const arrItems = items.flat();
      const totalPrice = getTotalPlice(arrItems);

      return {
        ...state,
        items: newItems,
        totalCount: arrItems.length,
        totalPrice,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };
    default:
      return state;
  }
};

export default cart;
