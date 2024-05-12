<template>
  <div class="chat-layout">
    <v-row no-gutters style="height: 100%">
      <v-col xl="3" lg="3" md="3" sm="0" cols="0" style="height: 100%">
        <v-list class="py-0" style="height: 100%" color="#09285b" dark>
          <v-list-item to="/" class="py-4">
            <v-list-item-avatar width="120">
              <v-img
                width="100%"
                contain
                :src="require('@/assets/images/default-logo.png')"
                :lazy-src="require('@/assets/images/default-logo.png')"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title--large">
                СиСи бот
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider />
          <v-list-item class="py-2">
            <v-list-item-content>
              <v-list-item-title class="title-large">
                Түгээмэл асуултууд
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider />

          <v-list-item
            v-for="(question, index) of questions"
            :key="index"
            @click="sentMessage(question)"
          >
            <v-list-item-content>
              <p class="mb-0 body-medium">{{ question }}</p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col
        xl="9"
        lg="9"
        md="9"
        sm="12"
        cols="12"
        class="chat-container"
        style="background-color: white"
      >
        <div
          style="padding: 40px 40px 200px 40px"
          id="chat"
        >
          <div
            v-for="(response, index) in responses"
            :key="index"
            class="pa-2 px-4 d-flex question-card"
            :class="
              response.chat_type == 'user' ? 'justify-end' : 'justify-start'
            "
          >
            <v-expand-transition>
              <!-- :color="response.chat_type == 'user' ? 'info' : 'secondary'" -->
              <v-card
                color="transparent"
                class="primary--text rounded-xl"
                max-width="70%"
                elevation="0"
              >
                <v-card-text
                  class="py-2 d-flex primary--text body-medium px-4 align-center"
                  :style="
                    response.chat_type == 'bot'
                      ? 'background-color: rgb(77 205 241 / 14%)'
                      : ''
                  "
                >
                  <v-icon
                    v-if="response.chat_type == 'bot'"
                    color="primary"
                    class="mr-2"
                    >mdi-robot-happy
                  </v-icon>
                  <p
                    class="mb-0"
                    :class="
                      response.chat_type == 'bot'
                        ? 'primary--text'
                        : 'black--text'
                    "
                  >
                    {{ response.chat_text }}
                  </p>
                  <v-icon
                    v-if="response.chat_type !== 'bot'"
                    color="black"
                    class="ml-2"
                    >mdi-account-circle
                  </v-icon>
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </div>
        </div>
        <div class="text-field-container">
          <div class="text-field">
            <v-text-field
              filled
              outlined
              dense
              hide-details
              v-model.trim="message"
              :disabled="loading"
              placeholder="Асуух асуулт..."
              class="body--medium chat-field"
              @keyup.enter="sentMessage(message)"
              required
            >
              <template v-slot:append>
                <v-btn
                  icon
                  class="mb-2"
                  @click="sentMessage(message)"
                  :loading="loading"
                >
                  <v-icon> mdi-arrow-up-bold-box-outline </v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {
      message: "",
      questions: [
        "Таны нэр юу вэ?",
        "Таны овог юу вэ?",
        "Таны утасны дугаар юу вэ?",
        "Таны и-мэйл хаяг юу вэ?",
        "Таны хаяг юу вэ?",
        "Таны төрсөн огноо юу вэ?",
      ],
      responses: [
        {
          chat_text: "Сайн байна уу? Таньд юугаар туслах уу?",
          chat_type: "bot",
        },
      ],
      socket: null,
      loading: false,
    };
  },
  async mounted() {
    this.socket = this.$nuxtSocket({
      name: "main",
    });
    this.socket.on("connect", async () => {
      console.log("Connected socket", this.socket.id);
    });
    this.socket.on("disconnect", (res) => {
      this.message = "";
      console.log(res, "disconnect");
      this.$store.commit("setSnackbar", {
        value: true,
        message: "Чат саллаа",
        type: "error",
      });
    });
    this.socket.on("success", (msg) => {
      console.log("success", msg);
      this.responses.push({ chat_text: msg, chat_type: "bot" });
      this.message = "";
      var container = this.$el.querySelector("#chat");
      let element = document.getElementById("chat");
      element.scrollIntoView({ behavior: "smooth", block: "end" });

      this.loading = false;
    });
    this.socket.on("error", async (err) => {
      console.log("error", err);
      this.responses.push({
        chat_text: `Алдаа гарлаа : ${err}`,
        chat_type: "bot",
      });
      this.message = "";
      this.loading = false;
    });
  },
  methods: {
    async sentMessage(v) {
      if (v?.length < 1) {
        this.$store.commit("setSnackbar", {
          value: true,
          message: "Хоосон байж болохгүй",
          type: "error",
        });
        return;
      }
      this.loading = true;
      this.responses.push({ chat_text: v, chat_type: "user" });
      let element = document.getElementById("chat");
      element.scrollIntoView({ behavior: "smooth", block: "end" });

      this.socket.emit("send_chat", { chat_text: v });
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-layout {
  width: 100vw;
  height: 100vh;
  background-color: #11408d;
}
.chat-container {
  position: relative;
  max-height: 100vh;
  overflow-y: auto;
  .text-field-container {
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    bottom: 30px;
    z-index: 10;
    width: calc(100vw - 25%);
    .text-field {
      width: 70%;
      margin: 0 auto;
      background-color: white;
      border-radius: 10px;
    }
  }
}

.question-card {
  transition: all 0.5s ease-out;
  opacity: 1;
  width: auto;
}

@starting-style {
  .question-card {
    display: none;
    width: 0;
    opacity: 0;
  }
}
</style>
