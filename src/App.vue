<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

export default {
  components: {
    appFooter: Footer,
    appHeader: Header,
  }
};
</script>
