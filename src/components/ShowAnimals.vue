<template>
  <v-dialog v-model="realOpener" max-width="60em" max-height="90vh">
    <v-card>
      <v-card-title>
        <label class="mx-auto" style="color: gray">Animal selector</label>
      </v-card-title>
      <v-container fluid>
        <!-- Return button, to choose another diferent animal family -->
        <v-btn v-if="choosenFamilies.length !== 0" class="ml-4" color="blue darken-2" @click="chooseAnotherAnimalFamily" small fab dark>
          <v-icon dark>mdi-undo-variant</v-icon>
        </v-btn>

        <!-- List of animal families -->
        <v-row justify="center" align="center">
          <v-col cols="12" xs="12" sm="12" md="5" lg="4" xl="4" align="center">
            <v-avatar
              v-for="(family, index) in animalFamilesChoosenByUser"
              :key="index"
              class="mx-4 my-4"
              style="cursor: pointer"
              size="98"
              color="green darken-2"
              :title="family.name"
              @click="showFamilyMembers(family.name)"
            >
              <v-icon large dark>{{family.icon}}</v-icon>
            </v-avatar>
          </v-col>

          <v-divider vertical></v-divider>

          <!-- List of found animals -->
          <v-col cols="12" xs="12" sm="12" md="7" lg="7" xl="7" align="center">
            <v-avatar
              class="mx-1 my-1"
              v-for="(result, index) in results"
              :key="index"
              style="cursor: pointer"
              size="64"
              color="green darken-2"
              :title="result.title"
            >
              <v-icon large dark>{{result.icon}}</v-icon>
            </v-avatar>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "",
  data: () => ({
    realOpener: false,
    results: [{ icon: "mdi-panda", title: "panda" }],
    animalGeneralTypes: [
      { name: "Vertebrates", icon: "mdi-cow" },
      { name: "Invertebrates", icon: "mdi-jellyfish" }
    ],
    animalFamilesChoosenByUser: [
      { name: "Vertebrates", icon: "mdi-cow" },
      { name: "Invertebrates", icon: "mdi-jellyfish" }
    ],
    vertebrates: [
      { name: "Mamiferos", icon: "mdi-cow" },
      { name: "Birds", icon: "mdi-owl" },
      { name: "Fishes", icon: "mdi-fish" },
      { name: "Reptiles", icon: "mdi-turtle" },
      { name: "Amphibians", icon: "mdi-frog" }
    ],
    invertebrates: [{ name: "jellyfish", icon: "mdi-jellyfish" }],
    choosenFamilies: [],
    birds: [
      {name: "Owl", icon: "mdi-owl"}
    ]
  }),
  props: ["open"],
  watch: {
    open(val) {
      this.realOpener = val ? val : true;
    }
  },
  methods: {
    showFamilyMembers(family) {
      if (family === "Vertebrates")
        this.animalFamilesChoosenByUser = this.vertebrates;
      if (family === "Invertebrates")
        this.animalFamilesChoosenByUser = this.invertebrates;
      if (family === "Birds")
        this.animalFamilesChoosenByUser = this.birds;
      this.choosenFamilies.push(family);
    },
    async chooseAnotherAnimalFamily() {
      await this.choosenFamilies.pop()
      if(this.choosenFamilies.length === 0) this.animalFamilesChoosenByUser = await this.animalGeneralTypes 
      else this.showFamilyMembers(await this.choosenFamilies.pop());
      //Hago 2 pops, porque primero se debe eliminar la ruta actual y la anterior para posicionarse en la raiz de todo
      //Una vez ubicado en la raíz, este puede tomar cualquier cámino que el usuario desee.
    }
  },
  components: {}
};
</script>