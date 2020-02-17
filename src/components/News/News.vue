<template>
  <v-navigation-drawer
    style="overflow-y: hidden"
    v-model="openCloseNews"
    width="auto"
    absolute
    temporary
  >
    <v-card 
      style="border-radius: 0"
      color="deep-purple darken-1" 
      dark
    >
      <v-card-title>
        <label class="center--x">News</label>
      </v-card-title>
    </v-card>
    <div class="overflow custom--scroll height--news news">
      <NewsItem
        v-for="(news, index) in news"
        :key="index"
        :img="news.img"
        :title="news.title"
        :content="news.content"
      ></NewsItem>
    </div>
    <v-footer 
      color="deep-purple darken-1"
      class="font-weight-medium"
      absolute
    >
      <v-btn
        class="center--x"
        fab
        text
        small
        dark
      >
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>
    </v-footer>
  </v-navigation-drawer>
</template>

<script>
import NewsItem from './News-Item.vue'

export default {
  name: "News",
  props:[
    "open",
    "news"
  ],
  data: () => ({
    openCloseNews: false
  }),
  watch:{
    open(val){
      this.openCloseNews = val?val:true
    }
  },
  components:{
    NewsItem
  }
}
</script>

<style>

.height--news {
  max-height: 85vh;
}

.news {
  background-color: #e0e0e0;
  padding: 2vh
}

.center--x {
  margin-left: auto;
  margin-right: auto;
}
</style>
