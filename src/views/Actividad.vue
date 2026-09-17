<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de infraestructura y almacenamiento en la nube',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los fundamentos del <em>Cloud Computing</em>, los modelos de servicio y despliegue, la migración de servicios, la infraestructura de almacenamiento, la administración de bases de datos, la seguridad de la información, los respaldos y el monitoreo continuo en entornos de nube.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cómo se define la computación en la nube o <em>cloud computing</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Como un modelo que permite acceder bajo demanda a recursos informáticos configurables a través de internet.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Como una técnica exclusiva para reparar servidores físicos dañados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Como un sistema que solo permite almacenar archivos en memorias externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como una red local sin conexión a servicios externos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con la definición de <em>cloud computing</em> y su función en la entrega de recursos tecnológicos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el concepto y evolución del <em>cloud computing</em>.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el propósito principal de implementar servicios de almacenamiento en la nube dentro de una organización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar los mecanismos de seguridad de la información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proporcionar recursos de almacenamiento escalables, disponibles y gestionados según las necesidades organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de administrar los datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limitar el acceso a los recursos tecnológicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los propósitos formativos relacionados con el uso inicial de servicios <em>cloud</em> y almacenamiento gestionado.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente la introducción del componente formativo y los resultados de aprendizaje asociados.',
        },
        {
          id: 3,
          texto:
            '¿Qué cambio económico caracteriza la adopción de servicios en la nube?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El aumento obligatorio de gastos en centros de datos locales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La obligación de comprar todos los servidores antes de iniciar operaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación total de los costos operativos de una organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El paso de un modelo de inversión inicial alta a un esquema de pago por uso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con el cambio de CAPEX a OPEX y el modelo de pago por uso en la nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con el factor de cambio comercial del <em>cloud computing</em>.',
        },
        {
          id: 4,
          texto:
            '¿Qué característica diferencia principalmente la infraestructura tradicional de la infraestructura en la nube?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La infraestructura tradicional siempre escala automáticamente en segundos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La nube exige reemplazar manualmente discos duros y cableado de red.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La infraestructura en la nube permite aprovisionamiento rápido, elasticidad y menor dependencia del <em>hardware</em> físico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La infraestructura tradicional no requiere mantenimiento ni personal técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de las diferencias entre infraestructura <em>on-premises</em> e infraestructura <em>cloud</em>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con la comparación entre infraestructura tradicional y nube.',
        },
        {
          id: 5,
          texto:
            '¿Qué representa el modelo de infraestructura como servicio o IaaS?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicaciones listas para usar desde un navegador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recursos virtualizados como máquinas virtuales, redes y almacenamiento, con control del sistema operativo por parte del usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un servicio que solo permite enviar correos electrónicos institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una herramienta exclusiva para diseñar páginas web sin servidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con IaaS y el control que ofrece sobre recursos virtualizados.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con los modelos de servicio en la nube.',
        },
        {
          id: 6,
          texto:
            '¿Qué caracteriza al modelo de plataforma como servicio o PaaS?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El proveedor gestiona la infraestructura y el entorno de ejecución para que el usuario se enfoque en desarrollar aplicaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El usuario debe instalar físicamente servidores, redes y sistemas de refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo permite almacenar videos y documentos sin ejecutar aplicaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Obliga a administrar manualmente todos los componentes de <em>hardware</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con PaaS como entorno administrado para desarrollo y despliegue de aplicaciones.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con la plataforma como servicio y su diferencia frente a IaaS y SaaS.',
        },
        {
          id: 7,
          texto:
            '¿Qué describe mejor el modelo de <em>software</em> como servicio o SaaS?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un servicio limitado exclusivamente al aprovisionamiento de discos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un modelo donde el usuario debe construir el centro de datos físico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un modelo donde el usuario consume aplicaciones listas para usar a través de internet.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una estrategia para apagar todos los servicios <em>cloud</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con SaaS como modelo de mayor abstracción para el usuario final.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con los modelos de servicio en la nube.',
        },
        {
          id: 8,
          texto:
            '¿Qué caracteriza a la nube pública?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los recursos solo pueden ser usados por una única organización dentro de su sede física.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La infraestructura es compartida entre múltiples clientes, con datos y aplicaciones aislados lógicamente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'No permite escalabilidad ni reducción de costos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requiere que cada cliente mantenga directamente el <em>hardware</em> físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con la nube pública y su arquitectura multiinquilino.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con los modelos de despliegue de la nube.',
        },
        {
          id: 9,
          texto:
            '¿En qué caso resulta más pertinente una nube privada?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando se requiere un entorno dedicado para una organización con alto control, seguridad y cumplimiento normativo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuando se busca compartir libremente todos los datos con cualquier usuario externo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuando no existen requerimientos de seguridad ni políticas institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando se necesita eliminar por completo la administración tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con la nube privada y su uso en organizaciones con datos sensibles.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con los modelos de despliegue y sus criterios de selección.',
        },
        {
          id: 10,
          texto:
            '¿Qué permite una infraestructura híbrida?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impedir la migración gradual de servicios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar toda conexión entre sistemas locales y servicios <em>cloud</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar exclusivamente servidores físicos sin virtualización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Combinar entornos <em>on-premises</em> o privados con servicios de nube pública.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con infraestructuras híbridas e integración entre entornos locales y nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con nube pública, privada e infraestructuras híbridas.',
        },
        {
          id: 11,
          texto:
            '¿Qué objetivo tiene la estrategia de <em>rightsizing</em> en la administración de recursos en la nube?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar los recursos necesarios según la demanda real para optimizar el rendimiento y los costos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar permanentemente la capacidad de todos los servicios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desactivar la escalabilidad automática de la infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar configuraciones idénticas para todas las cargas de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con el dimensionamiento correcto de recursos en la nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con la identificación de requisitos de <em>hardware</em> y <em>software</em> en entornos virtualizados.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes elementos corresponde a un requerimiento no funcional en la nube?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nombre comercial de la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La disponibilidad, escalabilidad, rendimiento, seguridad o tolerancia a fallos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El color del logotipo institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de páginas de un manual impreso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con los requerimientos no funcionales en arquitecturas <em>cloud</em>.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con análisis de necesidades y requerimientos no funcionales.',
        },
        {
          id: 13,
          texto:
            '¿Qué caracteriza el enfoque de infraestructura como código (IaC) en entornos de nube?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La definición y aprovisionamiento automatizado de infraestructura mediante archivos de configuración o código.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La instalación manual de componentes físicos en centros de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La documentación impresa de procedimientos técnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación de los procesos de configuración de infraestructura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con IaC y la automatización de procedimientos operativos en la nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con la diferencia de elementos y procedimientos operativos en la nube.',
        },
        {
          id: 14,
          texto:
            '¿Qué principio debe aplicarse en la gestión de identidades y accesos IAM?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Otorgar permisos ilimitados a todos los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar el privilegio mínimo, asignando solo los permisos necesarios para cada función.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Compartir una única cuenta administrativa entre todos los equipos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las políticas de acceso para facilitar la operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con IAM, privilegio mínimo y gobernanza segura en la nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con gestión de identidades y accesos en entornos <em>cloud</em>.',
        },
        {
          id: 15,
          texto:
            '¿Qué caracteriza a la estrategia de migración <em>rehosting</em> o <em>lift and shift</em>?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar únicamente el diseño visual de la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reescribir por completo la aplicación usando microservicios nativos de la nube.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar todos los datos antes de realizar la migración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mover una aplicación y sus datos a una máquina virtual en la nube sin modificar el código fuente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con <em>rehosting</em> como estrategia rápida de migración hacia la nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con las estrategias metodológicas para la migración de servicios.',
        },
        {
          id: 16,
          texto:
            '¿Qué diferencia existe entre <em>replatforming</em> y <em>refactoring</em>?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Replatforming</em> realiza ajustes menores para aprovechar servicios <em>cloud</em>; <em>Refactoring</em> implica rediseñar profundamente la aplicación con principios nativos de nube.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Replatforming</em> elimina la aplicación y <em>refactoring</em> solo cambia el nombre del servidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambas estrategias impiden aprovechar servicios gestionados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Refactoring</em> consiste en copiar la aplicación sin ningún cambio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con las estrategias de migración y modernización de servicios.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con <em>rehosting</em>, <em>replatforming</em> y <em>refactoring</em>.',
        },
        {
          id: 17,
          texto:
            '¿Cuáles son algunos de los criterios más importantes para seleccionar un servicio de almacenamiento en la nube?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nombre del usuario que crea los recursos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diseño gráfico de la plataforma del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La capacidad requerida, la durabilidad, la latencia y las políticas de retención de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La cantidad de dispositivos de impresión disponibles en la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con el diagnóstico de necesidades de almacenamiento en la nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con la identificación de necesidades organizacionales de almacenamiento.',
        },
        {
          id: 18,
          texto:
            '¿Qué tipo de almacenamiento resulta más adecuado para datos no estructurados como imágenes, videos, respaldos y lagos de datos?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenamiento únicamente en tablas relacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenamiento exclusivo en memoria RAM.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Almacenamiento local en disquetes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenamiento de objetos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con almacenamiento de objetos y gestión de datos no estructurados.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con modelos de almacenamiento estructurados y no estructurados.',
        },
        {
          id: 19,
          texto:
            '¿Qué permite el modelo base de datos como servicio o DBaaS?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Obligar al usuario a reemplazar físicamente discos duros del centro de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delegar al proveedor tareas como aprovisionamiento, copias de seguridad, parches y configuración básica de la base de datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar por completo la necesidad de proteger la información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar bases de datos sin ningún criterio técnico de selección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con DBaaS y la administración de bases de datos gestionadas en la nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con administración de bases de datos en entornos <em>cloud</em>.',
        },
        {
          id: 20,
          texto:
            '¿Qué representan RPO y RTO dentro de una estrategia de respaldo?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Métricas para definir la pérdida máxima tolerable de datos y el tiempo máximo permitido para restaurar un servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Formatos gráficos usados para diseñar páginas web.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tipos de licencias para instalar sistemas operativos locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comandos para apagar servidores sin respaldo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Se evidencia un adecuado dominio de los conceptos relacionados con continuidad del negocio, respaldos y métricas de recuperación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos relacionados con seguridad de los datos y estrategias de respaldo en la nube.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre los fundamentos del <em>cloud computing</em>, los modelos de servicio y despliegue, la migración, el almacenamiento gestionado, la seguridad, los respaldos y el monitoreo continuo en la nube.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>