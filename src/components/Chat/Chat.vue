<template>
  <v-card style="border-radius: 16px">
    <v-card-text>
      <!-- Options -->
      <v-row justify="start" style="padding: 1vh">
        <Options @file_document="sendDocumentMessage" @image="sendImageMessage"></Options>
      </v-row>

      <!-- Conversation area -->
      <v-row
        justify="center"
        id="messages"
        class="mx-4 pa-2 grey lighten-4 rounded"
        style="height: 25em;"
      >
        <v-col class="height--chat custom--scroll overflow rounded">
          <Message
            v-for="(message, index) in chatMessages"
            :key="index"
            color="#e0e0e0"
            :sent="message.sent"
            :recieved="!message.sent"
            :message="message.message"
            :image="message.image"
            @click.native="openImageOrDocument(message.image, message.file, message.type)"
          ></Message>
        </v-col>

        <ImageViewer :open="openImageViewer" :image="imageToSeeOnImageViewer"></ImageViewer>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <!-- Send message textfield -->
      <v-row justify="center">
        <v-col cols="10">
          <v-text-field
            v-model="writtenMessage"
            placeholder="message"
            append-outer-icon="mdi-send"
            @click:append-outer="sendTextMessage"
            @keyup.enter="sendTextMessage"
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
import ImageViewer from "./ImageViewer.vue"
export default {
  name: "Chat",
  data: () => ({
    writtenMessage: "",
    openImageViewer: false,
    imageToSeeOnImageViewer: '',
    chatMessages: [{ message: "", sent: true, type: 'text' }]
  }),
  methods: {
    async sendTextMessage() {
      if (this.writtenMessage.length > 0) {
        await this.chatMessages.push({
          message: this.writtenMessage,
          sent: true,
          text: 'text'
        });
        this.writtenMessage = await "";
      }
    },
    sendDocumentMessage(doc) {
      //console.log(doc);
      alert(doc)
    },
    async sendImageMessage(image) {
      await this.chatMessages.push({
        image: image,
        sent: true,
        type: 'image'
      });
    },
    openImageOrDocument(image, file, type) {
      this.openImageViewer = type === 'image' ? !this.openImageViewer : false
      this.imageToSeeOnImageViewer = image
    }
  },
  components: {
    Message,
    Options,
    ImageViewer
  }
};
</script>

<style>
.height--chat {
  max-height: 24em;
}
</style>
