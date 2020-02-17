<template>
  <div>
    <v-navigation-drawer v-model="openClose" absolute temporary>
      <v-list>
        <v-list-item>
          <v-avatar style="margin: 2em auto 2em auto" size="128" color="purple darken-2">
            <v-icon large dark>mdi-dog</v-icon>
          </v-avatar>
        </v-list-item>
        <v-list-item class="animal-name-title">
          <v-list-item-title class="text">Canis lupus familiaris</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item link @click="openChangePasswordModal = !openChangePasswordModal">
          <v-list-item-icon>
            <v-icon>mdi-key</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Change password</v-list-item-content>
        </v-list-item>
        <v-list-item link @click="openChangeLanguageModal = !openChangeLanguageModal">
          <v-list-item-icon>
            <v-icon>mdi-translate</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Change language</v-list-item-content>
        </v-list-item>
        <v-list-item link @click="logOut">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Close</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <ChangePasswordModal :open="openChangePasswordModal"></ChangePasswordModal>
    <ChangeLanguageModal :open="openChangeLanguageModal"></ChangeLanguageModal>
  </div>
</template>

<script>
import ChangePasswordModal from "./ChangePasswordModal";
import ChangeLanguageModal from "./ChangeLanguageModal";
export default {
  name: "",
  data: () => ({
    openClose: false,
    openChangePasswordModal: false,
    openChangeLanguageModal: false,
  }),
  props: ["open"],
  watch: {
    open(val) {
      this.openClose = val ? val : true;
    }
  },
  methods: {
    logOut() {
      this.$router.push('/login')
    }
  },
  components: {
    ChangePasswordModal,
    ChangeLanguageModal,
  }
};
</script>

<style scoped>
.animal-name-title {
  background-color: #e0e0e0;
  margin: 0 1em 0 1em;
  border-radius: 16px;
  text-align: center;
}
.text {
  color: #857e7e;
}
</style>