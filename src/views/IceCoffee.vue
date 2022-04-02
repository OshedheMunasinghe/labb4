<template>
  <HotCoffeeCard v-for="icCoffee in filterHotCoffee" v-if="filterHotCoffee" :key="icCoffee.id" :coffee="icCoffee" />
</template>

<script>
import HotCoffeeCard from "@/views/component/CoffeeCard";
import DataAPI from "@/API/DataAPI";

export default {
  name: "IcedCoffee",
  components: { HotCoffeeCard },
  data() {
    return {
      iceCoffee: null,
      search: ''
    };
  },
  computed: {
    filterHotCoffee() {
      return this.iceCoffee.filter(iceCoff => {
        return iceCoff.title.match(this.search);
      });
    }
  },
  created() {
    DataAPI.getIcedCoffee()
      .then(response => {
        this.iceCoffee = response.data; //den kommer lagra i htcoffee från api
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>

</style>
