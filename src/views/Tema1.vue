<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 #[em Cloud computing] como base de la transformación digital
    
    .bg-color-3.mb-4(data-aos='fade')
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-lg-7
          .text-white.p-4
            .row.mb-3
              .col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/2.svg', alt='')            
            p La transformación digital ha cambiado la manera en que las personas, las empresas y las instituciones utilizan la tecnología para desarrollar sus actividades, por ello, la computación en la nube (#[em cloud computing]) se ha convertido en una de las principales herramientas para almacenar información, ejecutar aplicaciones y acceder a recursos tecnológicos desde cualquier lugar con conexión a internet.
            p.mb-0 Tradicionalmente, las organizaciones debían adquirir servidores, equipos de almacenamiento y otros dispositivos físicos para gestionar sus servicios informáticos. Este modelo implicaba altos costos de inversión, mantenimiento y actualización. Con la llegada de la computación en la nube, muchos de estos recursos pueden utilizarse como servicios suministrados por proveedores especializados, eliminando la necesidad de contar con una infraestructura tecnológica propia de gran tamaño.

    .row.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/3.png', alt='')
      .col-lg-9(data-aos='fade-left')
        p.mb-4 La computación en la nube permite acceder a servidores virtuales, bases de datos, redes, aplicaciones y espacios de almacenamiento de forma flexible y bajo demanda. Esto significa que los recursos pueden utilizarse cuando se necesitan y ampliarse o reducirse según los requerimientos de cada organización. Gracias a esta característica, las empresas pueden responder con mayor rapidez a los cambios del mercado, optimizar costos y mejorar la continuidad de sus operaciones.
        .bg-color-2.tarjeta
          .row.justify-content-center.align-items-center
            .col-lg-5.d-none.d-lg-block
              img.px-3.pt-3(src='@/assets/curso/temas/t1/4.svg', alt='')
            .col-lg-7
              .p-4
                p.mb-0 Más que un espacio para almacenar información, la nube constituye una infraestructura tecnológica integral que facilita la innovación, la automatización de procesos, la implementación de nuevos servicios y la transformación digital de las organizaciones. Por esta razón, conocer sus principios y posibilidades es un paso fundamental para el desarrollo de competencias relacionadas con la implementación y administración de servicios en la nube.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Concepto y evolución del #[em cloud computing]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        p.mb-lg-4 La computación en la nube #[em (cloud computing)] es un modelo tecnológico que permite acceder a recursos informáticos a través de internet de manera rápida, flexible y bajo demanda; así mismo, se pueden incluir servidores, almacenamiento, bases de datos, redes y aplicaciones, los cuales son proporcionados por empresas especializadas y utilizados según las necesidades de cada usuario u organización.
        .bg-color-2.p-4.p-lg-5.mb-4
          p.mb-0 Una forma sencilla de entender este concepto es compararlo con los servicios públicos. Así como una persona utiliza energía eléctrica o agua sin preocuparse por la infraestructura que existe detrás de estos servicios, en la computación en la nube los usuarios acceden a recursos tecnológicos sin necesidad de administrar directamente los servidores o equipos físicos que los soportan.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/5.png', alt='')
    
    .row.justify-content-around.mb-5(data-aos='fade')
      .col-lg-2.col-md-5.mb-3.mb-lg-0
        .tarjeta.color-primario--borde.bg-white.text-center.p-4.h-100.d-flex.justify-content-center.flex-column
          h5 #[em Mainframes]
          p.mb-0 Procesamiento centralizado.  
      .col-lg-auto.col-md-1.d-flex.justify-content-center.align-items-center
        .flecha        
      .col-lg-2.col-md-5.mb-3.mb-lg-0
        .tarjeta.color-secundario--borde.bg-white.text-center.p-4.h-100.d-flex.justify-content-center.flex-column
          h5 Cliente - servidor
          p.mb-0 Recursos compartidos en red.
      .col-lg-auto.col-md-1.d-flex.justify-content-center.align-items-center
        .flecha
      .col-lg-2.col-md-5.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido--borde.bg-white.text-center.p-4.h-100.d-flex.justify-content-center.flex-column
          h5 Virtualización
          p.mb-0 Múltiples entornos en un mismo servidor. 
      .col-lg-auto.col-md-1.d-flex.justify-content-center.align-items-center
        .flecha
      .col-lg-2.col-md-5.mb-3.mb-lg-0
        .tarjeta.color-adicional-1--borde.bg-white.text-center.p-4.h-100.d-flex.justify-content-center.flex-column
          h5 Computación en la Nube
          p.mb-0 Servicios disponibles por internet bajo demanda.

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/6.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-2
            img.d-none.d-lg-block(src='@/assets/curso/temas/t1/7.svg', alt='')
          .col-lg-10
            p.mb-0 La virtualización constituye la base de la computación en la nube moderna. Gracias a esta tecnología, un servidor físico puede dividirse en varios entornos independientes que funcionan como servidores separados, cada uno con su propio sistema operativo y recursos asignados.
        p Con lo cual:
        ul.lista-ul--color.color-1.fa-lista
          li.mb-1 
            i.fas.fa-folder-open
            span.mb-0 Mejora la eficiencia.
          li.mb-1 
            i.fas.fa-folder-open
            span.mb-0 Reduce costos. 
          li.mb-0
            i.fas.fa-folder-open
            span.mb-0 Facilita la administración de la infraestructura tecnológica.

    p.mb-5 Actualmente, la computación en la nube es utilizada por organizaciones de todos los sectores debido a su capacidad para ofrecer escalabilidad, disponibilidad, seguridad y flexibilidad. Estas características la convierten en una herramienta fundamental para apoyar los procesos de transformación digital y la prestación de servicios tecnológicos modernos.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Evolución de la arquitectura de computación: de los #[em mainframes] al #[em cloud] y #[em edge computing]
    
    LineaTiempoE.color-acento-contenido
      .row(titulo="Década de 1960")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/8.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h4 #[em Mainframes] y computación centralizada
          ul.lista-ul
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Computación centralizada. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Procesamiento por lotes.
            li 
              i.lista-ul__vineta
              span.mb-0 Uso en grandes organizaciones.
      .row(titulo="Década de 1970")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/9.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h4 Microprocesadores y la era de la computación personal (transición)
          ul.lista-ul
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Aparición de los microprocesadores. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Democratización del acceso a la computación. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Desarrollo de sistemas operativos empresariales.
            li 
              i.lista-ul__vineta
              span.mb-0 Capacidad de procesamiento limitada en comparación con la actualidad. 
      .row(titulo="Décadas de 1980 y 1990")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/10.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h4 Era del cliente - servidor
          ul.lista-ul
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Arquitectura distribuida. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Procesamiento local y remoto. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Expansión de las redes LAN. 
            li 
              i.lista-ul__vineta
              span.mb-0 Integración de estaciones de trabajo y servidores. 
      .row(titulo="Década de 2000")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/11.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h4 Inicios del #[em cloud computing] y la Web 2.0
          ul.lista-ul
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Computación como servicio. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Virtualización de recursos.
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Movilidad y acceso remoto.
            li 
              i.lista-ul__vineta
              span.mb-0 Consolidación de internet como plataforma de servicios. 
      .row(titulo="Década de 2010")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/12.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h4 Revolución del #[em cloud computing] y los #[em smartphones]
          ul.lista-ul
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Acceso ubicuo a la información. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Almacenamiento masivo de datos. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Expansión del Internet de las Cosas (IoT, por sus siglas en inglés, #[em Internet of Things]). 
            li 
              i.lista-ul__vineta
              span.mb-0 Desarrollo de servicios basados en inteligencia artificial y análisis de datos. 
      .row(titulo="Actualidad")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/13.svg', alt='')
        .col-lg-10.mb-4.mb-lg-0
          h4 Actualidad #[em Cloud Computing] y #[em Edge Computing]
          ul.lista-ul
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Infraestructura escalable bajo demanda. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Servicios de almacenamiento y procesamiento distribuidos. 
            li 
              i.lista-ul__vineta
              span.mb-0 Plataformas y servicios en la nube. 
          h4 #[em Edge Computing] (procesamiento en el borde)
          ul.lista-ul
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Procesamiento local de datos. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Mayor velocidad de respuesta. 
            li.mb-1 
              i.lista-ul__vineta
              span.mb-0 Soporte para dispositivos inteligentes y sistemas autónomos.  
            li 
              i.lista-ul__vineta
              span.mb-0 Aplicaciones en vehículos conectados, automatización industrial e Internet de las Cosas (IdC). 
    

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Análisis de posibilidades actuales y factor de cambio comercial
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8(data-aos='fade-right')
        p El impacto del #[em cloud computing] trasciende la mera actualización tecnológica; se constituye como un factor de cambio comercial y operativo sin precedentes. En la economía digital, la agilidad y la capacidad de adaptación son determinantes para la supervivencia de cualquier entidad; las posibilidades actuales que ofrece la nube permiten a organizaciones de todos los tamaños competir en igualdad de condiciones en términos de infraestructura tecnológica, un fenómeno conocido como la democratización de la tecnología.
        p Desde el punto de vista comercial, el cambio más drástico se observa en la transición de un modelo económico basado en el gasto de capital (CAPEX - #[em Capital Expenditure]) a uno fundamentado en el gasto operativo (OPEX - #[em Operational Expenditure]). En el modelo tradicional, implementar un nuevo servicio requería una fuerte inversión inicial para la adquisición de servidores, licencias de #[em software], adecuación de centros de datos físicos (enfriamiento, energía ininterrumpida) y contratación de personal especializado para su mantenimiento; este proceso podía tardar meses. 
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t1/14.png', alt='')

    p.mb-4 En contraste, el modelo de nube opera bajo el principio de pago por uso (#[em pay-as-you-go]). Una empresa puede desplegar decenas de servidores en cuestión de minutos, pagar únicamente por los recursos informáticos consumidos durante el tiempo exacto en que estuvieron activos, y apagarlos cuando ya no sean necesarios, eliminando así el riesgo financiero asociado a la subutilización de la infraestructura.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Ejemplo aplicado en educación: #[br]
        p.mb-0 Una institución de educación superior debe alojar una plataforma de aprendizaje virtual (LMS) que experimenta picos masivos de tráfico únicamente durante las dos semanas de inscripciones y exámenes finales. 
          br
          br
          span.mb-0 En un modelo tradicional, la institución tendría que comprar servidores con la capacidad suficiente para soportar ese pico máximo de usuarios, equipos que permanecerían ociosos el resto del año. Al migrar a la nube, la institución configura una infraestructura elástica (#[em auto-scaling]) que añade servidores virtuales automáticamente solo cuando el tráfico aumenta y los elimina cuando el tráfico desciende, pagando exactamente por la demanda real.
    
    .bg-color-1
      img(src='@/assets/curso/temas/t1/16.png', alt='')
      .p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones.mb-3(
          texto="PÓDCAST: La nube y la transformación digital"
          :audio="require_src('@/assets/curso/temas/audio/5.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p.mb-0.px-lg-4 En el siguiente pódcast se abordan los principales beneficios de la computación en la nube y su impacto en los procesos de transformación digital de las organizaciones. A través de ejemplos y situaciones del entorno empresarial, se analizan aspectos relacionados con la optimización de recursos, la escalabilidad, la innovación y la competitividad, proporcionando elementos clave para comprender la importancia de esta tecnología en el contexto actual.


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3  Infraestructura tecnológica tradicional frente a la nube  
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/17.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p Para establecer una base sólida en el diseño instruccional de un arquitecto o administrador #[em cloud], es imperativo establecer una comparación crítica entre la infraestructura tecnológica tradicional (#[em on-premises]) y la infraestructura basada en la nube; esta diferenciación permite al aprendiz comprender por qué las organizaciones están abandonando los centros de datos locales.
        .bg-color-2.p-4
          p.mb-0 La infraestructura tradicional se caracteriza por su rigidez. Consiste en #[em hardware] físico, como servidores montados en #[em racks], matrices de almacenamiento (SAN/NAS) y equipos de red (#[em switches], #[em routers]) alojados en las instalaciones de la empresa. La gestión de esta infraestructura implica tareas operativas pesadas: control de temperatura y humedad, gestión de cableado, reemplazo de discos duros dañados, y actualizaciones manuales de #[em firmware]. Además, la escalabilidad es vertical y limitada; si un servidor se queda sin memoria RAM, es necesario apagar el equipo, abrir el chasis e instalar nuevos módulos físicos, siempre y cuando la placa base lo soporte.
    
    p.mb-4 Por el contrario, la infraestructura en la nube está definida por #[em software (software - defined infrastructure)]. Los proveedores de nube (como Amazon Web Services, Microsoft Azure o Google Cloud Platform) gestionan inmensos centros de datos a nivel global y exponen estos recursos a los usuarios mediante paneles de control web o Interfaces de Programación de Aplicaciones (APIs). La escalabilidad en la nube es predominantemente horizontal (añadir más instancias de servidores virtuales en paralelo) y puede automatizarse por completo. Así, la responsabilidad del mantenimiento físico recae enteramente en el proveedor, permitiendo a los equipos de tecnología de la organización enfocarse en el desarrollo de #[em software], la innovación de servicios y la optimización de procesos, en lugar de dedicar horas a la gestión de #[em hardware.]

    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1.
        span Infraestructura tradicional vs. infraestructura #[em cloud]
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Variable
              th Infraestructura tradicional #[em (on-premise)]
              th Infraestructura #[em cloud] (nube)
          tbody
            tr
              td.fw-bold Inversión inicial
              td #[b Alta (CAPEX):] requiere un desembolso de capital significativo antes de comenzar las operaciones. Incluye la compra de servidores, almacenamiento, #[em switches], licencias de #[em software] a perpetuidad, adecuación del espacio físico y sistemas de energía ininterrumpida (UPS).
              td #[b Baja o nula (OPEX):] se adopta un modelo de gastos operativos basado en el pago por uso o suscripciones mensuales/anuales. No hay necesidad de adquirir #[em hardware] físico inicial, lo que reduce drásticamente la barrera de entrada financiera.
            tr
              td.fw-bold Escalabilidad
              td #[b Lenta y rígida:] incrementar la capacidad (cómputo o almacenamiento) requiere un proceso de aprovisionamiento físico que incluye cotización, compra, envío, instalación y configuración, lo cual puede tardar semanas o meses. Suele generar capacidad ociosa no utilizada.
              td #[b Inmediata y elástica:] permite el escalado vertical (más recursos) u horizontal (más instancias) de forma automatizada (#[em auto-scaling]) o con unos pocos clics en minutos. Los recursos se adaptan dinámicamente a la demanda real y se pueden reducir cuando ya no se necesitan.
            tr
              td.fw-bold Mantenimiento
              td #[b Responsabilidad interna total:] el departamento de TI de la organización debe gestionar directamente el ciclo de vida del #[em hardware], la sustitución de piezas defectuosas, la actualización de #[em firmware], la aplicación de parches del sistema operativo base y la gestión ambiental del entorno.
              td #[b Responsabilidad compartida / del proveedor:] el proveedor de servicios en la nube se encarga por completo del mantenimiento correctivo y preventivo del #[em hardware] físico, la infraestructura de red subyacente, la refrigeración y la actualización de los hipervisores.
            tr
              td.fw-bold Tiempo de despliegue
              td #[b Prolongado:] poner en marcha un nuevo servicio o entorno completo requiere pasar por todas las fases de adquisición de infraestructura física, cableado e instalación de #[em software], ralentizando el tiempo de comercialización #[em (time-to-market)].
              td #[b Prácticamente instantáneo:] el aprovisionamiento de servidores virtuales, bases de datos o soluciones complejas se realiza en cuestión de minutos o segundos a través de consolas web o mediante infraestructura como código (IaC).
            tr
              td.fw-bold Seguridad física
              td #[b A cargo de la organización:] la protección perimetral del centro de datos (control de acceso físico, guardias, cámaras de seguridad, sistemas de supresión de incendios y redundancia eléctrica local) depende exclusivamente del presupuesto y las políticas internas.
              td #[b Nivel industrial y certificado:] los centros de datos de los grandes proveedores cuentan con seguridad perimetral estricta (controles biométricos, vigilancia 24/7), redundancia extrema ante desastres naturales y múltiples certificaciones globales de cumplimiento (como ISO 27001, SOC 1/2/3, PCI-DSS).
      
          


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
