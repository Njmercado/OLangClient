<template>
  <v-speed-dial
    v-model="openCloseOptions"
    transition="scale-transition"
    direction="right"
  >
    <template v-slot:activator>
      <v-btn
        style="width: 3em; height: 3em"
        v-model="openCloseOptions"
        color="deep-purple lighten-2"
        dark
        fab
      >
        <v-icon style="transform: rotate(45deg)">attach_file</v-icon>
      </v-btn>
    </template>
    <v-btn
      v-for="(option, index) in options"
      :key="index"
      style="width: 2.5em; height: 2.5em"
      fab
    >
      <v-icon small>
        {{ option.icon }}
      </v-icon>
    </v-btn>    
  </v-speed-dial>
</template>

<script>
export default {
  name: "",
  data: () => ({
    openCloseOptions: false,
    options: [
      { icon: "code" },
      { icon: "image" }
    ]
  }),
  methods:{
  },
  components:{
  }  
} 
</script>

