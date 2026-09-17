<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La computación en la nube ha transformado la forma en que las organizaciones gestionan su infraestructura tecnológica, pasando de entornos físicos tradicionales a servicios virtualizados, escalables y disponibles bajo demanda. Para ello, es fundamental comprender los modelos de servicio (IaaS, PaaS y SaaS) y los modelos de despliegue (público, privado e híbrido), permitiendo seleccionar soluciones acordes con las necesidades del negocio y optimizar recursos tecnológicos y financieros.
    p Asimismo, la gestión segura de la información requiere identificar los diferentes tipos de datos y seleccionar adecuadamente servicios de almacenamiento, bases de datos gestionadas y mecanismos de protección. La aplicación de controles de acceso, cifrado, monitoreo, copias de seguridad y estrategias de recuperación fortalece la disponibilidad y continuidad de los servicios. En conjunto, estos conocimientos permiten implementar soluciones en la nube seguras, eficientes y alineadas con los requerimientos del sector productivo. 

    .row.justify-content-center
      .col-lg-11.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El contenido presenta una visión integral de la implementación de servicios en la nube, organizada en cuatro ejes principales: fundamentos del Cloud Computing, despliegue y migración de servicios, infraestructura de almacenamiento y gestión de datos, y seguridad con continuidad operativa. Incluye los modelos de servicio y despliegue, el análisis de requerimientos para la migración, los tipos de almacenamiento y bases de datos, así como las estrategias de protección de la información, control de accesos, respaldo, monitoreo y recuperación ante fallos para garantizar la disponibilidad y confiabilidad de los servicios.")
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
