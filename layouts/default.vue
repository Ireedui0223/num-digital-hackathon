<template>
  <v-app class="main-container">
    <Header class="header-container" v-if="!$vuetify.breakpoint.smAndDown" />
    <v-main app>
      <Nuxt />
    </v-main>
    <Footer class="mt-8" />
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped></style>
