<template>
  <v-app>
    <Header class="header-container" />
    <v-main app>
      <Nuxt />
    </v-main>
    <Footer class="mt-8" />
  </v-app>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped></style>
