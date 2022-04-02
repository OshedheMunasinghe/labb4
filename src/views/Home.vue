<template>
  <div class="home" id="home">
    <div id="flex-box">
      <router-link to="/ice">
        <b-img :src="require('@/assets/coldDrink.jpg')" class="image-box" rounded thumbnail>
        </b-img>
      </router-link>
      <router-link to="/hot">
        <b-img :src="require('@/assets/hotDrink.jpg')" class="image-box" rounded thumbnail>
        </b-img>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home"
};
</script>

<style>

.image-box {
  width: 400px;
  height: 400px;
}

#flex-box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
