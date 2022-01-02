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
    <div style="transform: scale(0.8);">
      <img src="../assets/Coffee/rotatecoffe.png"
           style="margin-right: -2800px;
           margin-top: -70px;
             transform: rotate(-10deg);
"/>
    </div>
    <!--    * gör den till en komponent card -->
    <div>
      <!--      todo: this image needs to fix random and then fix photoshop-->
      <img
        src="../assets/Coffee/coffeeBackgrPic/coffeeBackgrPic0.jpg"
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
        <!--        * BREAK LINE -->
        <hr style="margin-top: 400px" />

        <!--        FLEXBOX PARENT -->
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          "
        >
          <div style="margin-left: 24px; ">
            <p style="font-family: Gadugi; font-weight: bold; font-size: 14px;">
              INGREDIENTS
            </p>
            <b-button
              pill
              variant="outline-secondary"
              style="
              color: white;
              border-color: white;
              font-family: Gadugi;

"
              size="sm">coffee
            </b-button>
          </div>


          <!-- * button to wine -->
          <!--        todo make it component -->
          <div
            style="
              border-bottom-right-radius: 18px;
              align-items: center;
              display: flex;
            "
          >

            <!--            * ICON BUTTON -->
            <!--          TODO: ANIMATION WHEN MOVE HOVERING -->
            <div
              style="
                width: 77px;
                height: 222px;
                background-color: black;
                opacity: 60%;
                margin-top: -15px;
                border-bottom-right-radius: 18px;
              "
            >
              <img src="@/assets/icons/wineIcon.png" style="margin-top: 80px" />
            </div>
            <!--            END ICON BUTTON-->
          </div>
        </div>
      </div>
      <!--        * END WHITE BLUR BOX-->
    </div>
  </div>
  <img src="../assets/Coffee/coffeBeanBottom.png"
       style="
       position: relative;
       transform: scale(0.6);
       margin-right: 1050px;
       margin-top: 420px;
" />
<!--  ! TESTING PAGINATION -->
  <div style="width: 100px; height: 100px; background-color: orange; margin-left: 800px; ">
    <div v-for="e in coffee" :key="e.id" style="color: #42b983">
      {{ e.title }}
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
