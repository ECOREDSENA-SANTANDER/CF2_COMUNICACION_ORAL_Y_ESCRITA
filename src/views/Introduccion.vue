<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fondo1.align-items-center.p-2.mb-0(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0

        .row.justify-content-center.align-items-center.mb-4.my-5
          .col-lg-10
              p.mb-4.my-0.my-lg-4(data-aos="fade-left") La argumentación es una herramienta fundamental del pensamiento humano, utilizada para expresar ideas, defender puntos de vista, resolver conflictos y construir conocimiento de manera crítica y razonada. Desde los primeros diálogos filosóficos hasta las discusiones cotidianas en el aula o en la vida social, argumentar ha sido una actividad esencial para la comunicación efectiva y la toma de decisiones fundamentadas.
              p.mb-4 En el ámbito educativo, la argumentación cobra una importancia especial, ya que promueve el desarrollo del pensamiento crítico, la capacidad de análisis y la habilidad para dialogar con respeto y coherencia. Argumentar no solo implica opinar, sino sustentar esas opiniones con razones válidas, pruebas confiables y un razonamiento lógico que convenza sin imponer.
              p.mb-4 Estudiar los tipos de argumentación permite a los estudiantes comprender las distintas formas en que se puede construir y presentar un argumento, dependiendo del contexto, la audiencia y el objetivo comunicativo. Asimismo, reconocer las bases teóricas que sustentan cada tipo de argumentación facilita una aplicación consciente y reflexiva de estas habilidades en situaciones reales.
              p.mb-0.mb-lg-4(data-aos="fade-right") Por lo tanto, aprender a argumentar de manera efectiva es una competencia clave para la formación integral de los estudiantes, ya que fortalece su autonomía intelectual, su participación ciudadana y su capacidad de convivir en una sociedad democrática.
          .col-lg-2.col-7.col-md-6
            img.d-none.d-lg-block(src='@/assets/curso/intro/1.svg' alt="")
        
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")        
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
