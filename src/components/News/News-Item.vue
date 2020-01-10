<template>
  <v-card
    style="border-radius: 16px; width: 16em"
    class="news--item"
  >
    <v-img
      :src="img"
    >
    </v-img>
    <v-card-title style="font-size: 1em">
      {{ title }}
    </v-card-title>
    <v-card-text style="font-size: .8em">
      {{ content }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "NewsItem",
  props: [
    "title",
    "content",
    "img"
  ],
  data: () => ({
  }),
  methods:{
  },
}
</script>

<style>
.news--item {
  margin-top: 2vh;
  margin-bottom: 2vh;
}
</style>
