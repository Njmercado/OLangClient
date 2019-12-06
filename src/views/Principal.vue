<template>
  <v-container>
    <v-layout
      row
      justify-end
    >
      <v-btn 
        rounded
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-layout>    
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="(chat, index) in chats"
        xs-3
        :key="index"
      >
        <v-btn
          fab
          :color="chat.color"
          dark
        >
         <v-icon>mdi-android</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
   </v-container>
</template>

<script>
  
  export default {

    name: "Principal",
    data: () => ({
      chats: [
        {image: "image-route", color: "purple"},
        {image: "image-route", color: "pink"},
        {image: "image-route", color: "orange"}
      ]
    }),
    methods:{

    },
    components:{

    }  
  } 
</script>

<style scoped>

</style>

