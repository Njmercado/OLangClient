<template>
  <v-dialog max-width="60em">
    <template v-slot:activator="{ on }">
      <v-icon v-on="on" ref="activator"></v-icon>
    </template>
    <v-card>
      <v-card-text>
        <v-row justify="center" align="center">
          <v-col cols="6" xs="12" sm="12" md="6" lg="6" xl="4"></v-col>
          <v-col cols="6" xs="12" sm="12" md="6" lg="6" xl="4"></v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "",
  data: () => ({}),
  props: ["open"],
  watch: {
    open() {
      this.$refs.activator.$el.click();
    }
  },
  methods: {},
  components: {}
};
</script>

