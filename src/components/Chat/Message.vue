<template>
  <v-container>
    <v-row :justify="justify">
      <div class="message" :style="styles" v-if="message.length > 0">
        {{message}}
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Message",
  props:[
    'message',
    'color',
    'type',
    'messageId'
  ],
  data: () => ({
    id: null
  }),
  computed:{
    justify(){
      return this.type === "sent"? "end": "start"
    },
    styles(){

      const fontColor = this.color=="#e0e0e0"?"#626262":"white";
      const background = `background-color: ${this.color}` 
      const border = this.type=="sent"?"right":"left"
      return `${background}; border-bottom-${border}-radius: 0; color: ${fontColor}`
    }
  },
  methods:{
  },
  components:{
  }
}
</script>

<style>
.message {
  border-radius: 12px;
  max-width: 70%;
  width: auto;
  padding: 1vh 1.5vh 1vh 1.5vh;
  margin-top: -1.4em;
}
</style>