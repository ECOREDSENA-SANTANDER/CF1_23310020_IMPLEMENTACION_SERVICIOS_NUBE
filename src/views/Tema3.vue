<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Migración e implementación inicial de servicios
    
    .mb-4
      img(src='@/assets/curso/temas/t3/1.png', alt='')
    
    p Una vez definidos los modelos de arquitectura y comprendidos los requisitos técnicos de la infraestructura, el ciclo de vida de la adopción tecnológica avanza hacia la planificación y ejecución de la migración. Este apartado se centra en dotar al aprendiz de las herramientas conceptuales y metodológicas necesarias para trasladar servicios desde centros de datos tradicionales hacia la nube, minimizando riesgos y asegurando la continuidad operativa.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Análisis de necesidades y requerimientos no funcionales  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        p La arquitectura de una solución tecnológica no se sustenta únicamente en sus funcionalidades directas (lo que el sistema hace), sino que depende críticamente de sus requerimientos no funcionales (cómo el sistema se comporta). En el contexto del #[em cloud computing], el análisis de estos requerimientos es indispensable para configurar los servicios iniciales en la nube de acuerdo con las expectativas de la organización; los requerimientos no funcionales más críticos incluyen la disponibilidad, la escalabilidad, el rendimiento, la seguridad y la tolerancia a fallos.
        .bg-color-2.p-4.mb-0
          p.mb-0 La disponibilidad, por ejemplo, define el tiempo que un servicio debe permanecer operativo y accesible; en un entorno educativo virtual, un requerimiento no funcional puede estipular que la plataforma de evaluación debe tener un 99.99 % de disponibilidad durante la temporada de exámenes finales. Para cumplir con este indicador, el arquitecto de nube no puede depender de un solo servidor virtual; debe diseñar una arquitectura redundante, desplegando instancias en múltiples zonas de disponibilidad (centros de datos físicamente separados) y configurando un balanceador de cargas que distribuya el tráfico de los aprendices. Este análisis previene interrupciones catastróficas y garantiza una experiencia de usuario óptima. 
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t3/2.png', alt='')

    p Asimismo, la escalabilidad y el rendimiento imponen la necesidad de configurar reglas automáticas de autoescalamiento (#[em auto - scaling]) frente a picos de tráfico. Si el análisis de necesidades determina que una aplicación comercial experimentará fluctuaciones masivas de usuarios, la implementación inicial debe contemplar umbrales (por ejemplo, si el uso de la CPU supera el 75 % durante cinco minutos, se debe crear automáticamente una nueva máquina virtual). De este modo, la tecnología se convierte en un habilitador del negocio, alineando las decisiones de configuración en la nube con las metas estratégicas y los factores de cambio comercial previamente abordados.
    
    p.mb-4 Explore la siguiente infografía para identificar qué hace un sistema, cómo debe comportarse y cómo la nube facilita el cumplimiento de estos requisitos: 

    .mb-0(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 4.
        span Requerimientos funcionales vs. no funcionales en la nube
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Requerimientos funcionales 
              th Requerimientos no funcionales
          tbody
            tr
              td 
                h5.mb-2 ¿Qué hace el sistema? 
                p Describe las funciones, características y comportamientos específicos que el software debe realizar para los usuarios. 
                h5.mb-2 Registro de usuarios 
                p (Ej. Crear cuentas, iniciar sesión, gestionar perfiles) 
                h5.mb-2 Pasarela de pago 
                p (Ej. Procesar transacciones financieras seguras con Stripe/PayPal) 
                h5.mb-2 Gestión de inventario 
                p (Ej. Rastrear productos, #[em stock], pedidos) 
                h5.mb-2 Informes y análisis 
                p (Ej. Generar reportes de ventas, métricas) 
                h5.mb-2 Enfoque:  
                p.mb-0 Lógica de negocio, código del #[em software].
              td 
                h5.mb-2 ¿Cómo se comporta el sistema? 
                p Especifica criterios de operación, propiedades de calidad y restricciones de rendimiento que el sistema debe cumplir. 
                h5.mb-2 Rendimiento y velocidad 
                p (Ej. Latencia baja < 200 ms, alto rendimiento) 
                h5.mb-2 Seguridad y privacidad 
                p (Ej. Cifrado de datos en reposo y tránsito, cortafuegos) 
                h5.mb-2 Disponibilidad y confiabilidad 
                p (Ej. Operativo 99.99 % del tiempo, alta disponibilidad) 
                h5.mb-2 Escalabilidad y elasticidad 
                p (Ej. Manejar aumentos rápidos de tráfico en minutos) 
                h5.mb-1 Solución en la nube 
                h5.mb-2 (mediante servicios administrados) 
                p El proveedor de la nube gestiona la infraestructura para cumplir con los requerimientos no funcionales.   
    

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Diferencia de elementos y procedimientos operativos en la nube
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t3/4.png', alt='')
      .col-lg-6(data-aos='fade-left')
        p La computación en la nube ha transformado la manera en que las organizaciones administran su infraestructura tecnológica; mientras que en los entornos tradicionales era necesario adquirir servidores físicos, instalarlos y configurarlos manualmente, en la nube estos procesos se realizan de forma virtual y automatizada.
        p En la infraestructura tradicional se administran equipos físicos, mientras que en la nube se gestionan recursos virtuales mediante herramientas de automatización, lo que permite mayor rapidez, flexibilidad y eficiencia operativa. 
        
    .row.align-items-end
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Comparación entre la infraestructura tradicional y la infraestructura en la nube
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Entorno tradicional
                th Entorno en la nube
            tbody
              tr
                td Comprar un servidor físico.
                td Crear una máquina virtual.
              tr
                td Instalación manual.
                td Aprovisionamiento automático.
              tr
                td Configuración presencial.
                td Configuración remota.
              tr
                td Escalamiento lento.
                td Escalamiento bajo demanda.
              tr
                td Seguridad física del centro de datos.
                td Seguridad basada en identidades y permisos.
              tr
                td Semanas para implementar.
                td Minutos para implementar.
      .col-lg-4.d-none.d-lg-block 
        img(src='@/assets/curso/temas/t3/5.png', alt='')

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Estrategias metodológicas para la migración de servicios
    
    p Cuando una organización decide trasladar sus aplicaciones a la nube, debe definir cuál es la mejor forma de realizar la migración. La elección dependerá del estado actual de la aplicación, del tiempo disponible, del presupuesto y de los beneficios que se esperan obtener.
    p.mb-4 De manera general, existen tres estrategias principales que permiten migrar servicios a la nube con diferentes niveles de transformación, las cuales se explican a continuación:
    
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta bg-color-3")
      .row(titulo="<em>Rehosting</em>  (mover sin modificar)")
        .col-11.col-lg-6
          p Esta estrategia consiste en trasladar la aplicación a la nube tal como funciona actualmente, sin realizar cambios importantes en su estructura o código. Es similar a cambiar una oficina de edificio sin modificar el mobiliario ni la forma de trabajar.
          p Su principal ventaja es la rapidez de implementación, por lo que suele utilizarse cuando se requiere una migración rápida y con bajo impacto operativo.	Ejemplo: mover un servidor web físico a una máquina virtual en la nube.
          p #[b Ejemplo:] mover un servidor web físico a una máquina virtual en la nube.
          img.w-75.d-none.d-lg-block(src='@/assets/curso/temas/t3/deco.png', alt='')
        .col-md-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')
      .row(titulo="<em>Replatforming</em>  (mover y optimizar)")
        .col-11.col-lg-6
          p En esta estrategia la aplicación mantiene su funcionamiento principal, pero se realizan algunos ajustes para aprovechar servicios ofrecidos por el proveedor de nube.
          p Esto permite mejorar el rendimiento, reducir tareas de administración y optimizar costos sin necesidad de rediseñar completamente la solución.
          p.mb-4 #[b Ejemplo:] reemplazar una base de datos instalada en un servidor propio por un servicio de base de datos administrado en la nube.
          img.w-75.d-none.d-lg-block(src='@/assets/curso/temas/t3/deco.png', alt='')
        .col-md-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/7.png', alt='')
      .row(titulo="<em>Refactoring</em> (rediseñar para la nube)")
        .col-11.col-lg-6
          p Es la estrategia de mayor transformación. Consiste en modificar o reconstruir la aplicación para aprovechar al máximo las capacidades de la nube, como el escalamiento automático, los microservicios y los servicios administrados.
          p Aunque requiere más tiempo y recursos, ofrece mayores beneficios en flexibilidad, disponibilidad y crecimiento futuro.
          p.mb-4 #[b Ejemplo:] transformar una aplicación tradicional en una arquitectura basada en microservicios.
          img.w-75.d-none.d-lg-block(src='@/assets/curso/temas/t3/deco.png', alt='')
        .col-md-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/8.png', alt='')

    p En términos prácticos, estas estrategias pueden entenderse como tres niveles de migración: mover, optimizar o rediseñar. La selección de una u otra dependerá de los objetivos de la organización y del nivel de modernización que se desee alcanzar.
    




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
