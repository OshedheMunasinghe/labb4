<template>
<!--  The Home page where it shows all coffees-->
  <div>
    <h1>All Coffees</h1>
    <HotCoffee v-for="htcoffee in htcoffees" :key="htcoffee.id" :htCoff="htcoffee"/>
    <IcedCoffee v-for="icCoff in iceCoffees " :key="icCoff.id" :icCoffee="icCoff"/>
  </div>
</template>

<script>

import HotCoffee from "@/views/component/HotCoffee";
import DataAPI from "@/API/DataAPI";
import IcedCoffee from "@/views/component/IcedCoffee";
export default {
  name: "Coffee",
  components: { IcedCoffee, HotCoffee },
  data() {
    return {
      htcoffees: null,
      iceCoffees: null
    };
  },
  created() {
    DataAPI.getHotCoffee()
    .then( response => {
      this.htcoffees = response.data //den kommer lagra i htcoffee från api
    })
    .catch(error => {
      console.log(error)
    })

    DataAPI.getIcedCoffee()
      .then( response => {
        this.iceCoffees = response.data //den kommer lagra i htcoffee från api
      })
      .catch(error => {
        console.log(error)
      })
  }

};
</script>
<style>
</style>
