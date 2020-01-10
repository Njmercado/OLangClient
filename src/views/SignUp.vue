<template>
  <v-container
    fill-height
    fluid
    style="background: linear-gradient(45deg,#7D6AE7,#56A2D5)"
    height="100vh"
  >
    <v-row>
      <v-btn 
        style="margin-left: 1em"
        text 
        icon 
        dark
        large
        @click="goToHome"
      >
        <v-icon>
          mdi-undo-variant
        </v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center" aling="center">
        <v-card
          style="border-radius:15px; margin-left: 1.5em"
          >
          <v-container>
            <v-row
              justify="center"
              align="center"
              style="margin-bottom: 2em; margin-top: 2em"
              >
              <v-img
                src="https://i.ibb.co/9nKzPKd/OLa.png"
                max-width="100"
                max-height="100"
                >
              </v-img>
            </v-row>
            <v-row
              justify="center"
              v-for="(input, index) in inputs"
              :key="index"
              style="margin-bottom: -5vh"
            >
              <v-col cols="11">
                <v-text-field
                  rounded
                  dense
                  filled
                  :label="input.label"
                  :prepend-inner-icon="input.icon"
                  v-model="input.value"
                  type="text"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" style="margin-bottom: -5vh">
              <v-col cols="11">
                <v-select
                  label="idioma"
                  :items="avaliableLanguageList"
                  dense
                  rounded
                  filled
                >
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              dark
              rounded
              :loading="loadButtonAnimation"
              @click="analizarSiUsuarioYaExiste"
              class="text-lowercase"
              color="#56A2D5"
              >
              registrarse
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>

//Todo esto debe ser traducido al idioma seleccionado en la pagina principal.
//Tambien debo, si se puede, buscar la forma de traducir automaticamente para evitar ese paso.

//TODO: deberia crear un componente para mostrar errores. El componente puede ser tipo Pop-up.

export default {

  name: "SingUp",
  data: () => ({
    avaliableLanguageList: ["español", "inglés", "chino", "arabe"],
    loadButtonAnimation: false,
    inputs: [
      {label: "telefono", icon: "mdi-cellphone-android", value: ""},
      {label: "nombre", icon: "mdi-rename-box", value: ""},
      {label: "correo", icon:"mdi-email", value:""}
    ],
  }),
  methods:{

    analizarSiUsuarioYaExiste(){
      this.loadButtonAnimation = !this.loadButtonAnimation
      //Aca debo agregar la conexion con el vuex, para luego conectarla con el servidor.
      //Una vez hecho esto, el servidor se debe encargar de realizar la verificación de
      //si estos datos, telefono, ya se encuentra registrado o no.

      //En caso de que los datos sumistrados ya se encuentre activos, entonces debo enviar
      //una pop-up indicando que se ha producido algun error y decir cual fue el
      //correspondiente error.
    },
    goToHome(){
      this.$router.push('/')
    }
  },
  components:{

  }
}
</script>

<style scoped>

</style>

