<template>
  <v-container>
    <v-row :justify="justify">
      <div class="message" :style="styles">
        <div v-if="!image">{{message}}</div>
        <v-img v-if="image" :src="image" width="128" height="128"></v-img>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: { type: String },
    color: { type: String },
    sent: { type: Boolean, default: true },
    received: { type: Boolean, default: false },
    image: { type: String },
    messageId: { type: String }
  },
  data: () => ({
    id: null
  }),
  computed: {
    justify() {
      return this.sent ? "end" : "start";
    },
    styles() {
      const fontColor = this.color == "#e0e0e0" ? "#626262" : "white";
      const background = `background-color: ${this.color}`;
      const border = this.sent ? "right" : "left";
      return `${background}; border-bottom-${border}-radius: 0; color: ${fontColor}`;
    }
  },
  methods: {},
  components: {}
};
</script>

<style>
.message {
  border-radius: 12px;
  max-width: 70%;
  width: auto;
  padding: 1vh 1.5vh 1vh 1.5vh;
  margin-top: -1.4em;
}
</style>