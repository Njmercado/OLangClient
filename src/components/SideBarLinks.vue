<template>
  <div>
    <v-navigation-drawer v-model="realOpener" absolute temporary>
      <v-list nav dense rounded>
        <v-list-item-group
          v-model="items"
          active-class="deep-purple--text 
                        text--accent-4"
          class="adjust-font"
        >
          <v-img
            src="https://i.ibb.co/9nKzPKd/OLa.png"
            max-width="64"
            max-height="64"
            style="margin: 30px auto 30px auto;"
          ></v-img>

          <v-list-item v-for="route in routes" :key="route.name" :to="route.to">
            <v-list-item-icon>
              <v-icon>{{route.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="text-capitalize">{{route.name}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: ["open", "routes"],
  data: () => ({
    items: null,
    realOpener: false
  }),
  watch: {
    items() {
      this.$emit("update:openCloseSideBar", !this.openCloseSideBar);
    },
    open(val) {
      this.realOpener = val ? val : true;
    }
  }
};
</script>
