import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "troll", price: 20 },
      { name: "troll2", price: 40 },
      { name: "troll3", price: 50 },
      { name: "troll4", price: 20 }
    ]
  },
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map( product => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations: {},
  actions: {}
});
