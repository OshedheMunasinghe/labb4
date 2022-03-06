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
      let response = EventService.getHotCoffee();
      {
        commit("setCoffeAPI", (await response).data);
      }
    }
  },
  modules: {}
});
