<template >
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
            style="margin-top: 40px"
          >
            <v-flex xs10>
              <v-text-field 
                filled 
                rounded 
                label="telefono" 
                prepend-inner-icon="mdi-cellphone-android"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout 
            row 
            justify-center 
            align-center
          >
            <v-flex xs10>
              <v-text-field 
                label="codigo" 
                prepend-inner-icon="mdi-fingerprint"
                rounded
                filled
                :disabled="!habilitarFieldCodigo"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs10>
              <v-select 
                label="recibir codigo por" 
                :items="recibirCodigoPorOptions" 
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
            @click="generarCodigo"
          >
            enviar código
          </v-btn>
          <v-btn 
            style="background-color: #56A2D5; 
                   text-transform: lowercase" 
            dark 
            rounded
            small
            v-if="habilitarFieldCodigo"
            @click="ingresar"
          >
            Ingresar
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-layout>
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
      }
    },
    components:{

    }  
  } 
</script>
