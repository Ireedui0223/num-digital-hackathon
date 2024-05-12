<template>
  <v-app>
    <v-main app height="100vh">
      <Nuxt />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "../components/Snackbar.vue";
export default {
  components: { Snackbar },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
