<template>
  <v-dialog v-model="realOpener" persistent width="32em">
    <v-card style="border-radius: 8px">
      <v-card-title>
        <label class="ml-auto mr-auto" style="color: grey">Search users</label>
      </v-card-title>
      <v-card-text>
        <!-- text-field user searcher -->
        <v-row justify="center">
          <v-col cols="10">
            <v-text-field
              v-model="userNameToSearch"
              label="search"
              append-icon="mdi-send"
              dense
              filled
              rounded
            ></v-text-field>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <!-- start results of found users -->
        <v-row justify="center" class="mt-10">
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="6"
            lg="4"
            xl="3"
            v-for="(user, index) in foundUsers"
            :key="index"
          >
            <UserFoundOnSearch
              :name="user.name"
              :icon="user.icon"
              :color="user.color"
              @chosen="chosen"
            ></UserFoundOnSearch>
          </v-col>
        </v-row>
        <!-- end of results----------------- -->
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="text-lowercase"
          color="red darken-4"
          @click.native="realOpener = false"
          small
          dark
        >close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import UserFoundOnSearch from "./UserFoundOnSearch";
import { mapMutations } from "vuex";
export default {
  name: "SearchUsersModal",
  data: () => ({
    realOpener: false,
    userNameToSearch: "",
    testFoundUsers: [
      { icon: "mdi-cat", name: "cat_2356", color: "red darken-4" },
      { icon: "mdi-dog", name: "dog_2356", color: "green darken-4" },
      { icon: "mdi-pig", name: "pig_4567", color: "blue darken-4" },
      { icon: "mdi-fish", name: "fish_4567", color: "gray darken-4" },
      { icon: "mdi-sheep", name: "sheep_4567", color: "purple darken-4" },
      {
        icon: "mdi-penguin",
        name: "penguin_4567",
        color: "deep-purple darken-4"
      },
      { icon: "mdi-rabbit", name: "rabbit_4567", color: "brown darken-4" }
    ],
  }),
  props: ["open"],
  watch: {
    open(val) {
      this.realOpener = val ? true : true;
    }
  },
  computed: {
    foundUsers() {
      if (this.userNameToSearch.length > 0) {
        let regexUser = `^${this.userNameToSearch}`;
        regexUser = new RegExp(regexUser, "i");
        return this.testFoundUsers.filter(el => {
          if (el.name.match(regexUser)) return el;
        });
      }
      return [];
    }
  },
  methods: {
    ...mapMutations(["setChat"]),
    chosen(user) {
      this.setChat(user)
    },
  },
  components: {
    UserFoundOnSearch
  }
};
</script>

<style scoped>
</style>