<template>
  <div class="home" id="home">

    <div id="flex-box">
            <router-link to="/ice">
              <b-img thumbnail :src="require('@/assets/coldDrink.jpg')" rounded class="image-box">
              </b-img>
            </router-link>
            <router-link to="/hot">
              <b-img thumbnail :src="require('@/assets/hotDrink.jpg')" rounded class="image-box">
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
