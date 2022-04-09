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
    <div id="text-box">
      <h1>COLD DRINKS</h1>
      <h1>HOT DRINKS</h1>
    </div>
    <p id="dummy-text">Hej Jon, <br>Jag hoppas att jag har gjort korrekt. Detta har jag följt endast G-krav.
      När du går in på ice page eller hot page drinkar så kommer det dyka upp lite random bilder. Exemple Caffe latte
      visar is kall dryck bild.
      Denna API har ingen image. Så jag bara slängde upp några random bilder.
      <br> Sedan searchbar är inte i regular expression! <br> That's all. </p>
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

#text-box {
  display: flex;
  justify-content: space-around;
}

#dummy-text {
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin: 32px 400px 0px 400px;
  text-align: center;
  background-color: green;

}
</style>
