<template>
  <v-row
    class="rounded my-4 ml-1 px-2 py-2"
    align="center"
    style="background-color: #BDBDBD; cursor: pointer"
  >
    <v-btn :color="color" fab dark>
      <v-icon large>{{ icon }}</v-icon>
    </v-btn>
    <v-col>
      <label style="color: white; font-weight: bold" class="text-capitalize">{{name}}</label>
    </v-col>
    <v-col cols="2">
      <v-btn text icon class="btn">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UserToChat",
  props: ["icon", "color", "name"]
};
</script>