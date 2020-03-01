<template>
  <v-container fluid class="mt-auto mb-auto">

    <!-- Information -->
    <v-row justify="center" align="center">
      <v-col cols="1" align-self="center">

        <!-- People i would like to talk -->
        <Chats :chats="getChats"></Chats>
      </v-col>
      <v-col cols="11">
        <v-row align="center">
          <v-col cols="8">

            <!-- Chat area -->
            <Chat style="height: 32em"></Chat>
          </v-col>
          <v-col cols="4">

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
      </v-col>
    </v-row>

    <v-btn
      class="mt-10"
      @click.stop="openSettings = !openSettings"
      color="purple darken-2"
      absolute top right fab text small dark
      >
      <v-icon> mdi-menu </v-icon>
    </v-btn>
    <v-btn
      class="mt-10 mr-10"
      @click.stop="openNews = !openNews"
      color="purple darken-2"
      absolute top right fab text small dark
      >
      <v-icon> mdi-newspaper </v-icon>
    </v-btn>

    <News :open="openNews" :news="news"></News>
    <Settings :open="openSettings"></Settings>
  </v-container>
</template>

<script>
import Chat from '../components/Chat/Chat.vue'
import Chats from '../components/Chat/Chats.vue'
import Info from '../components/Info.vue'
import Settings from '../components/Settings.vue'
import News from '../components/News/News.vue'
import {mapGetters} from 'vuex'

export default {

  name: "Principal",
  data: () => ({
    openNews: false,
    openSettings: false,
    news: [
      {
        img: "https://miro.medium.com/max/800/1*oTbTuBA4_RtKoXCsZ-ybKQ.png",
        title: "Create easily express app",
        content: "Learn how to create web apps from scratch. Learn how to express"
      },
      {
        img: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Elie Goulding, best software programmer",
        content: "Enjoy reading how this great musician has become into biggest coder"
      }
    ],
  }),
  computed: {
    ...mapGetters(["getChats"])
  },
  methods:{
  },
  components:{
    Chat,
    Chats,
    Info,
    News,
    Settings
  }
}
</script>
