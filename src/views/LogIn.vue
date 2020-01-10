<template >
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

    <v-row 
      align='center'
      justify='center'
    >
      <v-card 
        style="border-radius:15px; margin-left: 1.5em"
      >
        <v-container>
          <v-row 
            align='center'
            justify='center'
          >
            <v-img 
              src="https://i.ibb.co/9nKzPKd/OLa.png" 
              max-width="100" 
              max-height="100"
              style="margin-top: 1em; margin-bottom: 1em"
            >
            </v-img>
          </v-row>
          <v-row 
            align='center'
            justify='center'
            style="margin-bottom: -5vh"
          >
            <v-col cols="11">
              <v-text-field 
                filled 
                rounded 
                label="telefono" 
                prepend-inner-icon="mdi-cellphone-android"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row 
            align='center'
            justify='center'
            style="margin-bottom: -5vh"
          >
            <v-col cols="11">
              <v-text-field 
                label="codigo" 
                prepend-inner-icon="mdi-fingerprint"
                rounded
                filled
                :disabled="!habilitarFieldCodigo"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row 
            justify='center'
            style="margin-bottom: -5vh"
          >
            <v-col cols="11">
              <v-select 
                label="recibir codigo por" 
                :items="recibirCodigoPorOptions" 
                filled
                rounded
                dense
              >
              </v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            style="background-color: #56A2D5; 
                   text-transform: lowercase" 
            :loading="loadButtonAnimation"
            @click="generarCodigo"
            dark 
            rounded
          >
            send code
          </v-btn>
          <v-btn 
            style="background-color: #56A2D5; 
                   text-transform: lowercase" 
            v-if="habilitarFieldCodigo"
            @click="ingresar"
            dark 
            rounded
          >
            login
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
  
  export default {

    name: "LogIn",
    data: () => ({
      recibirCodigoPorOptions: [
        "Celular",
        "Correo"
      ],
      habilitarFieldCodigo: false,
      loadButtonAnimation: false, //Triggered para activar animación.
                                  //del boton para llamar al generador
    }),
    methods:{
      generarCodigo(){
        this.loadButtonAnimation = !this.loadButtonAnimation
        
        //Despues de recibir una respuesta buena del servidor, entonces
        //activo el field del codigo y desactivo el load del button
        //Cuando el field del codigo se active, entonces se oculta el boton
        //"enviar codigo" y se muestra el boton "ingresar"

        //this.habilitarFieldCodigo = !this.this.habilitarFieldCodigo
        //this.loadButtonAnimation = !this.loadButtonAnimation


        //Mientras implemento lo que está arriba, colocaré el siguiente
        //codigo para ingresar a la ventana principal. Cabe recalcar que
        //este codigo no vá acá, es temporal. Este codigo va en 'ingresar'
        this.$router.push("/principal")
      },
      ingresar(){
        //Enviar el codigo, junto con el numero, al servidor y verificar 
        //que este usuario corresponde con el codigo generado.
        //Una vez hecho eso, entonces activo el router para mostrar la 
        //ventana principal.
        
        //this.$router.push("/principal")
      },
      goToHome(){
        this.$router.push('/')
      }
    },
    components:{

    }  
  } 
</script>
