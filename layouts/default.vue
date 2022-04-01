<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
  mounted() {
    this.listaPropiedades();
  },
  methods: {
    ...mapActions(["listaPropiedades"]),
  },
};
</script>
