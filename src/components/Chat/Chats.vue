<template>
  <v-card color="#e0e0e0" class="rounded" justify="center" align="center">
    <v-card-title>
      <v-btn
        class="mx-auto"
        color="green darken-3"
        @click="openSearchUserModal = !openSearchUserModal"
        fab
        dark
      >
        <v-icon large>mdi-plus</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider class="my-4"></v-divider>
    <v-card-text justify="center" class="rounded mx-auto overflow-y height--chats">
      <UserToChat
        v-for="(chat, index) in chats"
        :key="index"
        :color="chat.color"
        :icon="chat.icon"
        :name="chat.name"
      ></UserToChat>
    </v-card-text>
    <SearchUser :open="openSearchUserModal"></SearchUser>
  </v-card>
</template>

<script>
import SearchUser from "../SearchUsersModal";
import UserToChat from "./UserToChat";

export default {
  name: "Chats",
  props: ["chats"],
  data: () => ({
    openSearchUserModal: false
  }),
  methods: {},
  components: {
    SearchUser,
    UserToChat
  }
};
</script>

<style>
.height--chats {
  max-height: 70vh;
}
</style>
