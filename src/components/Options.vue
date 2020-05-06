<template>
  <div>
    <v-speed-dial v-model="openCloseOptions" transition="scale-transition" direction="top">
      <template v-slot:activator>
        <v-btn
          v-model="openCloseOptions"
          color="purple darken-2"
          small
          dark
          fab
        >
          <v-icon style="transform: rotate(45deg)">attach_file</v-icon>
        </v-btn>
      </template>
      <v-btn
        style="width: 2.5em; height: 2.5em"
        v-for="(option, index) in options"
        :key="index"
        :color="option.color"
        @click="openFileChooser = !openFileChooser; fileChooserType = option.type"
        fab
        dark
      >
        <v-icon small>{{ option.icon }}</v-icon>
      </v-btn>
    </v-speed-dial>

    <!-- File chooser -->
    <FileChooser :open="openFileChooser" :type="fileChooserType" @file="sendInformation"></FileChooser>
  </div>
</template>

<script>
import FileChooser from "./FileChooser.vue";

export default {
  name: "",
  data: () => ({
    openCloseOptions: false,
    fileChooserType: "image",
    openFileChooser: false,
    options: [
      { icon: "mdi-file-document", color: "red darken-2", type: "file" },
      { icon: "image", color: "blue darken-2", type: "image" }
    ]
  }),
  methods: {
    sendInformation(file) {
      if (this.fileChooserType === "file") this.$emit('file_document', file);
      else if (this.fileChooserType === "image") this.$emit('image', file)
    },
  },
  components: {
    FileChooser
  }
};
</script>

