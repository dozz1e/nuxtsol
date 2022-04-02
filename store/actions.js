const base = "https://marsolpropiedades.cl";

export default {
  async listaPropiedades({ commit }) {
    const propiedades = await this.$axios.$post(`${base}/data/graphql`, {
      query: `{
				propiedades(where: {categoryId: 2}, first: 100) {
					nodes {
						title
						id
						agentes {
							agentes
						}
						categoriaGraphql {
							categoria
						}
						featuredImage {
							node {
								link
							}
						}
						datos {
							areaTotal
							banos
							habitaciones
						}
						detallesAdicionales {
							detalles
						}
						direccion {
							ciudad
							direccion
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
						slug
						youtube {
							youtube
						}
						propiedadId
						seo {
							title
							metaDesc
							metaKeywords
						}
						espaciosComunes {
							espaciosComunes
						}
					}
				}
			}`,
    });
    commit("SET_PROPIEDADES", propiedades.data.propiedades.nodes);
  },
};
