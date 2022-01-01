import { createStore } from "vuex";
import EventService from "@/API/DataAPI";
export default createStore({
  state: {
    coffee: null
  },
  mutations: {
    setCoffeAPI(state, coffee) {
      state.coffee = coffee;
    }
  },
  actions: {
    async brewCoffee({ commit }) {
      let response = await EventService().get("/hot");
      commit("setCoffeAPI", response.data);
    }
  }
  ,
  modules: {}
});
