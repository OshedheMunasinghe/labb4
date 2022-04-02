<template>
  <div v-if="iceCoffee">
    <div id="flex-box">
      <h1>Hot Coffees</h1>
      <input id="search-box" v-model="search" placeholder="search ice drinks" type="text">
    </div>
    <div id="flex-card">
      <IceCoffeeCard v-for="icCoffee in filterIceCoffee" v-if="filterIceCoffee" :key="icCoffee.id" :coffee="icCoffee" />
    </div>
  </div>
  <h1 v-else> 404 no ice drinks for you :'( </h1>
</template>

<script>
import IceCoffeeCard from "@/views/component/CoffeeCard";
import DataAPI from "@/API/DataAPI";

export default {
  name: "IcedCoffee",
  components: { IceCoffeeCard },
  data() {
    return {
      iceCoffee: null,
      search: ""
    };
  },
  computed: {
    filterIceCoffee() {
      return this.iceCoffee.filter(iceCoff => {
        return iceCoff.title.match(this.search);
      });
    }
  },
  created() {
    DataAPI.getIcedCoffee()
      .then(response => {
        this.iceCoffee = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
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

#button-count-flex {
  display: flex;
  flex-direction: column-reverse;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  padding-bottom: 32px;
}
</style>
