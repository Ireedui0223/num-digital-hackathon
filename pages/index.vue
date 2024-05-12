<template>
  <div>
    <section class="mx-80 mx-auto">
      <v-row
        no-gutters
        :style="
          $vuetify.breakpoint.smAndDown
            ? ''
            : 'margin-top: 160px; margin-bottom: 72px'
        "
      >
        <v-col xl="6" lg="6" md="12" sm="12" cols="12">
          <v-card class="pa-4" elevation="0">
            <v-card-title>
              <h1 class="no-text-break display--medium font-weight-bold">
                Асуултынхаа хариуг хялбараар шийд.
              </h1>
            </v-card-title>
            <v-card-subtitle class="mt-4 pb-3">
              <p class="no-text-break body--large">
                Энэхүү чатбот нь шинээр элсэгчид,оюутан,багш ажилчидад
                тулгамдсан асуудлыг шийдэх 24 цагийн виртуал туслах. Та энэхүү
                чатботоос МУИС-ийн мэдээлэлүүдийг хялбар аргаар авах боломжтой.
              </p>
            </v-card-subtitle>
            <v-card-actions>
              <v-btn depressed color="primary" to="/chat">
                <p class="body--medium mb-0">Сиси бот</p>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col xl="6" lg="6" md="12" sm="12" cols="12">
          <v-img
            :src="require('assets/gif/chat.gif')"
            :lazy-src="require('assets/gif/chat.gif')"
            alt="sisi-bot"
          />
        </v-col>
      </v-row>
    </section>

    <section class="tech-stack-container py-12 my-12">
      <div class="mx-80 mx-auto">
        <h3 class="mb-6 display--small text-center">
          Бидний ашиглаж буй технологууд
        </h3>
        <div class="carousel-container">
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
    </section>

    <section class="mx-80 my-12">
      <h3 class="display--small text-center mb-4">Сиси бот нь</h3>
      <p class="mb-6 body-medium text-center mx-auto" style="max-width: 60%">
        МУИС-ийн нээлттэй датан дээр тулгуурлаж сургагдсан тул та хүссэн
        мэдээлэлээ авах боломжтой.
      </p>

      <v-row>
        <v-col xl="4" lg="4" md="4" sm="12">
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
                Асуултаа асуу
              </h4>
            </v-card-subtitle>

            <v-card-text>
              <p class="body--medium text-center">
                Та хөтөлбөр, хичээл сонголт, сургалтын төлөвлөгөө, судалгааны
                ажилын талаарх хүссэн асуултаа асуу.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="12">
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
              <h4 class="title--medium black--text text-center">Түр хүлээ</h4>
            </v-card-subtitle>

            <v-card-text>
              <p class="body--medium text-center">
                Бидний чатбот түргэн шуурхай хариулна
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="12">
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
                Хүссэн асуултынхаа хариуг ав
              </h4>
            </v-card-subtitle>

            <v-card-text>
              <p class="body--medium text-center">
                Бид таны асуултанд тохирсон хамгийн шилдэг хариуг гаргаж өгөх
                болно.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <v-divider />

    <section class="models-container py-16" id="used-datas">
      <div class="mx-80 mx-auto mt-4">
        <h3 class="display--small text-center mb-4">
          МУИС-ийн нээлттэй өгөгдөлийн сангаас бидний сонгож авсан өгөгдөлүүд
        </h3>
        <v-row>
          <v-col xl="4" lg="4" md="6" sm="12" cols="12">
            <v-card class="d-flex flex-column justify-center align-center">
              <v-img
                :src="require('@/assets/images/models/book.png')"
                :lazy-src="require('@/assets/images/models/book.png')"
                alt="book"
                height="64"
                width="64"
                class="mt-8"
              ></v-img>
              <v-card-title class="title-small text-center">
                Элсэлт
              </v-card-title>
            </v-card>
          </v-col>
          <v-col xl="4" lg="4" md="6" sm="12" cols="12">
            <v-card class="d-flex flex-column justify-center align-center">
              <v-img
                :src="require('@/assets/images/models/graduation.png')"
                :lazy-src="require('@/assets/images/models/graduation.png')"
                alt="graduation"
                height="64"
                width="64"
                class="mt-8"
              ></v-img>
              <v-card-title class="title-small text-center">
                Төгсөлт
              </v-card-title>
            </v-card>
          </v-col>
          <v-col xl="4" lg="4" md="6" sm="12" cols="12">
            <v-card class="d-flex flex-column justify-center align-center">
              <v-img
                :src="require('@/assets/images/models/learning-path.png')"
                :lazy-src="require('@/assets/images/models/learning-path.png')"
                alt="learning-path"
                height="64"
                width="64"
                class="mt-8"
              ></v-img>
              <v-card-title class="title-small text-center">
                Хөтөлбөр
              </v-card-title>
            </v-card>
          </v-col>
          <v-col xl="2" lg="2" md="0" sm="0" cols="0"></v-col>
          <v-col xl="4" lg="4" md="6" sm="12" cols="12">
            <v-card class="d-flex flex-column justify-center align-center">
              <v-img
                :src="require('@/assets/images/models/lesson.png')"
                :lazy-src="require('@/assets/images/models/lesson.png')"
                alt="lesson"
                height="64"
                width="64"
                class="mt-8"
              ></v-img>
              <v-card-title class="title-small text-center">
                Хичээл
              </v-card-title>
            </v-card>
          </v-col>
          <v-col xl="4" lg="4" md="6" sm="12" cols="12">
            <v-card class="d-flex flex-column justify-center align-center">
              <v-img
                :src="require('@/assets/images/models/struct.png')"
                :lazy-src="require('@/assets/images/models/struct.png')"
                alt="struct"
                height="64"
                width="64"
                class="mt-8"
              ></v-img>
              <v-card-title class="title-small text-center">
                Бүтэц
              </v-card-title>
            </v-card>
          </v-col>
          <v-col xl="2" lg="2" md="0" sm="0" cols="0"></v-col>
        </v-row>
      </div>
    </section>

    <v-divider />

    <section class="my-16 mx-80 mx-auto" id="services">
      <h3 class="display--small text-center mb-4">Бидний үйлчилгээ</h3>
      <v-row>
        <v-col xl="3" lg="3" md="6" sm="12" cols="12">
          <v-card elevation="1" height="100%">
            <v-card-title class="justify-center mb-4">
              <div
                class="rounded-circle"
                style="
                  border: 1px solid var(--background);
                  background-color: rgb(242, 244, 255);
                "
              >
                <v-avatar aspect size="120">
                  <BotgoSvg />
                </v-avatar>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="title--medium black--text text-center">Шинэ Элсэгч</h4>
            </v-card-subtitle>

            <v-card-text>
              <v-list>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">
                      Бакалаврын элсэлтийн мэдээлэл
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">Хөтөлбөр сонголтын мэдээлэл</p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">
                      Тухайн жилийн хөтөлбөрийн багтаамжийн тооцололыг харах
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="6" sm="12" cols="12">
          <v-card elevation="1" height="100%">
            <v-card-title class="justify-center mb-4">
              <div
                class="rounded-circle"
                style="
                  border: 1px solid var(--background);
                  background-color: rgb(242, 244, 255);
                "
              >
                <v-avatar aspect size="120">
                  <StudentSvg />
                </v-avatar>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="title--medium black--text text-center">Оюутан</h4>
            </v-card-subtitle>

            <v-card-text>
              <v-list>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">
                      Өөрийн суралцаж буй хөтөлбөрийн мэдээлэл
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">
                      Сургалтын төлөвлөгөө ба уялдааг харах
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">
                      Хичээлийн багтаамж, хуваарь, мэдээлэлийг нэг дор харах
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">
                      Суралцахаар төлөвлөж буй хичээлийн багшийн мэдээлэлийг
                      харах
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="6" sm="12" cols="12">
          <v-card elevation="1" height="100%">
            <v-card-title class="justify-center mb-4">
              <div
                class="rounded-circle"
                style="
                  border: 1px solid var(--background);
                  background-color: rgb(242, 244, 255);
                "
              >
                <v-avatar aspect size="120">
                  <TeacherSvg />
                </v-avatar>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="title--medium black--text text-center">Багш</h4>
            </v-card-subtitle>

            <v-card-text>
              <v-list>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">
                      Судалгааны ажил,өгүүлэлийн мэдээлэлийг харах
                    </p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xl="3" lg="3" md="6" sm="12" cols="12">
          <v-card elevation="1" height="100%">
            <v-card-title class="justify-center mb-4">
              <div
                class="rounded-circle"
                style="
                  border: 1px solid var(--background);
                  background-color: rgb(242, 244, 255);
                "
              >
                <v-avatar aspect size="120">
                  <GraduateSvg />
                </v-avatar>
              </div>
            </v-card-title>
            <v-card-subtitle>
              <h4 class="title--medium black--text text-center">Төгсөгч</h4>
            </v-card-subtitle>

            <v-card-text>
              <v-list>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">
                      Эрдэм шинжилгээний хурлын илтгэл өгүүлэлийн мэдээлэлийг
                      харах
                    </p>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="d-flex align-center">
                  <v-list-item-icon class="mr-4">
                    <v-icon color="success">
                      mdi-checkbox-marked-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="mb-0 body-medium">Судалгааны ажлын сэдэв харах</p>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <v-divider />

    <section class="member-container py-14" id="about-us">
      <div class="mx-80 mx-auto">
        <h3 class="my-4 display--small text-center">Багийн гишүүд</h3>
        <div class="d-flex flex-wrap" style="justify-content: space-evenly">
          <div
            v-for="(member, index) in members"
            :key="index"
            class="mx-6 my-4 d-flex justify-center align-center flex-column cursor-pointer member-image"
          >
            <v-img
              :src="
                require(`@/assets/images/team-members/${member.imageLink}.jpg`)
              "
              :lazy-src="
                require(`@/assets/images/team-members/${member.imageLink}.jpg`)
              "
              :alt="member.imageLink"
              width="240"
              height="auto"
              :aspect-ratio="2 / 3"
              class="rounded-lg"
              style="
                border: 3px solid rgb(211, 212, 213, 0.3);
                box-shadow: 0px 25px 25px -25px rgba(0, 0, 0, 0.2);
              "
            />
            <div
              class="py-6 mt-n10 rounded-lg d-flex flex-column justify-center align-center member-info"
            >
              <h4 class="title--medium text-center">{{ member.firstName }}</h4>
              <p class="body--medium text-center mb-0">{{ member.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { metaTag } from "@/utils/metaTag";
import InputSvg from "../components/svg/Input.vue";
import PerceptionSvg from "../components/svg/Perception.vue";
import ResponseSvg from "../components/svg/Response.vue";
import RobotSvg from "../components/svg/Robot.vue";
import TeacherSvg from "../components/svg/Teacher.vue";
import StudentSvg from "../components/svg/Student.vue";
import BotgoSvg from "../components/svg/Botgo.vue";
import GraduateSvg from "../components/svg/Graduate.vue";

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
    TeacherSvg,
    StudentSvg,
    BotgoSvg,
    GraduateSvg,
  },
  data() {
    return {
      animationDuration: 60,
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
      members: [
        {
          imageLink: "ireedui",
          firstName: "Мөнх-Ирээдүй",
          position: "Хөгжүүлэгч",
        },
        {
          imageLink: "amaraa",
          firstName: "Амаржаргал",
          position: "Төслийн шинжээч",
        },
        {
          imageLink: "boloroo",
          firstName: "Болормаа",
          position: "Дата аналист",
        },
        {
          imageLink: "taivanbat",
          firstName: "Тайванбат",
          position: "Ахлагч",
        },
        { imageLink: "anna", firstName: "Жавзмаа", position: "Дата аналист" },
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
    align-items: center;
    overflow-x: auto;

    .carousel-item {
      animation: scrollAnimation 10s linear infinite;
      margin: 0 16px;
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
    transform: translateX(-600%);
  }

  100% {
    transform: translateX(0%);
  }
}

.road-container {
  position: absolute;
  margin: -20px 0 0 -20px;
  z-index: 2;
}

.models-container {
  background-color: var(--background);
}

.member-info {
  background-color: white;
  width: 200px;
  transition: 0.5s;
  z-index: 3;
  box-shadow: 0px 25px 25px -25px rgba(0, 0, 0, 0.2);
}

.member-image {
  &:hover {
    box-shadow: 0px 50px 50px -50px rgba(0, 0, 0, 0.4);
    transition: 0.3s ease-in-out;
    transform: scale(1.1);

    .member-info {
      opacity: 1;
      box-shadow: 0px 50px 50px -50px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
