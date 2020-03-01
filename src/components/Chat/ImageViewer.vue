<template>
  <v-dialog v-model="realOpener" width="48em" transition="dialog-transition">
    <v-card style="border-radius: 16px" color="grey lighten-1">
      <v-img :src="image" aspect-ratio="1.4" contain></v-img>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ImageViewer",
  data: () => ({
    realOpener: false
  }),
  props: ["open", "image"],
  watch: {
    open(val) {
      this.realOpener = val ? val : true;
    }
  }
};
</script>