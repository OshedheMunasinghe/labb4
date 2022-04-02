<template>
  <div>
    <b-img id="image" :src="selectedImage" rounded thumbnail />
    <h3>{{ coffee.title }}</h3>
    <p id="description-style">{{ coffee.description }}</p>
    <div id="button-count-flex">
      <input type="button" value="LIKE" @click="count++" id="like-button-style">
      <p id="count-style">Count: {{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoffeeCard",
  props: ["coffee"],
  data() {
    return {
      count: 0,
      selectedImage: "",
      images: [
        require("@/assets/randomCoffees/pic0.jpg"),
        require("@/assets/randomCoffees/pic1.jpg"),
        require("@/assets/randomCoffees/pic2.jpg"),
      ]
    };
  },
  created() {
    const idx = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[idx];
  }
};
</script>

<style scoped>
h3 {
  color: white;
  margin-left: 32px;
  margin-top: 18px;
}

p {
  color: whitesmoke;

}

#image {
  width: 400px;
  height: 400px;
}

#count-style {
  font-size: 15px;
}

#description-style {
  height: 100px;
  width: 370px;
  margin-left: 32px;
  font-size: 13px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}
</style>
