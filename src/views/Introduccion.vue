<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mb-4
      img(src='@/assets/curso/temas/intro/1.png', alt='')
    
    p.mb-4 La acelerada evolución de las Tecnologías de la Información y la Comunicación (TIC) ha generado profundas transformaciones en la forma en que las organizaciones gestionan, procesan y almacenan la información. Por ello, la computación en la nube se ha consolidado como uno de los principales motores de la transformación digital, al ofrecer soluciones tecnológicas flexibles, escalables y accesibles que responden a las necesidades de un entorno cada vez más dinámico y conectado.
    
    .row.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/intro/2.png', alt='')
      .col-lg-9(data-aos='fade-left')
        .bg-color-2.tarjeta.mb-4 
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img.p-3.pb-0(src='@/assets/curso/temas/intro/3.svg', alt='')
            .col-lg-7
              .p-4
                p.mb-0 En respuesta a esta realidad, el presente componente formativo constituye el texto base del curso virtual Implementación de servicios en la nube, desarrollado bajo los lineamientos de formación por competencias del Servicio Nacional de Aprendizaje (SENA). Su propósito es orientar al aprendiz en la comprensión y aplicación de los conceptos, herramientas y procedimientos necesarios para utilizar los servicios iniciales de la nube y gestionar infraestructuras de almacenamiento de datos de acuerdo con requerimientos organizacionales reales.
        p A lo largo de este recorrido formativo, se abordarán los fundamentos de la computación en la nube, sus modelos de servicio y despliegue, así como los criterios para identificar requerimientos de #[em hardware] y #[em software] en entornos virtualizados. De igual manera, se estudiarán las estrategias asociadas a la migración de servicios, la gestión del almacenamiento de información y la administración de bases de datos, incorporando aspectos esenciales relacionados con la seguridad, el respaldo de la información y el monitoreo de recursos tecnológicos.


    p.mb-4 La apropiación de estos conocimientos resulta fundamental para el desarrollo de competencias demandadas por el sector productivo actual, el cual requiere talento humano capaz de implementar soluciones tecnológicas eficientes, seguras y alineadas con los procesos de transformación digital. En consecuencia, al finalizar este componente, el aprendiz contará con los elementos necesarios para analizar escenarios tecnológicos, seleccionar servicios adecuados, participar en procesos de migración hacia la nube y contribuir al fortalecimiento de la infraestructura digital de las organizaciones.
    
    .row.justify-content-center.align-items-center.mb-4(data-aos='fade')     
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/28U72YH-h-w?si=dXpkChKKDExnwMdB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Fundamentos de infraestructura y almacenamiento en la nube - introducción 


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
