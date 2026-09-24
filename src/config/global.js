export default {
  global: {
    Name: 'Fundamentos de infraestructura y almacenamiento en la nube',
    Description:
      'El componente Fundamentos de infraestructura y almacenamiento en la nube desarrolla habilidades técnicas para analizar, desplegar y administrar infraestructuras tecnológicas en entornos virtualizados desde una perspectiva estratégica y de resolución de problemas. Promueve la configuración eficiente de recursos, la gestión segura del almacenamiento de datos y la construcción de soluciones escalables alineadas con los requerimientos técnicos y las necesidades operativas de la organización.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          '<em>Cloud computing</em> como base de la transformación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y evolución del <em>cloud computing</em>',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Análisis de posibilidades actuales y factor de cambio comercial',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Infraestructura tecnológica tradicional frente a la nube',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Arquitectura y modelos de servicio en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Tipos de servicios: infraestructura (IaaS), plataforma (PaaS) y software (SaaS)',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Modelos de despliegue: nube pública, privada e infraestructuras híbridas (<em>on-premises</em> - nube)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Identificación de requisitos de <em>hardware</em> y <em>software</em> en entornos virtualizados',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Migración e implementación inicial de servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de necesidades y requerimientos no funcionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Diferencia de elementos y procedimientos operativos en la nube',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estrategias metodológicas para la migración de servicios',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Infraestructura de almacenamiento en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Modelos de almacenamiento estructurados y no estructurados',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Tipos y aplicación de servicios de almacenamiento gestionado',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gestión de bases de datos y seguridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Administración de bases de datos en entornos <em>cloud</em>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Seguridad de los datos y estrategias de respaldo (<em>backups</em>)',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Configuración inicial, escalabilidad y monitoreo continuo',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alta disponibilidad (<em>high availability</em>)',
      significado:
        'característica de una infraestructura tecnológica que garantiza un funcionamiento continuo y sin interrupciones durante un periodo prolongado, generalmente mitigando la existencia de puntos únicos de fallo.',
    },
    {
      termino: 'Autoescalamiento (<em>auto-scaling</em>)',
      significado:
        'servicio de computación en la nube que ajusta dinámicamente, y de forma automatizada, la cantidad de recursos computacionales asignados en función de las fluctuaciones en la demanda de los usuarios.',
    },
    {
      termino: '<em>Cloud computing</em> (computación en la nube)',
      significado:
        'modelo de entrega de recursos de tecnología de la información a través de internet, basado en un esquema de pago por uso, que incluye almacenamiento, procesamiento y bases de datos.',
    },
    {
      termino: 'DBaaS (<em>Database as a Service</em>)',
      significado:
        'modelo de servicio en la nube donde el proveedor gestiona las tareas administrativas de una base de datos (como actualizaciones, copias de seguridad y parches), permitiendo al usuario enfocarse únicamente en el uso de los datos.',
    },
    {
      termino: 'IaaS (<em>Infrastructure as a Service</em>)',
      significado:
        'modelo de servicio que proporciona recursos informáticos virtualizados a través de internet, como máquinas virtuales, almacenamiento y redes, otorgando al cliente el control sobre el sistema operativo.',
    },
    {
      termino: 'IOPS (<em>Input/Output Operations Per Second</em>)',
      significado:
        'métrica de rendimiento utilizada para medir la velocidad de los dispositivos de almacenamiento, indicando cuántas operaciones de lectura y escritura puede realizar un disco en un segundo.',
    },
    {
      termino: 'Latencia',
      significado:
        'el tiempo de retardo que transcurre desde que un sistema envía una solicitud de datos hasta que recibe la respuesta. En arquitecturas <em>cloud</em>, se busca que la latencia sea lo más baja posible (milisegundos).',
    },
    {
      termino: 'Modelo de responsabilidad compartida',
      significado:
        'marco de seguridad en la computación en la nube que dicta qué aspectos de la seguridad operativa son responsabilidad del proveedor (la infraestructura física) y cuáles corresponden al cliente (los datos y accesos).',
    },
    {
      termino: 'Nube híbrida',
      significado:
        'entorno de computación que combina una nube pública y una nube privada, permitiendo que los datos y las aplicaciones se compartan entre ellas para lograr mayor flexibilidad.',
    },
    {
      termino: 'Nube privada',
      significado:
        'modelo de despliegue donde los servicios y la infraestructura de la nube se mantienen en una red privada y se utilizan exclusivamente para una única organización.',
    },
    {
      termino: 'Nube pública',
      significado:
        'arquitectura informática donde los recursos (servidores, almacenamiento) pertenecen a un proveedor externo y se ofrecen a múltiples organizaciones simultáneamente a través de internet.',
    },
    {
      termino: '<em>On-premises</em>',
      significado:
        'modelo tradicional de infraestructura donde los servidores, redes y almacenamiento se encuentran físicamente instalados y gestionados dentro de las instalaciones de la propia organización.',
    },
    {
      termino: 'PaaS (<em>Platform as a Service</em>)',
      significado:
        'modelo de servicio en la nube que proporciona a los desarrolladores un entorno completo (<em>hardware</em> y <em>software</em> subyacente) para crear, ejecutar y gestionar aplicaciones sin preocuparse por la infraestructura.',
    },
    {
      termino: '<em>Rehosting (lift and shift)</em>',
      significado:
        'estrategia de migración a la nube que consiste en trasladar una aplicación y sus datos desde un entorno físico hacia la nube sin modificar su arquitectura o código fuente.',
    },
    {
      termino: 'RPO (<em>Recovery Point Objective</em>)',
      significado:
        'métrica de continuidad del negocio que define la cantidad máxima de pérdida de datos que una organización está dispuesta a tolerar tras un incidente, medida en tiempo (ej. datos de la última hora).',
    },
    {
      termino: 'RTO (<em>Recovery Time Objective</em>)',
      significado:
        'métrica que establece el tiempo máximo de inactividad permitido desde que ocurre un fallo en el sistema hasta que el servicio debe estar restaurado y operativo nuevamente.',
    },
    {
      termino: 'SaaS (<em>Software as a Service</em>)',
      significado:
        'modelo de servicio donde el proveedor aloja y mantiene una aplicación de software y la infraestructura subyacente, entregándola a los usuarios finales a través de un navegador web.',
    },
    {
      termino: '<em>Snapshot</em> (instantánea)',
      significado:
        'copia de seguridad del estado y los datos de una máquina virtual o un volumen de almacenamiento en un momento exacto y específico en el tiempo.',
    },
    {
      termino: 'VPC (<em>Virtual Private Cloud</em>)',
      significado:
        'red virtual segura y aislada lógicamente dentro de una nube pública, donde las organizaciones pueden desplegar recursos controlando su propio entorno de red, como direcciones IP y <em>firewalls</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amazon Web Services. (2023). AWS Well-Architected Framework. AWS.',
      link: '',
    },
    {
      referencia:
        'Furht, B., & Escalante, A. (2010). Handbook of Cloud Computing. Springer.',
      link: '',
    },
    {
      referencia:
        'Google Cloud. (2023). Architecture Framework. Google Cloud Architecture Center.',
      link: '',
    },
    {
      referencia:
        'Marinescu, D. C. (2022). Cloud Computing: Theory and Practice (3a ed.). Morgan Kaufmann.',
      link: '',
    },
    {
      referencia: 'Microsoft. (2023). Azure Fundamentals. Microsoft Learn.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (2023). Cloud adoption framework for Azure. Microsoft Learn.',
      link: '',
    },
    {
      referencia:
        'Erl, T., Puttini, R. & Mahmood, Z. (2013). Cloud Computing: Concepts, Technology & Architecture. Pearson.',
      link: '',
    },
    {
      referencia:
        'Wheeler, A., & Winburn, M., (2015). Cloud Storage Security: A Practical Guide (Computer Science Reviews and Trends). Elsevier.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto temático TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
