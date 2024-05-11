<template>
  <div>
    <header class="d-flex justify-space-between py-6">
      <div>
        <nuxt-link to="/">
          <v-img
            :src="require('~/assets/images/default-logo.png')"
            max-height="40"
            width="120"
            contain
          >
          </v-img>
        </nuxt-link>
      </div>
      <div>
        <div class="d-flex">
          <v-btn text plain depressed>Нүүр</v-btn>
          <v-btn text plain depressed>Бидний тухай</v-btn>
          <v-btn text plain depressed>Блог</v-btn>
          <v-btn text plain depressed>Холбоо барих</v-btn>
        </div>
      </div>
      <div>
        <div class="d-flex">
          <v-btn text plain depressed>Нэвтрэх</v-btn>
          <v-btn text plain depressed>Бүртгэх</v-btn>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
