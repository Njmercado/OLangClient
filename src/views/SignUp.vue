<template>
  <v-container
    style="background: linear-gradient(45deg,#7D6AE7,#56A2D5)"
    height="100vh"
    fill-height
    fluid
  >
    <!-- Return button -->
    <v-btn absolute top left text icon dark @click="goToHome">
      <v-icon large>mdi-undo-variant</v-icon>
    </v-btn>
    <!-- - -->
    <!-- App icon area -->
    <!-- <v-row justify="center" align="center">
      <v-img src="https://i.ibb.co/9nKzPKd/OLa.png" max-width="100" max-height="100"></v-img>
    </v-row>-->
    <!-- Form area -->
    <v-row justify="center" align="center">
      <!-- Este col me permite poder mostrar todo el contenido responsive -->
      <v-col cols="12" xs="10" sm="10" md="8" lg="5" xl="5" align="center" class="ml-7">
        <v-stepper v-model="step" style="border-radius: 16px;">
          <v-stepper-header>
            <v-stepper-step :complete="step > 1" step="1" color="deep-purple darken-1">Language</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="step > 2" step="2" color="deep-purple darken-1">Personal data</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="step > 3" step="3" color="deep-purple darken-1">Animal</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <!-- Language Selector area -->
            <v-stepper-content step="1">
              <v-container class="my-12">
                <v-row justify="center" class="mb-12">
                  <kbd
                    style="padding: .4em; border-radius: 8px; background-color: #EF5350"
                  >{{chosenLanguage}}</kbd>
                </v-row>
                <v-row justify="center">
                  <v-chip
                    class="mx-2 my-2"
                    v-for="(language, index) in avaliableLanguageList"
                    @click="changeDefaultLanguage(language)"
                    color="deep-purple lighten-2"
                    :key="index"
                    link
                    dark
                  >{{language}}</v-chip>
                </v-row>
              </v-container>
              <v-row justify="center" class="mt-8">
                <v-btn color="deep-purple darken-1" :loading="changingLanguage" text disabled></v-btn>
              </v-row>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-container class="my-12">
                <!-- Personal data fields area -->
                <v-row
                  style="margin-bottom: -1em"
                  justify="center"
                  v-for="(input, index) in inputs"
                  :key="index"
                >
                  <v-col cols="11">
                    <v-text-field
                      :label="input.label"
                      :append-icon="input.type === 'password'? ( seePassword? 'mdi-eye': 'mdi-eye-off' ) : input.icon"
                      v-model="input.value"
                      :type="input.type === 'password'? (seePassword? 'text': 'password'): input.type"
                      color="#7D6AE7"
                      @click:append="seePassword = !seePassword"
                      rounded
                      dense
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>

              <!-- Action buttons: continue, back -->
              <v-row justify="center" class="mt-8">
                <v-btn
                  class="text-lowercase mb-2"
                  color="deep-purple darken-1"
                  @click="step=3"
                  dark
                  small
                  rounded
                >continue</v-btn>
                <v-btn
                  class="text-lowercase ml-2"
                  color="grey lighten-0"
                  @click="step=1"
                  dark
                  small
                  rounded
                >back</v-btn>
              </v-row>
            </v-stepper-content>

            <!-- Animal selection area -->
            <v-stepper-content step="3">
              <v-container class="my-12">
                <v-row justify="center" style="cursor: pointer">
                  <!-- Select animal -->
                  <v-avatar
                    color="deep-purple darken-1"
                    size="96"
                    @click="openAnimalsModal = !openAnimalsModal"
                  >
                    <v-icon dark large>{{ animalIcon }}</v-icon>
                  </v-avatar>
                </v-row>

                <!-- Chosen animal name -->
                <v-row justify="center" class="my-8">
                  <label
                    class="text--secondary"
                    style="border-radius: 16px; background-color: lightgrey; padding: .8em;"
                  >{{ animalScientificName }}</label>
                </v-row>
              </v-container>

              <!-- Action buttons: signup, back -->
              <v-row justify="center" align="center" class="mt-8">
                <v-btn
                  :loading="loadButtonAnimation"
                  @click="analizarSiUsuarioYaExiste"
                  class="text-lowercase my-4 mr-2"
                  color="deep-purple darken-1"
                  rounded
                  dark
                  small
                >sign up</v-btn>
                <v-btn
                  class="text-lowercase ml-2"
                  color="grey lighten-0"
                  @click="step=2"
                  dark
                  small
                  rounded
                >back</v-btn>
              </v-row>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
    <ShowAnimals :open="openAnimalsModal"></ShowAnimals>
  </v-container>
</template>

<script>
import ShowAnimals from "../components/ShowAnimals.vue";

//Todo esto debe ser traducido al idioma seleccionado en la pagina principal.
//Tambien debo, si se puede, buscar la forma de traducir automaticamente para evitar ese paso.

//TODO: deberia crear un componente para mostrar errores. El componente puede ser tipo Pop-up.

export default {
  name: "SingUp",
  data: () => ({
    step: 1,
    seePassword: false,
    avaliableLanguageList: ["Spanish", "English", "Mandarin", "Arabic"],
    loadButtonAnimation: false,
    inputs: [
      {
        label: "phone",
        icon: "mdi-cellphone-android",
        value: "",
        type: "text"
      },
      { label: "password", icon: "mdi-eye", value: "", type: "password" }
    ],
    animalScientificName: "Canis Lupus Familiaris",
    openAnimalsModal: false,
    animalIcon: "mdi-dog",
    chosenLanguage: "English",
    changingLanguage: false
  }),
  methods: {
    analizarSiUsuarioYaExiste() {
      this.loadButtonAnimation = !this.loadButtonAnimation;
      //Aca debo agregar la conexion con el vuex, para luego conectarla con el servidor.
      //Una vez hecho esto, el servidor se debe encargar de realizar la verificación de
      //si estos datos, telefono, ya se encuentra registrado o no.

      //En caso de que los datos sumistrados ya se encuentre activos, entonces debo enviar
      //una pop-up indicando que se ha producido algun error y decir cual fue el
      //correspondiente error.
      setTimeout(() => {
        this.$router.push("/principal");
      }, 3000);
    },
    goToHome() {
      this.$router.push("/");
    },
    changeDefaultLanguage(language) {
      this.chosenLanguage = language;
      this.changingLanguage = true;
      setTimeout(() => {
        this.changingLanguage = false;
        this.step = 2;
      }, 8000);
    }
  },
  components: {
    ShowAnimals
  }
};
</script>
