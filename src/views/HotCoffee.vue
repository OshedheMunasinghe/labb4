<template>
  <div>
    <div id="flex-box">
      <h1>Hot Coffees</h1>
      <input v-if="hotCoffee" id="search-box" v-model="search" placeholder="search hot coffee" type="text">
    </div>
    <div id="flex-card">
      <HotCoffeeCard v-if="filterHotCoffee" v-for="htcoffee in filterHotCoffee" :key="htcoffee.id" :coffee="htcoffee" />
    </div>
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
        this.hotCoffee = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style>
h1 {
  color: white;
}

#flex-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#search-box {
  background-color: white;
  color: darkseagreen;
}

#flex-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#like-button-style {
  background-color: greenyellow;
  border-color: darkolivegreen;
  color: black;
  font-weight: bold;
  width: 100px;
}

#button-count-flex{
  display: flex;
  flex-direction: column-reverse;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  padding-bottom: 32px;
}
</style>
