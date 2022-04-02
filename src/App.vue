<template>
  <div id="nav">
    <router-link to="/">HOME</router-link>
  </div>
  <router-view />
</template>


<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  background-color: #08340a;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #d5dad5;
  font-size: 30px;
}

#nav a.router-link-exact-active {
  color: #ffba89;
}

</style>
