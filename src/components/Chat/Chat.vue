<template>
  <v-card style="border-radius: 16px">
    <v-card-text>
      <v-row justify="start" style="padding: 1vh">
        <Options></Options>
      </v-row>
      <v-row justify="center" id="messages">
        <v-col cols="11" class="height--chat custom--scroll overflow">
          <Message
            v-for="(message, index) in chatMessages"
            :key="index"
            color="#e0e0e0"
            :type="message.type"
            :message="message.message"
          ></Message>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center">
        <v-col cols="10" id="input">
          <v-text-field
            v-model="typedMessage"
            placeholder="message"
            append-outer-icon="mdi-send"
            @click:append-outer="sendMessage"
            @keyup.enter="sendMessage"
            rounded
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import Message from "./Message.vue";
import Options from "../Options.vue";
export default {
  name: "Chat",
  data: () => ({
    typedMessage: "",
    chatMessages: [
      { message: "", type: "sent" }
    ]
  }),
  methods: {
    async sendMessage() {
      await this.chatMessages.push({
        message: this.typedMessage,
        type: "sent"
      });
      this.typedMessage = await "";
    }
  },
  components: {
    Message,
    Options
  }
};
</script>

<style>
.height--chat {
  max-height: 56vh;
}
</style>
