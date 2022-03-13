<template>
  <div>
<!--    todo when user has liked it has to save the counter-->
    <h1>Hot Coffees</h1>
    <router-link to="/ice">Like Ice Coffee!</router-link>
    <input type="text" v-model="search" placeholder="search hot coffee">
    <HotCoffeeCard v-if="filterHotCoffee" v-for="htcoffee in filterHotCoffee" :key="htcoffee.id" :htCoff="htcoffee" />
  </div>
</template>
<script>

import HotCoffeeCard from "@/views/component/CoffeeCard";
import DataAPI from "@/API/DataAPI";

export default {
  name: "HotCoffee",
  components: { HotCoffeeCard },
  data() {
    return {
      hotCoffee: null,
      search: ''
    };
  },
  computed: {
    filterHotCoffee() {
      return this.hotCoffee.filter(hotCoff => {
        return hotCoff.title.match(this.search);
      });
    }
  },
  created() {
    DataAPI.getHotCoffee()
      .then(response => {
        this.hotCoffee = response.data; //den kommer lagra i htcoffee från api
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style>
</style>
