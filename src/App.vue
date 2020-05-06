<template>
  <v-app>
    <transition>
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components:{
  }
};
</script>

<style>
.overflow-y {
  overflow-y: scroll
}

.overflow-x {
  overflow-x: scroll
}

.custom--scroll::-webkit-scrollbar {
  width: 8px;
  border-radius: 16px
}
.custom--scroll::-webkit-scrollbar-track {
  border-radius: 16px
}
.custom--scroll::-webkit-scrollbar-thumb {
  background: lightgrey; 
}
.custom--scroll::-webkit-scrollbar-thumb:hover {
  background: grey; 
}

.rounded {
  border-radius: 16px;
}

.center {
  text-align: center;
}
</style>
