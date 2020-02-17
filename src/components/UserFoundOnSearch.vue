<template>
  <v-card min-width="8em" color="grey darken-0" @click="chosen" dark>
    <v-card-title>
      <v-row justify="center">
        <v-btn :color="color" absolute dark fab top>
          <v-icon>{{icon}}</v-icon>
        </v-btn>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row justify="center">
        <label style="font-weight: bold; font-size: 1.2em">{{name}}</label>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "UserFoundOnSearch",
  data: () => ({
    selected: false
  }),
  props: ["name", "icon", "color"],
  methods: {
    chosen() {
      this.$emit("chosen", {
        name: this.name,
        icon: this.icon,
        color: this.color
      });
    }
  }
};
</script>