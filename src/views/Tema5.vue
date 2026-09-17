<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gestión de bases de datos y seguridad de la información
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos='fade')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La implementación de soluciones de almacenamiento en la nube no concluye con la selección del modelo de almacenamiento más adecuado; el verdadero aprovechamiento de estas tecnologías se alcanza cuando la información se organiza, administra y protege de manera eficiente, garantizando su disponibilidad, integridad y confidencialidad. La gestión de bases de datos como servicio gestionado se convierte en un componente fundamental para la construcción de infraestructuras de almacenamiento seguras y escalables. Por ello, es necesario comprender cómo las plataformas #[em cloud] permiten automatizar procesos de administración y fortalecer los mecanismos de seguridad que respaldan la información organizacional. 
    

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1  Administración de bases de datos en entornos #[em cloud]
    
    p.mb-4 En los entornos tecnológicos tradicionales, la administración de bases de datos (DBA, #[em Database Administrator]) requería una importante carga operativa. Los administradores debían encargarse de la instalación y configuración de los motores de bases de datos, la actualización de sistemas operativos, la aplicación de parches de seguridad, el aprovisionamiento de recursos de #[em hardware] y la implementación manual de mecanismos de respaldo y alta disponibilidad. Estas actividades demandaban tiempo, recursos especializados y una supervisión constante.

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-5.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La adopción de la computación en la nube transforma este modelo mediante el uso de las bases de datos como servicio (DBaaS, #[em Database as a Service]), una categoría especializada dentro del modelo PaaS (#[em Platform as a Service]). A través de este enfoque, el proveedor de servicios en la nube asume gran parte de las tareas administrativas y operativas, permitiendo que las organizaciones concentren sus esfuerzos en la gestión estratégica de la información.
    
    p.mb-4 Servicios gestionados como Amazon RDS (#[em Relational Database Service]), Azure SQL Database y Google Cloud SQL automatizan procesos como el aprovisionamiento de recursos, la configuración inicial, la realización de copias de seguridad, la recuperación ante fallos y la aplicación de actualizaciones de seguridad. Como resultado, el profesional encargado de la administración de datos puede enfocar su labor en actividades de mayor valor, tales como la optimización de consultas, el diseño del modelo de datos, el monitoreo del rendimiento y la alineación de la arquitectura de información con los objetivos del negocio.

    .bloque-texto-g.bg-color-7.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde una perspectiva formativa, resulta esencial comprender que la selección del motor de base de datos debe responder a las características y necesidades de cada caso de uso. Por ejemplo, en un sistema de información académica para una institución de educación superior, procesos como el registro de matrículas, la gestión de asignaturas y el almacenamiento de calificaciones requieren altos niveles de consistencia e integridad de los datos. En estos escenarios, las bases de datos relacionales gestionadas constituyen la alternativa más adecuada, debido a que garantizan el cumplimiento de las propiedades ACID (atomicidad, consistencia, aislamiento y durabilidad).

    p Por otra parte, cuando se requiere almacenar y analizar grandes volúmenes de información generados por plataformas digitales, como registros de navegación, interacciones en foros, clics o tiempos de permanencia en ambientes virtuales de aprendizaje, las bases de datos NoSQL gestionadas ofrecen mayores ventajas. Su capacidad para manejar datos estructurados, semiestructurados y no estructurados permite escalar de forma flexible y mantener un alto rendimiento, incluso frente a grandes cantidades de información y elevados niveles de concurrencia.


    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2  Seguridad de los datos y estrategias de respaldo (#[em backups])
    
    p.mb-4 La seguridad en la nube se fundamenta en el modelo de responsabilidad compartida, mediante el cual tanto el proveedor de servicios como la organización usuaria asumen funciones específicas para proteger la infraestructura y la información. La siguiente tabla resume las principales responsabilidades de cada actor.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 8.
        span Modelo de responsabilidad compartida en la nube
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Componente
              th Responsable
              th Ejemplos
          tbody
            tr
              td Seguridad física de los centros de datos.
              td Proveedor #[em cloud]
              td Vigilancia, control de acceso, energía y climatización.
            tr
              td Infraestructura de red y servidores.
              td Proveedor #[em cloud]
              td Redes, almacenamiento físico, hipervisores.
            tr
              td Sistema operativo (según el servicio contratado).
              td Usuario o proveedor
              td Actualizaciones y configuraciones.
            tr
              td Gestión de usuarios y permisos.
              td Usuario
              td Creación de cuentas, roles y accesos.
            tr
              td Configuración de #[em firewalls] y políticas de seguridad.
              td Usuario
              td Reglas de acceso a aplicaciones y bases de datos.
            tr
              td Cifrado de la información.
              td Usuario
              td Protección de datos en tránsito y en reposo.
            tr
              td Copias de seguridad y recuperación.
              td Usuario
              td Programación y verificación de respaldos.
    
    .mb-4
      img(src='@/assets/curso/temas/t5/4.png', alt='')
    p El proveedor protege la infraestructura tecnológica, mientras que la organización es responsable de proteger la información y controlar quién puede acceder a ella.
    p.mb-4 Asimismo, la protección de los datos debe contemplar diferentes escenarios de uso y almacenamiento. Dependiendo del estado en que se encuentre la información, se aplican mecanismos de seguridad específicos para garantizar su confidencialidad e integridad.

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 9.
        span Protección de datos en la nube
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th Estado del dato
              th ¿Cuándo ocurre?
              th Mecanismo de protección
          tbody
            tr
              td Datos en tránsito
              td Cuando la información viaja entre el usuario y la nube.
              td TLS/SSL
            tr
              td Datos en reposo
              td Cuando la información está almacenada en servidores #[em cloud].
              td AES-256
            tr
              td Claves de cifrado
              td Cuando se requiere controlar el acceso a la información.
              td KMS (#[em Key Management Service])

    p.mb-4 Además de proteger la información mediante mecanismos de cifrado, las organizaciones deben implementar estrategias de respaldo que permitan recuperar los datos y restablecer los servicios ante posibles incidentes. Para ello, se utilizan dos indicadores fundamentales que orientan los planes de continuidad del negocio.
        
    .row.align-items-end.mb-4
      .col-lg-8(data-aos='fade-right')
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 10.
          span Comprendiendo RPO y RTO
        .tabla-a.color-primario
          table
            thead
              tr
                th Concepto
                th Pregunta clave
                th Ejemplo
            tbody
              tr
                td RPO (#[em Recovery Point Objective])
                td ¿Cuántos datos puedo perder como máximo?
                td Si el respaldo se realiza cada hora, podrían perderse hasta 60 minutos de información.
              tr
                td RTO (#[em Recovery Time Objective])
                td ¿Cuánto tiempo puede estar fuera de servicio el sistema?
                td El sistema debe recuperarse en máximo 15 minutos después de una falla.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t5/5.png', alt='')

    p Estos indicadores permiten establecer cuánto dato puede perderse y cuánto tiempo puede permanecer inactivo un servicio sin afectar significativamente la operación de la organización, facilitando la definición de estrategias de recuperación acordes con las necesidades del negocio.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Ejemplo práctico: #[br]
        p.mb-0 Imagine una plataforma académica que almacena matrículas y calificaciones: #[br]
        ul.lista-ul.fa-lista.mb-0 
          li.mb-0 
            i.lista-ul__vineta
            span.mb-0 Se realiza un respaldo automático cada 30 minutos.  #[br]
          li.mb-0 
            i.lista-ul__vineta
            span.mb-0 Ocurre una falla a las 10:20 a. m.  #[br]
          li 
            i.lista-ul__vineta
            span.mb-0 El último respaldo fue a las 10:00 a. m.  #[br]
        p Resultado: #[br]
        ul.lista-ul.fa-lista.mb-0 
          li.mb-0 
            i.lista-ul__vineta
            span.mb-0 RPO = 30 minutos, porque podrían perderse los datos registrados entre las 10:00 y las 10:20. #[br]
          li.mb-0  
            i.lista-ul__vineta
            span.mb-0 RTO = 10 minutos, si la plataforma puede restaurarse completamente antes de las 10:30.  #[br]#[br]
        p De esta forma, el aprendiz comprende que la seguridad en la nube no consiste únicamente en almacenar información, sino también en protegerla, respaldarla y garantizar su recuperación cuando ocurre un incidente.
            
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.3 Configuración inicial, escalabilidad y monitoreo continuo
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos='fade-right')
        img(src='@/assets/curso/temas/t5/7.png', alt='')
      .col-lg-8(data-aos='fade-left')
        p El ciclo procedimental del almacenamiento en la nube culmina con el despliegue técnico, la preparación para el crecimiento y la vigilancia del sistema, por tanto, reconocer la configuración inicial y el monitoreo continuo es un criterio de evaluación central para validar la competencia del aprendiz. Una configuración inicial deficiente puede generar vulnerabilidades de seguridad inmediatas o sobrecostos significativos desde el primer día de operación.
        p La configuración inicial de un servicio de base de datos gestionada exige parametrizar elementos de red y accesos; el servidor no debe estar expuesto al internet público, en su lugar, debe desplegarse dentro de una subred privada en una nube virtual privada (VPC), configurando grupos de seguridad (#[em firewalls] a nivel de instancia) que únicamente permitan el tráfico entrante proveniente de los servidores de aplicaciones legítimos. Una vez asegurado el perímetro, se establecen los parámetros del motor de base de datos, ajustando la asignación de memoria y las zonas horarias.

    p A medida que la solución tecnológica es adoptada por los usuarios, la demanda sobre la base de datos fluctuará; es aquí donde la escalabilidad de la nube demuestra su valor. Para bases de datos relacionales, la escalabilidad suele ser vertical (#[em scale-up]), lo que implica detener brevemente la instancia para asignarle mayor poder de cómputo (vCPUs) o memoria RAM. Sin embargo, para no afectar la disponibilidad, la nube permite implementar estrategias de escalabilidad horizontal para lectura. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos='fade-right')
        p Mediante la creación de “réplicas de lectura” (#[em read replica]), el tráfico de consultas pesadas (como la generación de informes masivos al final de un periodo) se desvía hacia bases de datos secundarias, liberando a la base de datos principal para que continúe procesando transacciones de escritura sin latencia.
        p Finalmente, el monitoreo continuo es el proceso que garantiza la salud proactiva de la infraestructura. Los entornos #[em cloud] ofrecen herramientas nativas (como Amazon Cloud Watch o Azure Monitor) que recopilan métricas de rendimiento en tiempo real: utilización de CPU, memoria disponible, IOPS de lectura/escritura y conexiones activas. El administrador de la nube no debe limitarse a observar pasivamente estos indicadores; el procedimiento correcto implica configurar alarmas automatizadas. Si, por ejemplo, el espacio de almacenamiento disponible desciende del 15 %, el sistema de monitoreo debe enviar inmediatamente una notificación al equipo de TI o, en arquitecturas más avanzadas, ejecutar un #[em script] automático que incremente la capacidad del disco sin intervención humana.
      .col-lg-4.d-none.d-lg-block(data-aos='fade-left')
        img(src='@/assets/curso/temas/t5/8.png', alt='')


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
