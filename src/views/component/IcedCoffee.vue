<template>
<h1 style="color: orange">{{ icCoffee.title }}</h1>
<h1 style="color: orange">{{ icCoffee.description }}</h1>
</template>

<script>
export default {
  name: "IcedCoffee",
  props:['icCoffee']
};
</script>

<style scoped>

</style>
