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
    "
  >
    <!--    * gör den till en komponent card -->
    <div>
      <!--      todo: this image needs to fix random and then fix photoshop-->
      <img
        src="@/assets/coffeeBackgrPic/coffeeBackgrPic0.jpg"
        width="1040"
        height="623"
        style="
          overflow: hidden;
          width: 1040px;
          height: 623px;
          box-shadow: 7px 13px 5px -2px rgba(0, 0, 0, 0.29);
          border-radius: 18px;
          position: relative;
        "
      />
      <!--      TODO: make it own component but before that, make sure props working?-->
      <!--      * BLUR BOX -->
      <div
        style="
          width: 403px;
          height: 623px;
          position: absolute;
          bottom: 100px;
          right: 0px;
          top: 0px;
          border-top-right-radius: 18px;
          border-bottom-right-radius: 18px;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: saturate(180%) blur(10px);
        "
      >
        <!-- TODO : make it text component-->
        <!--        ! before that: please make sure that props is working-->
        <div style="position: absolute; top: 81px; left: 24px; right: 61px">
          <!--          * HEADER -->
          <h1
            style="
              font-size: 64px;
              font-family: 'Gentium Basic';
              position: relative;
              text-align: left;
            "
          >
            Black
          </h1>

          <!--          * DESCRIPTION -->
          <div style="top: 0px">
            <p
              style="
                font-family: Open Sans Light;
                font-size: 20px;
                text-align: left;
              "
            >
              Black coffee is as simple as it gets with ground coffee beans
              steeped in hot water, served warm. And if you want to sound fancy,
              you can call black coffee by its proper name: cafe noir.
            </p>
          </div>
        </div>
        <hr style="margin-top: 400px" />

        <div
          style="
            background-color: black;
            width: 77px;
            height: 222px;
            border-bottom-right-radius: 18px;
            opacity: 60%;
            margin-left: 326px;
            margin-top: -15px;
            align-items: center;
            display: flex;
          "
        >
          <!--          TODO: ANIMATION WHEN MOVE HOVERING -->
          <img
            src="@/assets/icons/wineIcon.png"
            style="display: flex; position: absolute; right: 8px"
          />
        </div>
      </div>
      <!--        * END WHITE BLUR BOX-->
    </div>
  </div>
</template>

<script>
// TODO fix the scoll.

export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  computed: {
    coffee() {
      return this.$store.state.coffee;
    },
  },
  mounted() {
    this.$store.dispatch("brewCoffee");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gentium+Basic:wght@400;700&family=Lato:wght@100;400&display=swap");
</style>
