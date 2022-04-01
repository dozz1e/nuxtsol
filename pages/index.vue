<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1>Propiedades</h1>
      <ul>
        <li v-for="propi in listadoPropiedades" :key="propi.id">
          <NuxtLink :to="`/propiedades/${propi.slug}`">{{
            propi.title
          }}</NuxtLink>
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  computed: {
    ...mapGetters(["listadoPropiedades"]),
  },
};
</script>
