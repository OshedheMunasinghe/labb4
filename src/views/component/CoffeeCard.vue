<template>
  {{htCoff.title}}
    <br/>
  {{htCoff.description}}
<!--  todo instead counting it shows up pop up "sweet"-->
    <input type="button" @click="count++" value="LIKE">
    <p>Count: {{count}}</p>
</template>

<script>
export default {
  name: "HotCoffee",
  props:['htCoff'],
  data(){
    return{
      count: 0
    }
  },
};
</script>

<style scoped>

</style>
