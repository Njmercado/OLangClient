<template>
  <v-card style="border-radius: 16px">
    <v-card-text>
      <v-row 
        justify="start" 
        style="padding: 1vh"
      >
        <Options></Options>
      </v-row>
      <v-row justify="center">
        <v-col 
          id="chat" 
          cols="11" 
          class="height--chat custom--scroll overflow"
        >
          <Message type="sent" color="#e0e0e0"></Message>
          <Message type="receive" color="purple"></Message>
          <Message type="receive" color="purple"></Message>
          <Message type="sent" color="#e0e0e0"></Message>
          <Message type="sent" color="#e0e0e0"></Message>
          <Message type="receive" color="purple"></Message>
          <Message type="receive" color="purple"></Message>
          <Message type="receive" color="purple"></Message>
          <Message type="sent" color="#e0e0e0"></Message>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center">
        <v-col cols="10" id="input">
          <v-text-field
            placeholder="message"
            append-outer-icon="mdi-send"
            color="#EF5350"
            rounded
            dense
            outlined
            >
          </v-text-field>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import Message from './Message.vue'
import Options from '../Options.vue'
export default {
  name: "Chat",
  data: () => ({
  }),
  methods:{
  },
  components:{
    Message,
    Options
  }
}
</script>

<style>
.height--chat{
  max-height: 56vh;
}
</style>
