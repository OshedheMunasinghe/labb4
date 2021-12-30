<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <p> Here come the first data</p>
    <div v-for="e in coffee" :key="e.id">
      {{ e.title }}
    </div>
    <div>
      <b-card
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
    <b-button>Button</b-button>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import EventService from "@/API/DataAPI";
// import { mapMutations } from 'vuex';

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {};
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
