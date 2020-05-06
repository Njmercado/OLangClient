<template>
  <v-card style="border-radius: 16px">
    <v-card-title>
      <v-row justify="center">
        <v-btn color="purple" absolute top fab dark>
          <v-icon>mdi-dog</v-icon>
        </v-btn>
      </v-row>
    </v-card-title>
    <v-card-text>
      <div class="tag">
        <div class="tag--title">Scientific name:</div>
        <div class="tag--content rounded">{{ name }}</div>
      </div>
      <div class="tag">
        <div class="tag--title">Popular names:</div>
        <div>
          <v-chip class="chip" v-for="(name, index) in popular_names" :key="index" small>{{name}}</v-chip>
        </div>
      </div>
      <div class="tag">
        <div class="tag--title">Description:</div>
        <div class="tag--content rounded">
          <div class="tag--content rounded overflow-y custom--scroll height--info">{{ description }}</div>
        </div>
      </div>
      <div class="tag">
        <div class="tag--title">Current total quantity:</div>
        <div class="tag--content rounded">{{ current }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Info",
  props: ["name", "popular_names", "description", "current"],
  data: () => ({}),
  methods: {},
  components: {}
};
</script>

<style>
.chip {
  margin: 0.2em;
}

.tag--content {
  margin-left: auto;
  margin-right: auto;
  background: #e0e0e0;
  padding: 2vh;
}

.height--info {
  max-height: 16vh;
}

.tag {
  margin-top: 2vh;
  margin-bottom: 2vh;
}

.tag--title {
  font-size: 1.1em;
}
</style>
