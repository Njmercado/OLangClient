<template>
  <v-dialog width="20em" v-model="realOpener">
    <v-card style="border-radius: 16px">
      <v-container>
        <v-row justify="center">
          <v-avatar color="purple darken-2" size="128">
            <v-icon dark large>
              mdi-key
            </v-icon>
          </v-avatar>
        </v-row>

        <v-row justify="center">
          <v-col cols="10">
            <v-text-field
              label="Contraseña actual"
              color="purple darken-2"
              type="password"
              append-icon="mdi-key"
              v-model="oldPassword"
              rounded filled dense
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10">
            <v-text-field
              label="Nueva contraseña"
              :type="typeFileTextForNewPassword? 'password': 'text'"
              v-model="newPassword"
              color="warning"
              append-icon="mdi-eye"
              @click:append="typeFileTextForNewPassword = !typeFileTextForNewPassword"
              rounded filled dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-btn 
            class="text-lowercase" 
            color="purple darken-2" 
            @click="changePassword" 
            :loading="processingPasswordChange" 
            small dark
          >
            cambiar contraseña
          </v-btn>
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
    oldPassword: '',
    newPassword: '',
    typeFileTextForNewPassword: true,
    openStatus: false,
    statusMsg: '',
    statusType: 'error',
    processingPasswordChange: false
  }),
  props: [
    "open"
  ],
  watch: {
    open(val){
      this.realOpener = val? val: true
    }
  },
  computed: {
  },
  methods:{
    changePassword() {
      this.processingPasswordChange = true
      setTimeout(() => this.processingPasswordChange = false, 5000)
    }
  },
  components:{
  }  
} 
</script>