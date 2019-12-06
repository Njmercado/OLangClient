<template>
  <v-container 
    fill-height 
    fluid 
    column 
    style="background: linear-gradient(45deg,#7D6AE7,#56A2D5)"
  >
    <v-layout 
      row 
      align-center 
      justify-center
    >
      <v-card 
        width="300px" 
        style="border-radius:15px"
      >
        <v-container>
          <v-layout 
            row 
            justify-center 
            aling-center
            style="margin-bottom: 40px"
          >
            <v-img 
              src="https://i.ibb.co/9nKzPKd/OLa.png" 
              max-width="64" 
              max-height="64"
            >
            </v-img>
          </v-layout>
          <v-layout 
            row 
            justify-center 
            aling-center 
            v-for="(input, index) in inputs"
            :key="index"
          >
            <v-flex xs10>
              <v-text-field 
                filled 
                rounded 
                :label="input.label" 
                :prepend-inner-icon="input.icon"
                v-model="input.value"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs10>
              <v-select 
                label="idioma" 
                :items="avaliableLanguageList" 
              >
              </v-select>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            style="background-color: #56A2D5; 
                   text-transform: lowercase" 
            dark 
            rounded
            small
            :loading="loadButtonAnimation"
            @click="analizarSiUsuarioYaExiste"
          >
            registrarse
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
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
      }
    },
    components:{

    }  
  } 
</script>

<style scoped>

</style>

