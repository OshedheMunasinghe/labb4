<template>
  <div
    class="home"
    style="
      justify-content: center;
   display: flex;
  position: absolute;
  left: 50%;
top: 50%;
transform: translate(-50%, -50%);

   ">
    <!--    <p> Here come the first data</p>
        <div v-for="e in coffee" :key="e.id">
          {{ e.title }}
        </div>-->
    <!--    * gör den till en komponent card -->
    <div style="
    /*background-color: white;*/
">
      <!--      todo: this image needs to fix random and then fix photoshop-->
      <img
        src="../assets/backgroundPic.jpg"
        width="1040"
        height="623"
        style="overflow: hidden;   width: 1040px;
     height: 623px;
     box-shadow: 7px 13px 5px -2px rgba(0,0,0,0.29);
     border-radius: 18px;
     position: relative;
     overflow: auto;


" />
      <!--      TODO: make it own component but before that, make sure props working?-->
      <div style="
      width: 403px;
      height: 623px;
      position: absolute;
  bottom: 100px;
  right: 0px;
  top: 0px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
   background-color: rgba(255,255,255,0.2);
  backdrop-filter: saturate(180%) blur(10px);
"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import EventService from "@/API/DataAPI";
// import { mapMutations } from 'vuex';
import backgroundPic from "@/assets/backgroundPic.jpg";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      bakgrpic: backgroundPic
    };
  },
  computed: {
    coffee() {
      return this.$store.state.coffee;
    }
  },
  mounted() {
    this.$store.dispatch("brewCoffee");
  }
  /*  created() {
      EventService.JSONCoffee()
        .then(response => {
          this.coffee = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }*/
};
</script>
