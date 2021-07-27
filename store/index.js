export const state = () => ({
  basketCounter: 0,
  basketProducts: {},
  orders: {},
})

export const mutations = {
  addBasketProducts(state, product) {
    state.basketProducts[product.id] = product;
    state.basketCounter++;
    // localStorage.setItem('historyBasket', state.basketProducts)
    // localStorage.setItem('historyCounter', state.basketCounter)
  },
  deleteBasketProducts(state, product) {
    delete state.basketProducts[product.id];
    state.basketCounter--;
  },

  addOrder(state, info) {
    state.orders[info.phone] = info;
    state.basketCounter = 0;
    state.basketProducts = {};
  }
}
