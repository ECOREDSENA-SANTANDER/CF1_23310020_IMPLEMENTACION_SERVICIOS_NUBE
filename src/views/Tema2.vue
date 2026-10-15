<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Arquitectura y modelos de servicio en la nube
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La arquitectura de la computación en la nube se estructura fundamentalmente a partir del nivel de abstracción tecnológica y la responsabilidad compartida entre el proveedor y el usuario, categorizándose en tres modelos de servicio esenciales para el diseño de soluciones digitales. En la base se encuentra la Infraestructura como Servicio (IaaS), que entrega el control directo sobre los recursos computacionales, de red y de almacenamiento, permitiendo al administrador tecnológico construir entornos virtualizados a la medida de los requerimientos organizacionales.
    
    .row.justify-content-center.tarj-t2.mb-5(data-aos='fade')
      .col-lg-3.col-md-3.col-5.mb-3.mb-lg-0
        .tarjeta.color-primario--borde.bg-color-10.text-center.p-4.h-100.d-flex.justify-content-center.flex-column
          h5.mb-0.py-lg-3 IaaS  
      .col-1.d-flex.justify-content-center.align-items-center
        .flecha        
      .col-lg-3.col-md-3.col-5.mb-3.mb-lg-0
        .tarjeta.color-secundario--borde.bg-color-2.text-center.p-4.h-100.d-flex.justify-content-center.flex-column
          h5.mb-0.py-lg-3 PaaS
      .col-1.d-flex.justify-content-center.align-items-center
        .flecha
      .col-lg-3.col-md-3.col-5.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido--borde.bg-color-11.text-center.p-4.h-100.d-flex.justify-content-center.flex-column
          h5.mb-0.py-lg-3 SaaS

    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Modelos de servicio de computación en la nube
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Sigla
              th Término en inglés
              th Traducción al español
          tbody
            tr
              td.fw-bold IaaS
              td #[em Infrastructure as a Service].
              td Infraestructura como servicio.
            tr
              td.fw-bold PaaS
              td #[em Platform as a Service].
              td Plataforma como servicio.
            tr
              td.fw-bold SaaS
              td #[em Software as a Service].
              td #[em Software] como servicio.
    
    .row.mb-4
      .col-lg-12
        .cajon.color-secundario.bg-color-2.p-4
          p.mb-0.text-center A medida que se avanza de IaaS a SaaS, disminuye la responsabilidad del usuario y aumenta la gestión realizada por el proveedor del servicio.
    
    p.mb-4 Los modelos de despliegue en la nube determinan dónde se alojan los recursos y cómo se administran. La nube pública ofrece escalabilidad y economía, la nube privada brinda mayor control y seguridad, y la nube híbrida combina ambos entornos para lograr flexibilidad y eficiencia.

    .mb-0(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 1.
        span Modelos de despliegue en la nube
      figure
        img(src='@/assets/curso/temas/t2/fig1.png', alt='Diagrama de los modelos de despliegue en la nube: nube pública, nube privada y nube híbrida, organizados de forma progresiva según el nivel de control, seguridad y flexibilidad de la infraestructura.')
    

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Tipos de servicios: infraestructura (IaaS), plataforma (PaaS) y #[em software] (SaaS) 
    
    p El entendimiento de la computación en la nube requiere la clasificación de sus servicios en tres modelos fundamentales, conocidos habitualmente como la pirámide del #[em cloud computing]. Los modelos definen el nivel de abstracción y el grado de responsabilidad que asume el proveedor de la nube en contraposición con el usuario o cliente; es esencial que domine esta categorización para analizar servicios y funciones en la nube con precisión.

    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Figura 2.
        span Modelos de servicio de computación en la nube
      figure
        img(src='@/assets/curso/temas/t2/3.svg', alt='Representación jerárquica de los modelos de servicio en la nube, organizados desde la infraestructura (IaaS), pasando por la plataforma de desarrollo (PaaS), hasta las aplicaciones listas para el usuario final (SaaS).')
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Ejemplo aplicado: #[br]
        p.mb-0 Un equipo de desarrollo de #[em software] necesita un entorno con características específicas del sistema operativo Linux para ejecutar simulaciones de datos. Utilizan un servicio IaaS (como AWS EC2 o Azure Virtual Machines) para desplegar un servidor virtual. Ellos son responsables de instalar las actualizaciones de seguridad de Linux, configurar las bases de datos y desplegar su código.
    
    p En el nivel intermedio se sitúa la plataforma como servicio #[em (PaaS - Platform as a Service)]. Este modelo está diseñado principalmente para desarrolladores de #[em software]. En el PaaS, el proveedor gestiona toda la infraestructura subyacente (servidores, redes, almacenamiento) y también el sistema operativo, el #[em middleware] y los entornos de ejecución (como Node.js, Python, Java o PHP). El usuario se libera de las tareas de administración de sistemas y se enfoca exclusivamente en la creación, despliegue y gestión de sus aplicaciones.

    .bloque-texto-g.bg-color-5.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Ejemplo aplicado: #[br]
        p.mb-0 Un estudiante de programación crea una aplicación web interactiva para registrar la asistencia de los aprendices. En lugar de configurar un servidor desde cero, sube su código fuente a una plataforma PaaS (como Heroku o Google App Engine). La plataforma se encarga automáticamente de compilar el código, asignar los recursos de servidor necesarios y hacer que la aplicación esté disponible en internet mediante una URL.

    p En la cima de la pirámide se encuentra el #[em software] como servicio (SaaS - #[em Software as a Service)]. Este es el modelo de mayor abstracción y el más familiar para el usuario final. En el SaaS, el proveedor aloja, gestiona y mantiene tanto la infraestructura como la aplicación de #[em software] en su totalidad. El usuario simplemente consume la aplicación a través de un navegador web o una interfaz de cliente, sin necesidad de instalar o mantener #[em software] localmente.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-6.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Ejemplo aplicado: #[br]
        p.mb-0 Los servicios de correo electrónico institucional, las #[em suites] de ofimática en línea (como Microsoft 365 o Google Workspace) y los sistemas de gestión de aprendizaje (como Blackboard o Moodle alojados por el proveedor) son ejemplos clásicos de SaaS. La institución educativa no administra los servidores de correo ni actualiza el #[em software] antivirus del servidor; simplemente paga una suscripción por usuario activo.
    

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Modelos de despliegue: nube pública, privada e infraestructuras híbridas (#[em on-premises] - nube)
    
    img.mb-4(src='@/assets/curso/temas/t2/7.png', alt='')

    p.mb-5 Además de elegir el tipo de servicio, las organizaciones deben determinar dónde se ubicarán sus recursos y quién tendrá acceso a la infraestructura subyacente. La decisión se enmarca en los modelos de despliegue de la nube, los cuales deben seleccionarse con base en las políticas de seguridad, el presupuesto y los requerimientos regulatorios de la entidad.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white La nube pública es el modelo más común
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/8.png', alt='')
      .col-lg-6(data-aos='fade-left')
        p.mb-0 En este esquema, los recursos computacionales (servidores, almacenamiento) son propiedad de un proveedor de servicios externo (como Amazon, Microsoft o Google) y son operados por este. Estos recursos se ofrecen a múltiples clientes a través de internet. La característica principal de la nube pública es la arquitectura multiinquilino #[em (multi-tenant)], donde diferentes organizaciones comparten el mismo #[em hardware] físico subyacente, aunque sus datos y aplicaciones están lógicamente aislados y asegurados de manera estricta. Sus principales ventajas son el bajo costo, la escalabilidad casi ilimitada y la nula necesidad de mantenimiento físico.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white La nube privada consiste en recursos informáticos 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos='fade-right')
        p.mb-0 Estos recursos en la nube son utilizados exclusivamente por una sola organización (modelo de inquilino único o #[em single-tenant]). La nube puede estar ubicada físicamente en el centro de datos local de la empresa (#[em on-premises]) o ser alojada por un proveedor de servicios externo, pero operando en una red privada dedicada. Asi mismo, la nube privada ofrece un grado significativamente mayor de control, personalización y seguridad, lo que la convierte en la opción predilecta para entidades gubernamentales, instituciones financieras o clínicas de salud que manejan datos altamente sensibles y están sujetas a estrictas normativas de cumplimiento. Sin embargo, requiere una inversión considerable y personal especializado para su administración. 
      .col-lg-6.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t2/9.png', alt='')
      
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.ms-3.me-5.text-white Las infraestructuras híbridas, que combinan entornos #[em on-premises] (o nubes privadas) con nubes públicas
    
    .row.justify-content-center.align-items-center
      .col-lg-6.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-6(data-aos='fade-left')
        p.mb-0 Representan el modelo de despliegue más adoptado por las grandes corporaciones en la actualidad; una nube híbrida permite que los datos y las aplicaciones se muevan fluidamente entre los dos entornos gracias a la orquestación tecnológica. El modelo ofrece lo mejor de ambos mundos: la organización puede mantener su información más crítica y confidencial en su infraestructura #[em on-premises], mientras utiliza la escalabilidad masiva y rentable de la nube pública para ejecutar aplicaciones menos sensibles o para manejar picos de demanda inesperados (un proceso conocido como #[em cloud bursting]).
    

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Identificación de requisitos de #[em hardware] y #[em software] en entornos virtualizados
    
    .row.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t2/11.png', alt='')
      .col-lg-7(data-aos='fade-left')
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/12.svg', alt='')
          .col-lg-10
            p Antes de implementar un servicio en la nube, es necesario determinar qué recursos tecnológicos requiere la solución para funcionar correctamente. El análisis permite seleccionar únicamente los recursos necesarios, evitando tanto problemas de rendimiento como gastos innecesarios.
        p En los entornos tradicionales, las organizaciones debían comprar servidores físicos pensando en las necesidades futuras, lo que con frecuencia generaba equipos sobredimensionados y poco aprovechados. En la computación en la nube ocurre lo contrario: los recursos se asignan según las necesidades reales del momento y pueden aumentarse o reducirse cuando sea necesario. Este principio se conoce como #[b dimensionamiento correcto #[em (rightsizing)].]

    p Para identificar los requisitos de #[em hardware], se deben analizar aspectos como:
    ul.lista-ul.mb-4
      li.mb-1 
        i.lista-ul__vineta
        span.mb-0 Procesamiento (vCPU): determina la capacidad de cálculo necesaria para ejecutar aplicaciones y procesos. 
      li.mb-1 
        i.lista-ul__vineta
        span.mb-0 Memoria RAM: permite que los programas funcionen de manera fluida y eficiente. 
      li.mb-1 
        i.lista-ul__vineta
        span.mb-0 Almacenamiento: define el espacio requerido para guardar información y aplicaciones. 
      li 
        i.lista-ul__vineta
        span.mb-0 Rendimiento del almacenamiento (IOPS): mide la velocidad con la que se leen y escriben datos. 
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-7.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Por ejemplo, una plataforma de videoconferencias o simulación requiere una mayor capacidad de procesamiento, mientras que una base de datos necesita más memoria y un almacenamiento de alto rendimiento.#[br] #[br]
        p De igual manera, es necesario identificar los requisitos de #[em software], entre ellos: #[br]
        ul.lista-ul
          li 
            i.lista-ul__vineta
            span.mb-0 Sistema operativo (Linux o Windows Server). #[br]
          li 
            i.lista-ul__vineta
            span.mb-0 Aplicaciones y herramientas requeridas por la organización. #[br]
          li 
            i.lista-ul__vineta
            span.mb-0 #[em Frameworks] y componentes de desarrollo. #[br]
          li 
            i.lista-ul__vineta
            span.mb-0 #[em Middleware] y servicios de integración. #[br]
          li 
            i.lista-ul__vineta
            span.mb-0 Licencias de uso del #[em software]. 

    p En la nube, las licencias pueden adquirirse bajo el modelo de pago por uso o mediante la modalidad #[b BYOL (#[em Bring Your Own License])], que permite utilizar licencias previamente adquiridas por la organización.
    p.mb-4 Realizar este análisis antes del despliegue de los servicios garantiza que la infraestructura virtual responda adecuadamente a las necesidades del negocio, optimizando el rendimiento, la disponibilidad y los costos operativos.
    
    
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span ¿Qué necesita la aplicación para funcionar?
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Requisito
                th Pregunta que debe responder
            tbody
              tr
                td Procesamiento (vCPU)
                td ¿Cuántas tareas realizará al mismo tiempo?
              tr
                td Memoria RAM
                td ¿Cuánta información necesita mantener activa?
              tr
                td Almacenamiento
                td ¿Cuántos datos debe guardar?
              tr
                td Rendimiento (IOPS)
                td ¿Con qué rapidez debe acceder a los datos?
              tr
                td Sistema operativo
                td ¿Funcionará con Linux o Windows?
              tr
                td #[em Software] adicional
                td ¿Qué programas, bases de datos o herramientas requiere?
              tr
                td Licenciamiento
                td ¿Se utilizarán licencias nuevas o existentes?
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t2/14.png', alt='')

              


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
