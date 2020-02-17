<template>
  <v-dialog width="20em" v-model="realOpener">
    <v-card style="border-radius: 16px">
      <v-container>
        <v-row justify="center">
          <v-avatar color="purple darken-2" size="128">
            <v-icon dark large>mdi-translate</v-icon>
          </v-avatar>
        </v-row>

        <v-row justify="center">
          <v-col cols="10">
            <v-select
              :items="languages"
              v-model="selectedLanguage"
              label="language"
              color="purple darken-2"
              filled dense rounded
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-btn
            class="text-lowercase"
            color="purple darken-2"
            @click="changePassword"
            :loading="processingLanguageChange"
            small
            dark
          >change language</v-btn>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalChangePassword",
  data: () => ({
    realOpener: false,
    openStatus: false,
    statusMsg: "",
    statusType: "error",
    processingLanguageChange: false,
    selectedLanguage: "",
    languages: ["Spanish", "English", "Deuscht", "Russian", "Mandarin", "Indi"]
  }),
  props: ["open"],
  watch: {
    open(val) {
      this.realOpener = val ? val : true;
    },
    selectedLanguage(val) {
      alert(`You has selected ${val} as default language`);
    }
  },
  computed: {},
  methods: {
    changePassword() {
      this.processingLanguageChange = true;
      setTimeout(() => (this.processingLanguageChange = false), 5000);
    }
  },
  components: {}
};
</script>