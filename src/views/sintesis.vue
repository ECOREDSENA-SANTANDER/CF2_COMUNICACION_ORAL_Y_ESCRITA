<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 La argumentación es un proceso comunicativo mediante el cual una persona expone razones con el objetivo de defender una idea, refutar una postura contraria o persuadir a una audiencia. Este proceso es esencial en ámbitos como la educación, la política, el derecho y la vida cotidiana, ya que permite estructurar el pensamiento crítico y fomentar el diálogo racional.
    p.mb-4 Toda argumentación parte de una tesis, que es la idea principal que se desea sostener. Para respaldarla, se utilizan argumentos fundamentados en premisas y evidencias, que pueden ser datos, ejemplos, estadísticas o experiencias. Además, pueden aparecer contraargumentos, que plantean puntos de vista opuestos, y refutaciones, que buscan desmontarlos para reforzar la postura inicial.
    p.mb-4 El uso adecuado de la lógica y la retórica permite construir argumentos sólidos y convincentes, evitando falacias, que son errores de razonamiento que pueden parecer válidos, pero carecen de fundamento. La efectividad de una argumentación también depende del conocimiento del contexto y del tipo de audiencia a la que se dirige, así como del propósito comunicativo, que puede ser informar, convencer o persuadir.
    p.mb-4 En resumen, la argumentación no solo es una herramienta clave para el intercambio de ideas, sino también una vía para el entendimiento mutuo y la construcción del conocimiento colectivo.


    .bgs.p-4
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-lg-4.p-0
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis
  
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
