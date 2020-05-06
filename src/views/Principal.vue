<template>
  <v-container fluid class="my-auto">
    <!-- People i would like to talk -->

    <v-row align="center">
      <v-col cols="3" justify="center">
        <Chats style="min-height: 93vh" :chats="getChats"></Chats>
      </v-col>

      <!-- Chat area -->
      <v-col>
        <Chat class="my-auto mx-auto"></Chat>
      </v-col>
      <v-col cols="3">
        <!-- Current chat animal information -->
        <Info
          name="Canis lupus familiaris"
          :popular_names="['dog', 'friend', 'can', 'chucho', 'tuso', 'choco']"
          description="Best human friend for long long long time.
                                 Since beginin times from there to now. Dogs has been
                                 wishest pet into the world"
          current="100000"
        ></Info>
      </v-col>
    </v-row>
    <v-btn
      @click.stop="openSettings = !openSettings"
      color="purple darken-2"
      fab
      dark
      bottom
      right
      fixed
    >
      <v-icon>mdi-cog</v-icon>
    </v-btn>

    <Settings :open="openSettings"></Settings>
  </v-container>
</template>

<script>
import Chat from "../components/Chat/Chat.vue";
import Chats from "../components/Chat/Chats.vue";
import Info from "../components/Info.vue";
import Settings from "../components/Settings.vue";
import { mapGetters } from "vuex";

export default {
  name: "Principal",
  data: () => ({
    openSettings: false,
    news: [
      {
        img: "https://miro.medium.com/max/800/1*oTbTuBA4_RtKoXCsZ-ybKQ.png",
        title: "Create easily express app",
        content:
          "Learn how to create web apps from scratch. Learn how to express"
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Elie Goulding, best software programmer",
        content:
          "Enjoy reading how this great musician has become into biggest coder"
      }
    ]
  }),
  computed: {
    ...mapGetters(["getChats"])
  },
  methods: {},
  components: {
    Chat,
    Chats,
    Info,
    Settings
  }
};
</script>
