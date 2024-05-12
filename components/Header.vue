<template>
  <div>
    <header class="d-flex justify-space-between py-4">
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
          <v-btn text plain depressed to="/">Нүүр</v-btn>
          <v-btn text plain depressed to="/#about-us">Бидний тухай</v-btn>
          <v-btn text plain depressed to="/#used-datas">
            Хэрэглэсэн өгөгдөлүүд
          </v-btn>
          <v-btn text plain depressed to="/#contact">Холбоо барих</v-btn>
        </div>
      </div>
      <div>
        <v-btn depressed color="primary" to="/chat">
          <p class="body--medium mb-0">Сиси бот</p>
        </v-btn>
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
