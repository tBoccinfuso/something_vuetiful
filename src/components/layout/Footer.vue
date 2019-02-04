<template>
  <footer id="footer">
    <p id="copyright">{{ `&copy; ${new Date().getUTCFullYear()} ${$store.state.app_name}` }}</p>
  </footer>
</template>
  
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>
  
<style lang="scss" scoped>
  #copyright {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
</style>