<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="1" align-self="center">
        <Chats :chats="chats"></Chats>
      </v-col>
      <v-col cols="11">
        <v-row align="center">
          <v-col cols="8">
            <Chat></Chat>
          </v-col>
          <v-col cols="4">
            <v-btn 
              style="margin-top: 3em" 
              absolute 
              top 
              right 
              fab
              text
              small
              @click.stop="openNews = !openNews"
            >
              <v-icon>
                menu
              </v-icon>
            </v-btn>
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
    <News :open="openNews" :news="news"></News>
  </v-container>
</template>

<script>
import Chat from '../components/Chat/Chat.vue'
import Chats from '../components/Chat/Chats.vue'
import Info from '../components/Info.vue'
import News from '../components/News/News.vue'

export default {

  name: "Principal",
  data: () => ({
    openNews: false,
    chats: [
      {icon: "mdi-dog", color: "purple"},
      {icon: "mdi-cat", color: "blue darken-2"},
      {icon: "mdi-pig", color: "green darken-2"},
      {icon: "mdi-panda", color: "orange darken-2"},
      {icon: "mdi-bat", color: "red darken-2"},
      {icon: "mdi-rabbit", color: "teal darken-2"},
    ],
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
  methods:{
  },
  components:{
    Chat,
    Chats,
    Info,
    News
  }
}
</script>
