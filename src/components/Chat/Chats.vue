<template>
  <div>
    <v-card color="#e0e0e0" class="center" style="border-radius: 16px; padding: .8vh">
      <v-card-title>
        <v-btn
          style="margin-left: auto; margin-right: auto"
          color="green darken-2"
          @click="openSearchUserModal = !openSearchUserModal"
          fab
          small
          dark
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
      <div class="custom--scroll overflow height--chats rounded">
        <v-btn
          style="margin-top: 1vh; margin-bottom: 1vh; margin-left: .5vw"
          v-for="(chat, index) in chats"
          :key="index"
          :color="chat.color"
          dark
          fab
        >
          <v-icon>{{ chat.icon }}</v-icon>
        </v-btn>
      </div>
    </v-card>
    <SearchUser :open="openSearchUserModal"></SearchUser>
  </div>
</template>

<script>
import SearchUser from "../SearchUsersModal";
export default {
  name: "Chats",
  props: ["chats"],
  data: () => ({
    openSearchUserModal: false
  }),
  methods: {},
  components: {
    SearchUser
  }
};
</script>

<style>
.height--chats {
  max-height: 80vh;
}
</style>
