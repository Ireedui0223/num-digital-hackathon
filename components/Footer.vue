<template>
  <v-footer
    color="background"
    class="py-8 d-flex flex-column align-end justify-content-end"
  >
    <div class="mx-80 mx-auto">
      <div class="d-flex justify-space-between align-center">
        <v-img
          :src="require('@/assets/images/logo.png')"
          :lazy-src="require('@/assets/images/logo.png')"
          height="240"
          contain
          alt="logo"
        />
        <div>
          <h4 class="headline--small text-left">Холбоо барих</h4>
          <p class="body-medium text-decoration-none mb-0">
            И-Мэйл:
            <strong>
              <a href="mailto:numgdsc@gmail.com" target="_blank">
                numgdsc@gmail.com
              </a>
            </strong>
          </p>
          <p class="body-medium text-decoration-none mb-0">
            Утасны дугаар:
            <strong>
              <a href="tel:+97695106653" target="_blank"> +97695106653 </a>
            </strong>
          </p>
          <h4 class="headline--small text-left mt-2">Нэмэлт холбоос</h4>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=61551229784657"
              target="_blank"
            >
              <v-icon size="32" color="primary">mdi-facebook</v-icon>
            </a>
            <a
              href="https://gdsc.community.dev/national-university-of-mongolia/?fbclid=IwZXh0bgNhZW0CMTAAAR0WLy2XhKQ8vSR9JoXMNQfH-zRNjxkKdJwrIZ6nMsBQHy3SongPfXWXuuM_aem_AcqFHMEmObuY74yxONNbW6ISFawIOwcRtQNKiNp7B41Bv8ardFC2yokg28j5kX7YuHLrfQLqUUUCVYSN5Q5Bdbs_"
              target="_blank"
            >
              <v-icon size="32" color="primary" class="ml-2">mdi-google</v-icon>
            </a>
          </p>
        </div>
      </div>
    </div>
    <p class="text-right body-medium mb-0">Made with ❤️ by Ireedui</p>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
