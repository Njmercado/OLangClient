<template>
  <div class="rounded chats">
    <div 
      class="custom--scroll overflow height--chats rounded"
    >
      <v-btn
        style="margin-top: 1vh; margin-bottom: 1vh; margin-left: .5vw"
        v-for="(chat, index) in chats"
        :key="index"
        :color="chat.color"
        dark
        fab
        >
        <v-icon>
          {{ chat.icon }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chats",
  props:[
    "chats"
  ],
  data: () => ({
  }),
  methods:{
  },
  components:{
  }
}
</script>

<style>
.height--chats {
  max-height: 90vh
}

.chats {
  background: #e0e0e0;
  padding: 1vh
}
</style>
