<template>
  <v-row justify="center" align="center" v-if="propiedad">
    <v-col cols="12">
      <h1>Propiedad</h1>
      <!-- <span>{{ propiedad.title }}</span> -->
      <pre>{{ propiedad }}</pre>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.propiedad.seo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.propiedad.seo.metaDesc,
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    };
  },
  async asyncData(context) {
    return await context.$axios
      .post("https://marsolpropiedades.cl/data/graphql/", {
        query: `
					{
						propiedad(id: "${context.params.slug}", idType: URI) {
							databaseId
							title
							agentes {
								agentes
							}
							categoriaGraphql {
								categoria
							}
							datos {
								banos
								habitaciones
								areaTotal
							}
							detallesAdicionales {
								detalles
							}
							direccion {
								ciudad
								direccion
							}
							espaciosComunes {
								espaciosComunes
							}
							featuredImage {
								node {
									link
								}
							}
							importancia {
								importancia
							}
							incluye {
								incluye
							}
							operacion {
								operacion
							}
							precio {
								precio
								precioUf
								precioDesde
      					precioUfDesde
							}
							seo {
								metaDesc
								metaKeywords
								title
							}
							slug
							youtube {
								youtube
							}
						}
					}`,
      })
      .then((result) => {
        return {
          propiedad: result.data.data.propiedad,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
