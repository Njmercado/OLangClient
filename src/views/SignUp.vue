<template>
  <v-container
    style="background: linear-gradient(45deg,#7D6AE7,#56A2D5)"
    height="100vh"
    fill-height
    fluid
  >
    <v-row style="margin-top: -1em">
      <v-btn style="margin-left: 1em" text icon dark @click="goToHome">
        <v-icon large>mdi-undo-variant</v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card style="border-radius:15px; margin-left: 1.5em">
          <v-container>
            <v-row style="margin-bottom: 2em; margin-top: 2em" justify="center" align="center">
              <v-img src="https://i.ibb.co/9nKzPKd/OLa.png" max-width="100" max-height="100"></v-img>
            </v-row>
            <v-row
              style="margin-bottom: -1em"
              justify="center"
              v-for="(input, index) in inputs"
              :key="index"
            >
              <v-col cols="11">
                <v-text-field
                  :label="input.label"
                  :prepend-inner-icon="input.icon"
                  v-model="input.value"
                  :type="input.type"
                  color="#7D6AE7"
                  rounded
                  dense
                  filled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" style="margin-bottom: -1em">
              <v-col cols="11">
                <v-select
                  label="language"
                  :items="avaliableLanguageList"
                  color="#7D6AE7"
                  dense
                  rounded
                  filled
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card style="border-radius: 16px; margin-left: 1.5em; text-align: center">
          <v-card-title>
            <v-avatar
              style="margin-left: auto; margin-right: auto; cursor: pointer"
              color="blue darken-2"
              size="128"
              @click="openAnimalsModal = !openAnimalsModal"
            >
              <v-icon dark large>{{ animalIcon }}</v-icon>
            </v-avatar>
          </v-card-title>
          <v-card-text>{{ animalScientificName }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loadButtonAnimation"
              @click="analizarSiUsuarioYaExiste"
              class="text-lowercase"
              color="blue darken-2"
              rounded
              dark
            >sign up</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
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
    avaliableLanguageList: ["español", "inglés", "chino", "arabe"],
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
    animalIcon: "mdi-dog"
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
    },
    goToHome() {
      this.$router.push("/");
    }
  },
  components: {
    ShowAnimals
  }
};
</script>
