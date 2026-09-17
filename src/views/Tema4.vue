<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Infraestructura de almacenamiento en la nube
    
    .bg-color-8(data-aos='fade').mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png', alt='')
        .col-lg-7
          .text-white.p-4
            .row
              .col-lg-2
                img.mb-3.d-none.d-lg-block(src='@/assets/curso/temas/t4/2.svg', alt='')          
            p La información es uno de los recursos más valiosos para las organizaciones, por ello, los documentos, bases de datos, imágenes, videos y registros de operaciones deben almacenarse de forma segura y estar disponibles cuando se necesiten. La computación en la nube ha transformado la manera de gestionar estos datos, permitiendo almacenar grandes volúmenes de información sin depender de servidores físicos propios.
            p.mb-0 Gracias a los servicios de almacenamiento en la nube, las organizaciones pueden aumentar o reducir su capacidad según sus necesidades, acceder a la información desde diferentes ubicaciones y contar con mecanismos de respaldo que disminuyen el riesgo de pérdida de datos.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Identificación de necesidades organizacionales de almacenamiento 
    
    p Antes de seleccionar un servicio de almacenamiento en la nube, es necesario analizar las necesidades de la organización. Este proceso permite elegir la solución más adecuada y evitar costos innecesarios o problemas relacionados con la disponibilidad de la información.
    p Para ello, se deben considerar cuatro aspectos fundamentales:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-9(data-aos='fade-left')
        TabsA.color-acento-botones
          .tarjeta.bg-color-12.p-4.px-lg-5(titulo="Capacidad")
            h4 Capacidad
            p Corresponde a la cantidad de información que se necesita almacenar actualmente y al crecimiento esperado en el futuro.
            p #[b Ejemplo:] una institución educativa que almacena videos, guías y actividades para miles de aprendices requerirá una mayor capacidad de almacenamiento que una pequeña empresa que solo guarda documentos administrativos.
          .tarjeta.bg-color-12.p-4.px-lg-5(titulo="Durabilidad")
            h4 Durabilidad
            p Hace referencia a la capacidad de conservar la información sin pérdidas, incluso ante fallos técnicos o eventos inesperados.
            p #[b Ejemplo:] los registros académicos, financieros o médicos deben mantenerse íntegros durante largos periodos, por lo que requieren altos niveles de protección y respaldo.
          .tarjeta.bg-color-12.p-4.px-lg-5(titulo="Frecuencia de acceso")
            h4 Frecuencia de acceso
            p Permite identificar qué tan seguido se consulta la información.
            p #[b Ejemplo:] los datos utilizados diariamente por una plataforma web deben estar disponibles de forma inmediata, mientras que documentos históricos o archivos antiguos pueden almacenarse en servicios de acceso menos frecuente.
          .tarjeta.bg-color-12.p-4.px-lg-5(titulo="Políticas de retención")
            h4 Políticas de retención
            p Establecen cuánto tiempo deben conservarse los datos y cuándo pueden eliminarse o archivarse.
            p #[b Ejemplo:] algunas normas legales exigen conservar expedientes académicos, laborales o clínicos durante varios años, incluso después de que hayan dejado de utilizarse.

    p Analizar estos aspectos facilita la selección del servicio de almacenamiento más adecuado para cada organización, garantizando que la información permanezca disponible, protegida y alineada con las necesidades operativas y normativas.


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1  Modelos de almacenamiento estructurados y no estructurados 
    
    p Las organizaciones generan diferentes tipos de información, y no todos los datos se almacenan de la misma manera. Por esta razón, es importante conocer las diferencias entre los modelos de almacenamiento de datos estructurados y no estructurados, ya que cada uno requiere soluciones específicas dentro de los entornos de computación en la nube.

    .row.justify-content-center.tarjeta--container.mb-4
      .col-lg-5.col-md.tarjeta.bg-color-7.p-5
        .row.justify-content-center.mb-4
          .col-8.col-md-9.col-lg-6
            img(src='@/assets/curso/temas/t4/4.svg', alt='')          
        p.mb-0 #[b Los datos estructurados] son aquellos que se encuentran organizados siguiendo un formato definido. Generalmente, se almacenan en tablas compuestas por filas y columnas, lo que facilita su búsqueda, consulta y análisis. Este tipo de información es común en bases de datos utilizadas para gestionar inventarios, registros de clientes, ventas, matrículas académicas o transacciones financieras. Debido a su organización, los datos estructurados permiten realizar consultas precisas y generar reportes de manera eficiente.
      .col-lg-5.col-md.tarjeta.bg-color-9.p-5
        .row.justify-content-center.mb-3
          .col-7.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t4/5.svg', alt='')          
        p.mb-0 Por su parte, #[b los datos no estructurados] no siguen un formato fijo ni se organizan en tablas. En esta categoría se encuentran documentos, imágenes, videos, archivos de audio, correos electrónicos, publicaciones en redes sociales y otros contenidos digitales. Este tipo de información representa gran parte de los datos generados actualmente por personas y organizaciones.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos='fade-right')
        p Debido a su diversidad y volumen, los datos no estructurados requieren soluciones de almacenamiento más flexibles y escalables. En la nube, una de las alternativas más utilizadas es el almacenamiento de objetos, diseñado para gestionar grandes cantidades de información de diferentes formatos de manera segura y eficiente.
        p Comprender estas diferencias permite seleccionar la tecnología de almacenamiento más adecuada según las características de los datos y las necesidades de la organización, optimizando el acceso, la gestión y la protección de la información.
      .col-lg-6.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t4/6.png', alt='')
        
    .row.align-items-end
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Comparación entre datos estructurados y datos no estructurados
        .tabla-a.color-primario
          table
            thead
              tr
                th Datos estructurados
                th Datos no estructurados
            tbody
              tr
                td Base de datos de estudiantes.
                td Fotografías.
              tr
                td Inventario de productos.
                td Videos.
              tr
                td Registro de ventas.
                td Archivos PDF.
              tr
                td Información de clientes.
                td Correos electrónicos.
              tr
                td Calificaciones académicas.
                td Publicaciones en redes sociales.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t4/7.png', alt='')
    

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  Tipos y aplicación de servicios de almacenamiento gestionado
    
    p Los proveedores de servicios en la nube ofrecen diferentes alternativas de almacenamiento para responder a las necesidades de las organizaciones. La selección de una u otra dependerá del tipo de información que se va a almacenar, la velocidad de acceso requerida y la forma en que los usuarios o aplicaciones utilizarán los datos.
    p.mb-5 Los tres tipos principales de almacenamiento gestionado en la nube son: almacenamiento en bloque, almacenamiento de archivos y almacenamiento de objetos. 

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Almacenamiento en bloque
    
    p Este tipo de almacenamiento funciona de manera similar a un disco duro conectado a un computador. Los datos se dividen en bloques y se asignan directamente a una máquina virtual para que pueda utilizarlos como si fueran una unidad de almacenamiento local.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/8.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p.mb-4 Su principal ventaja es la velocidad, por lo que suele emplearse en aplicaciones que requieren un acceso rápido a la información.
        .subt-2.mb-3
          img.px-2(src='@/assets/curso/temas/t4/11.svg', alt='')
          h4.mb-0.ms-2.me-5.text-white Aplicaciones comunes:
        ul.lista-ul--color.color-1.fa-lista
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Sistemas operativos de máquinas virtuales.
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Bases de datos transaccionales.
          li 
            i.fas.fa-folder-open
            span.mb-0 Aplicaciones empresariales de alto rendimiento.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Almacenamiento de archivos
    
    p Organiza la información mediante carpetas y archivos, de forma similar a como se almacenan los documentos en un computador personal o en una unidad compartida de red.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/9.png', alt='')
      .col-lg-6(data-aos='fade-left')
        p.mb-4 Permite que varios usuarios o servidores accedan simultáneamente a la misma información, facilitando el trabajo colaborativo y el intercambio de archivos.
        .subt-2.mb-3
          img.px-2(src='@/assets/curso/temas/t4/11.svg', alt='')
          h4.mb-0.ms-2.me-5.text-white  Aplicaciones comunes:
        ul.lista-ul--color.color-1.fa-lista
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Carpetas compartidas.
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Repositorios de documentos.
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Proyectos colaborativos.
          li 
            i.fas.fa-folder-open
            span.mb-0 Bibliotecas de recursos para aplicaciones.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Almacenamiento de objetos
    
    p Está diseñado para almacenar grandes volúmenes de información de diferentes formatos, como imágenes, videos, documentos, copias de seguridad y archivos multimedia.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t4/10.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p.mb-4 A diferencia de los sistemas tradicionales, los datos se almacenan como objetos identificados de forma única, lo que facilita su gestión y escalabilidad.
        .subt-2.mb-3
          img.px-2(src='@/assets/curso/temas/t4/11.svg', alt='')
          h4.mb-0.ms-2.me-5.text-white Aplicaciones comunes:
        ul.lista-ul--color.color-1.fa-lista
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Copias de seguridad #[em (backups)].
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Repositorios de imágenes y videos.
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Sitios web.
          li.mb-2 
            i.fas.fa-folder-open
            span.mb-0 Lagos de datos #[em (data lakes)].
          li 
            i.fas.fa-folder-open
            span.mb-0 Almacenamiento de archivos históricos.
    
    p La elección del tipo de almacenamiento dependerá de las características de la información y de los requerimientos de la organización. Mientras el almacenamiento en bloque prioriza el rendimiento, el almacenamiento de archivos facilita el acceso compartido y el almacenamiento de objetos ofrece una solución escalable para grandes volúmenes de datos.

    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 7.
        span Comparación de los tipos de almacenamiento gestionado en la nube
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Tipo de almacenamiento
              th ¿Cómo organiza la información?
              th Uso principal
          tbody
            tr
              td En bloque
              td Como discos virtuales.
              td Sistemas operativos y bases de datos.
            tr
              td De archivos
              td En carpetas y archivos.
              td Documentos compartidos y trabajo colaborativo.
            tr
              td De objetos
              td Como objetos identificados de forma única.
              td Imágenes, videos, respaldos y grandes volúmenes de datos.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
