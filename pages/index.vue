<template>
  <div>
    <div class="mx-80 mx-auto">
      <v-row no-gutters style="margin-top: 160px; margin-bottom: 72px">
        <v-col cols="6">
          <v-card class="pa-4" elevation="0">
            <v-card-title>
              <h1 class="no-text-break display--large">
                Lorem ipsum dolor, sit amet consectetur
              </h1>
            </v-card-title>
            <v-card-subtitle class="mt-4 pb-3">
              <p class="no-text-break body--medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptates, quod, quae, quibusdam doloremque quia quos
                exercitationem voluptatum quas quidem. Quisquam, quae. Quisquam
                voluptates, quod, quae, quibusdam doloremque quia quos
                exercitationem voluptatum quas quidem. Quisquam, quae.
              </p>
            </v-card-subtitle>
            <v-card-actions>
              <v-btn depressed color="primary">
                <p class="body--medium mb-0">Цааш унших</p>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-img
            :src="require('assets/gif/chat.gif')"
            :lazy-src="require('assets/gif/chat.gif')"
          />
        </v-col>
      </v-row>
    </div>

    <div class="tech-stack-container py-12">
      <h3 class="mb-6 display--small text-center">
        Бидний ашиглаж буй технологууд
      </h3>
      <div class="carousel-container mx-80 mx-auto">
        <div
          class="carousel-item pt-4"
          :style="{ animationDuration: animationDuration + 's' }"
          v-for="(logo, index) in logos"
          :key="index"
        >
          <v-img
            height="60"
            width="180"
            contain
            :src="logo.src"
            :lazy-src="logo.src"
            :alt="logo.alt"
          >
          </v-img>
        </div>
      </div>
    </div>

    <div class="mx-80 my-12">
      <h3 class="display--small text-center mb-4">Lorem ipsum dolor sit</h3>
      <p class="mb-6 body-medium text-center mx-auto" style="max-width: 60%">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum officia,
        voluptatem deserunt incidunt dolorum, voluptatibus, quae ut dolorem enim
        blanditiis
      </p>

      <v-row>
        <v-col xl="3" lg="3" md="3" sm="12">
          <v-card elevation="0">
            <v-card-title class="justify-center mb-4">
              <div
                class="rounded-circle"
                style="
                  border: 1px solid var(--background);
                  background-color: rgb(242, 244, 255);
                "
              >
                <v-avatar height="100%" aspect size="auto">
                  <InputSvg />
                </v-avatar>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="title--medium black--text text-center">
                Lorem ipsum dolor sit
              </h4>
            </v-card-subtitle>

            <v-card-text>
              <p class="body--medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. Quisquam voluptates, quod, quae, quibusdam
                doloremque quia quos exercitationem voluptatum quas quidem.
                Quisquam, quae.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="3" sm="12">
          <v-card elevation="0">
            <v-card-title class="justify-center mb-4">
              <div
                class="rounded-circle"
                style="
                  border: 1px solid var(--background);
                  background-color: rgb(242, 244, 255);
                "
              >
                <v-avatar height="100%" aspect size="auto">
                  <PerceptionSvg />
                </v-avatar>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="title--medium black--text text-center">
                Lorem ipsum dolor sit
              </h4>
            </v-card-subtitle>

            <v-card-text>
              <p class="body--medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. Quisquam voluptates, quod, quae, quibusdam
                doloremque quia quos exercitationem voluptatum quas quidem.
                Quisquam, quae.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="3" sm="12">
          <v-card elevation="0">
            <v-card-title class="justify-center mb-4">
              <div
                class="rounded-circle"
                style="
                  border: 1px solid var(--background);
                  background-color: rgb(242, 244, 255);
                "
              >
                <v-avatar height="100%" aspect size="auto">
                  <ResponseSvg />
                </v-avatar>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="title--medium black--text text-center">
                Lorem ipsum dolor sit
              </h4>
            </v-card-subtitle>

            <v-card-text>
              <p class="body--medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. Quisquam voluptates, quod, quae, quibusdam
                doloremque quia quos exercitationem voluptatum quas quidem.
                Quisquam, quae.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="3" sm="12">
          <v-card elevation="0">
            <v-card-title class="justify-center mb-4">
              <div
                class="rounded-circle"
                style="
                  border: 1px solid var(--background);
                  background-color: rgb(242, 244, 255);
                "
              >
                <v-avatar height="100%" aspect size="auto">
                  <RobotSvg />
                </v-avatar>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="title--medium black--text text-center">
                Lorem ipsum dolor sit
              </h4>
            </v-card-subtitle>

            <v-card-text>
              <p class="body--medium text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quae. Quisquam voluptates, quod, quae, quibusdam
                doloremque quia quos exercitationem voluptatum quas quidem.
                Quisquam, quae.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { metaTag } from "@/utils/metaTag";
import InputSvg from "../components/svg/Input.vue";
import PerceptionSvg from "../components/svg/Perception.vue";
import ResponseSvg from "../components/svg/Response.vue";
import RobotSvg from "../components/svg/Robot.vue";
export default {
  head() {
    return metaTag({
      title: "Нүүр хуудас",
    });
  },
  components: {
    InputSvg,
    PerceptionSvg,
    ResponseSvg,
    RobotSvg,
  },
  data() {
    return {
      animationDuration: 10,
      logos: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png",
          alt: "nuxt_logo",
        },
        {
          src: "https://testrigor.com/wp-content/uploads/2023/03/vuejs-logo.png",
          alt: "vue_logo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
          alt: "sass_logo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
          alt: "node_js_logo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
          alt: "express_js_logo",
        },
        {
          src: "https://cdn.icon-icons.com/icons2/2699/PNG/512/socketio_logo_icon_168806.png",
          alt: "socket_io_logo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/2560px-Python_logo_and_wordmark.svg.png",
          alt: "python_logo",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png",
          alt: "python_logo",
        },
        {
          src: "https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Logo.png",
          alt: "google_cloud_logo",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.no-text-break {
  word-break: keep-all;
}
.glow-up-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.tech-stack-container {
  background-color: var(--background);
  overflow: hidden;
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    .carousel-item {
      margin: 0 16px;
      animation: scrollAnimation 10s linear infinite;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@keyframes scrollAnimation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-90%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
