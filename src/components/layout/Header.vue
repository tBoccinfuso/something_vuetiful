<template>
  <header id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="about">About</router-link>
  </header>
</template>
  
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
}
</script>
  
<style lang="scss" scoped>
  #nav {
    text-align: center;
    font-size: 18px;
    padding: 30px;
    a {
      font-weight: bold;
      color: $dark-blue;
      &.router-link-exact-active {
        color: $green;
      }
    }
  }
</style>