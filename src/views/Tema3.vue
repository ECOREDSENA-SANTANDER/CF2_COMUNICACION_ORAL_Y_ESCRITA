<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de argumentación

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-5.col-md-8.col-10.mb-4
        img(src='@/assets/curso/tema3/1.png')
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img-a.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/10.svg')
          .col-lg-8
            p.mb-lg-4.mb-2(data-aos="fade-left") La argumentación no es una única forma de razonar, sino que puede adoptar distintas estructuras dependiendo del objetivo, la audiencia y el contexto. A continuación, te presento los tipos más comunes de argumentación, junto con las bases teóricas que los sustentan.


    .row.fondo2.p-4.p-lg-5.p-md-4.mb-0(data-aos="fade-down")
      .col-lg-12
    
        .tarjeta.tarjeta--gris.ul.p-lg-4.p-3.mb-0(data-aos="fade-right")
          PasosB.color-acento-contenido
            .row.justify-content-center.align-items-center(titulo="Paso 1")
              .col-lg-7
                h4.mb-4 1. Argumentación deductiva
                p.mb-4 La argumentación deductiva es aquella en la que se parte de principios generales para llegar a una conclusión específica. La conclusión es inevitable si las premisas son verdaderas.
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-0 Aristóteles, en su obra “Organon”, introduce la lógica deductiva como un método válido para obtener conclusiones que sean necesariamente verdaderas si las premisas lo son.
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-0 En el ámbito educativo, es fundamental para enseñar a los estudiantes a aplicar teorías generales a casos particulares y analizar situaciones con una lógica rigurosa.
              .col-lg-4.col-md-7.col-10.mb-4
                img.img-a.img-t(src='@/assets/curso/tema3/2.png')
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-11
                  .row
                    .col
                      p.mb-lg-0.mb-4 Ejemplo:
                    .col-lg-11
                      p.mb-0 - Premisa 1: todos los mamíferos tienen corazón. - Premisa 2: el perro es un mamífero. - Conclusión: el perro tiene corazón.
            
            .row.justify-content-center.align-items-center(titulo="Paso 2")
              .col-lg-7
                h4.mb-4 2. Argumentación inductiva 
                p.mb-4 Consiste en observar hechos particulares para llegar a una conclusión general. Se parte de la experiencia u observación y se generaliza.
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-0 John Dewey destaca la importancia de la inducción en el proceso de aprendizaje, ya que promueve el aprendizaje basado en la observación y la experimentación.
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-0 En educación, la inducción se utiliza en áreas como la ciencia, donde los estudiantes aprenden a generalizar a partir de experimentos o datos específicos.
                .row.justify-content-center.align-items-start.mb-0
                  .col
                    p.mb-lg-0.mb-4 Ejemplo:
                  .col-lg-10
                    p.mb-0 - Observación 1: El sol salió todos los días de la semana pasada.
                    p.mb-0 - Observación 2: El sol ha salido todos los días durante el mes.
                    p.mb-lg-0.mb-4 - Conclusión: El sol siempre sale por la mañana.
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t(src='@/assets/curso/tema3/3.png')
   
            .row.justify-content-center.align-items-center(titulo="Paso 3")
              .col-lg-7
                h4.mb-4 3. Argumentación por analogía
                p.mb-4 Este tipo de argumentación establece una comparación entre dos situaciones o conceptos que son similares en algunos aspectos, para concluir que lo que es cierto para uno lo es para el otro.
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-0 Aristóteles también trabajó con el concepto de analogía en la retórica, considerando que este tipo de razonamiento facilita la comprensión en públicos diversos, al establecer relaciones familiares entre conceptos complejos.
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-lg-0.mb-3 En la enseñanza, la analogía es útil para hacer conexiones entre conceptos abstractos y situaciones cotidianas, lo que mejora la comprensión.
              .col-lg-4.col-md-7.col-10
                img.img-a.img-t.mb-lg-0.mb-4(src='@/assets/curso/tema3/4.png')
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-11
                  .row
                    .col
                      p.mb-lg-0.mb-4 Ejemplo:
                    .col-lg-11
                      p.mb-0 - Situación 1: Los humanos tienen una función vital que es la circulación sanguínea.
                      p.mb-0 - Situación 2: Las máquinas tienen sistemas de circulación para mantener su funcionamiento.
                      p.mb-0 - Conclusión: Así como los humanos necesitan sangre para sobrevivir, las máquinas necesitan un sistema de circulación para operar correctamente.

            .row.justify-content-center.align-items-center(titulo="Paso 4")
              .col-lg-7
                h4.mb-4 4. Argumentación causal
                p.mb-4 Se establece una relación entre causas y efectos, y se utiliza la causa para probar la existencia de un efecto.
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-0 David Hume, en su estudio sobre la causalidad, argumenta que todo fenómeno tiene una causa y que podemos usar esta relación para entender el mundo. En educación, el análisis de causas y efectos ayuda a desarrollar el pensamiento crítico.
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-lg-0.mb-2 Este tipo de argumentación es fundamental en áreas como las ciencias sociales y naturales, donde los estudiantes deben identificar y analizar relaciones de causa y efecto.
              .col-lg-4.col-md-7.col-10
                img.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema3/5.png')
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-11
                  .row
                    .col
                      p.mb-lg-0.mb-4 Ejemplo:
                    .col-lg-11
                      p.mb-0 - Causa: si los estudiantes estudian más horas, mejorarán sus calificaciones.
                      p.mb-0 - Efecto: aumentar las horas de estudio mejora el rendimiento académico.

            .row.justify-content-center.align-items-center(titulo="Paso 5")
              .col-lg-7
                h4.mb-4 5. Argumentación por autoridad
                p.mb-4 Este tipo de argumentación se basa en la opinión o experiencia de una figura reconocida o experta en un campo determinado. La autoridad respalda la validez del argumento.
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-0 Aristóteles también habla del ethos (carácter) como uno de los modos de persuasión en su retórica. La autoridad en el contexto educativo juega un rol clave en la enseñanza y en la transmisión de conocimiento.
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-lg-0.mb-3 En educación, se utiliza para enseñar a los estudiantes a confiar en fuentes confiables y expertos para reforzar su comprensión.
              .col-lg-4.col-md-7.col-10
                img.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema3/6.png')
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-11
                  .row
                    .col
                      p.mb-lg-0.mb-4 Ejemplo:
                    .col-lg-11
                      p.mb-0 - Autoridad: según Albert Einstein, “la imaginación es más importante que el conocimiento”.
                      p.mb-0 - Argumento: como Einstein es una figura reconocida en el campo de la física, su afirmación sobre la imaginación debe tomarse en cuenta.

            .row.justify-content-center.align-items-center(titulo="Paso 6")
              .col-lg-7
                h4.mb-4 6. Argumentación emocional (pathos)
                p.mb-4 La argumentación emocional busca provocar una respuesta emocional en el receptor. Este tipo de argumento se enfoca en las emociones y sentimientos del público para lograr el impacto deseado.
                ul.lista-ul
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-0 Aristóteles, en su teoría de la retórica, señala que las emociones pueden influir fuertemente en el juicio de las personas. En educación, este tipo de argumentación se utiliza para movilizar a los estudiantes a la acción o reflexionar sobre un tema emocionalmente relevante.
                  li.d-flex.mb-1
                    i.fas.fa-leaf
                    p.mb-lg-0.mb-2 Este tipo de argumentación se utiliza a menudo en discursos motivacionales y en campañas sociales.
              .col-lg-4.col-md-7.col-10
                img.img-a.mb-lg-0.mb-4(src='@/assets/curso/tema3/7.png')
              .row.justify-content-center.align-items-start.mb-0
                .col-lg-11
                  .row
                    .col
                      p.mb-lg-0.mb-4 Ejemplo:
                    .col-lg-11
                      p.mb-0 - Argumento emocional: imagínate perder a un ser querido por un accidente que pudo haberse evitado con medidas de seguridad vial.
                      p.mb-0 - Conclusión emocional: debemos usar siempre el cinturón de seguridad para evitar tragedias.

            .row.justify-content-center.align-items-center(titulo="Paso 7")
              .col-lg-11
                h4.mb-4 7. Argumentación por consenso (diálogo)
                .row
                  .col-lg-6
                    p.mb-4 Este tipo de argumentación se basa en alcanzar un acuerdo mutuo entre las partes mediante el diálogo y la negociación. Es común en situaciones de mediación o resolución de conflictos.
                    ul.lista-ul
                      li.d-flex.mb-1
                        i.fas.fa-leaf
                        p.mb-0 Habermas en su teoría de la acción comunicativa subraya la importancia del diálogo para llegar a acuerdos que sean razonables y mutuamente aceptados. En el aula, este tipo de argumentación fomenta la participación y el respeto entre estudiantes.
                    p.mb-2 Ejemplo:
                    p.mb-4 - Diálogo: los estudiantes de diferentes grupos se ponen de acuerdo sobre cómo organizar un evento en la escuela. Después de escuchar todas las ideas, se llega a una decisión común.
                  .col-lg-6
                    p.mb-4 Cada tipo de argumentación tiene su propia relevancia y aplicación en diferentes contextos. Dependiendo de la situación, se debe elegir el tipo más adecuado para comunicar ideas de manera efectiva. Los principios teóricos detrás de cada tipo de argumentación, como los propuestos por filósofos y expertos en comunicación, son esenciales para formar un pensamiento crítico y argumentativo en los estudiantes.
                    p.mb-4 Recomendaciones para argumentar mejor
                    ul.lista-ul
                      li.d-flex.mb-1
                        i.fas.fa-leaf
                        p.mb-0 Escucha con respeto antes de responder.
                      li.d-flex.mb-1
                        i.fas.fa-leaf
                        p.mb-0 Usa un lenguaje claro y ordenado.
                      li.d-flex.mb-1
                        i.fas.fa-leaf
                        p.mb-0 Evita imponer tu opinión.
                      li.d-flex.mb-1
                        i.fas.fa-leaf
                        p.mb-0 Investiga antes de argumentar.
                      li.d-flex.mb-1
                        i.fas.fa-leaf
                        p.mb-0 Sé crítico, pero también abierto al diálogo.
                


</template>

<script>
export default {
  name: 'Tema3',
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
