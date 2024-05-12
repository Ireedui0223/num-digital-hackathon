<template>
  <v-app class="main-container">
    <Header class="header-container" v-if="!$vuetify.breakpoint.smAndDown" />
    <v-main app>
      <Nuxt />
    </v-main>
    <Snackbar />
    <Footer class="mt-8" id="contact" />
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Snackbar from "../components/Snackbar.vue";
export default {
  data() {
    return {};
  },
  components: { Header, Footer, Snackbar },
};
</script>

<style lang="scss" scoped></style>
