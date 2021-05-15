<template>
  <div id="app">
    <nav>
      <router-link to="./">Home</router-link> |
      <router-link to="./about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '~animate.css/animate.min.css';
@import '../scss/global';

#app {
  text-align: center;
  color: $text-color;
  nav{
    background-color: $secondary-color;
  }
}
</style>
