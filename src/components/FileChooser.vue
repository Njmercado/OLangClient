<template>
  <input type="file" :accept="acceptedDataType" ref="fileChooser" @change="imageToBase64" hidden />
</template>

<script>
export default {
  data: () => ({
    realOpener: false,
    acceptedDataType: ""
  }),
  props: ["type", "open"],
  watch: {
    async open() {
      this.acceptedDataType =
        this.type === "file"
          ? ".py,.js,.java,.c,.cpp,.vue,.gitignore,.md"
          : "image/*";
      await this.$refs.fileChooser.click();
    }
  },
  methods: {
    returnChoosenFile(file) {
      this.$emit("file", file);
    },
    imageToBase64(file) {

      function realImageToBase64AndCallbackCaller(file, callback) {
        const reader = new FileReader();
        reader.onloadend = function() {
          callback(reader.result);
        };
        reader.readAsDataURL(file.srcElement.files[0]);
      }

      realImageToBase64AndCallbackCaller(file, this.returnChoosenFile)
    }
  }
};
</script>