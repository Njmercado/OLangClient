<template >
  <v-container style="background: linear-gradient(45deg,#7D6AE7,#56A2D5);" fill-height fluid>
    <v-row style="margin-top: -8em">
      <v-btn style="margin-left: 1em;" text icon dark @click="goToHome">
        <v-icon large>mdi-undo-variant</v-icon>
      </v-btn>
    </v-row>
    <v-row style="margin-top: -8em" align="start" justify="center">
      <v-card style="border-radius:16px; margin-left: 1.5em">
        <v-container>
          <v-row justify="center">
            <v-img
              src="https://i.ibb.co/9nKzPKd/OLa.png"
              max-width="100"
              max-height="100"
              style="margin-top: 1em; margin-bottom: 1em"
            ></v-img>
          </v-row>
          <v-row justify="center" style="margin-bottom: -5vh">
            <v-col cols="11">
              <v-text-field
                label="phone"
                prepend-inner-icon="mdi-cellphone-android"
                color="blue darken-2"
                filled
                rounded
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" style="margin-bottom: -5vh">
            <v-col cols="11">
              <v-text-field
                label="password"
                color="blue darken-2"
                prepend-inner-icon="mdi-lock"
                rounded
                filled
                dense
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="text-lowercase"
            color="orange darken-2"
            @click="signup"
            dark
            rounded
            small
          >sign up</v-btn>
          <v-btn
            class="text-lowercase"
            color="blue darken-2"
            @click="logIn"
            dark
            rounded
            small
          >login</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LogIn",
  data: () => ({
    recibirCodigoPorOptions: ["phone", "email"]
  }),
  methods: {
    logIn() {
      //Enviar el codigo, junto con el numero, al servidor y verificar
      //que este usuario corresponde con el codigo generado.
      //Una vez hecho eso, entonces activo el router para mostrar la
      //ventana principal.

      this.$router.push("/principal");
    },
    signup() {
      this.$router.push("/sign-up");
    },
    goToHome() {
      this.$router.push("/");
    }
  },
  components: {}
};
</script>
