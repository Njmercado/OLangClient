<template>
  <v-container>
    <v-row :justify="justify">
      <div class="message" :style="styles">
        hola aadsf asf adsf dsfa adf a fa asdf adf adsf asf :w
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
    'type'
  ],
  data: () => ({
    id: null
  }),
  computed:{
    justify(){
      if(this.type == "sent") {
        return "end" 
      }
      return "start"
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
}
</style>
