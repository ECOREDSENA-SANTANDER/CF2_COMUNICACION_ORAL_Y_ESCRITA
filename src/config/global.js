export default {
  global: {
    Name: 'Argumentación',
    Description:
      'Desde esta perspectiva, el profesional está llamado a fortalecer su mirada crítica, a fundamentar sus ideas, a investigar sobre una proposición determinada y construir argumentos sólidos en torno a ella. No debe temer a las ideas contrarias, ya que, si sus argumentos se sustentan en tesis de especialistas, investigaciones citadas y en su propia experiencia que nutre su lógica y la exponen de manera clara, sin pretender imponer su razón ni personalizar las diferencias, el escenario de intervención será tanto constructivo como ético. Si además exponen sus argumentos con tranquilidad, credibilidad, seguridad y contundencia, orientados al aporte profesional o personal, experimentarán una profunda sensación de satisfacción.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'La argumentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Decodificación y estructura de mensajes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Pregunta, observación e interpretación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Argumentación y proposición',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Relación entre pensamiento y lenguaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lectura comprensiva e interpretativa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Pensar, organizar e interpretar el mundo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Comprender y argumentar',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipos de argumentación',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
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
  complementario: [
    {
      tema: 'La argumentación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. 2024. Normas para una buena argumentación.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HDFGXvSJ_vg',
    },
    {
      tema: 'La argumentación',
      referencia:
        'Weston, A., & Seña, J. F. M. (1994). Las claves de la argumentación. Barcelona: Ariel.',
      tipo: 'Libro',
      link:
        'https://www.bfa.fcnym.unlp.edu.ar/catalogo/doc_num.php?explnum_id=2314',
    },
  ],
  glosario: [
    {
      termino: 'Argumentación',
      significado:
        'proceso comunicativo mediante el cual se expresan razones para defender o refutar una idea.',
    },
    {
      termino: 'Argumento',
      significado:
        'razón o conjunto de razones que apoyan o refutan una tesis.',
    },
    {
      termino: 'Audiencia',
      significado:
        'receptor o grupo de receptores a los que va dirigida una argumentación.',
    },
    {
      termino: 'Conclusión',
      significado:
        'idea que se deduce a partir de las premisas y argumentos presentados.',
    },
    {
      termino: 'Contraargumento',
      significado:
        'argumento que se opone a una tesis o a otro argumento previamente expuesto.',
    },
    {
      termino: 'Debate',
      significado:
        'discusión estructurada en la que dos o más partes presentan argumentos opuestos.',
    },
    {
      termino: 'Evidencia',
      significado:
        'prueba o dato que respalda un argumento, puede ser empírica, estadística o testimonial.',
    },
    {
      termino: 'Falacia',
      significado:
        'razonamiento incorrecto que parece válido, pero que en realidad es erróneo o engañoso.',
    },
    {
      termino: 'Lógica',
      significado:
        'disciplina que estudia la estructura del razonamiento válido.',
    },
    {
      termino: 'Persuasión',
      significado:
        'capacidad de influir en las ideas, creencias o comportamientos de otros a través de argumentos.',
    },
    {
      termino: 'Premisa',
      significado:
        'afirmación que sirve como base o punto de partida para construir un argumento.',
    },
    {
      termino: 'Razonamiento',
      significado:
        'proceso mental que permite llegar a conclusiones a partir de información o argumentos.',
    },
    {
      termino: 'Refutación',
      significado:
        'respuesta que busca demostrar que un argumento o contraargumento es inválido.',
    },
    {
      termino: 'Retórica',
      significado:
        'arte de expresarse con el fin de convencer o persuadir mediante el lenguaje.',
    },
    {
      termino: 'Tesis',
      significado:
        'idea principal o postura que se defiende en una argumentación.',
    },
  ],
  referencias: [
    {
      referencia: 'Aristóteles. (340 A.C.). Ética a Nicomaco.',
    },
    {
      referencia:
        'Bustamante & Alfonso (2009). Lógica y argumentación. De los argumentos inductivos a las álgebras de Boole.',
    },
    {
      referencia:
        'Campos, Lule & Nallely (2012). La observación, un método para el estudio de la realidad.',
    },
    {
      referencia: 'Copi & Cohen (1998). Introducción a la lógica.',
    },
    {
      referencia:
        'De la Garza, D. (2003). ¿Qué es el pensamiento dialógico crítico?',
    },
    {
      referencia: 'Ecured (s.f.). Comprensión (Literatura).',
    },
    {
      referencia:
        'Freire, Paulo & Faúndez (1985). Por una pedagogía de la pregunta.',
    },
    {
      referencia:
        'Lectura Ágil (2019). 3 ejercicios para Potenciar tu Concentración y tu Memoria.',
    },
    {
      referencia:
        'Ortega (2002). Cómo lograr que los demás se salgan con la nuestra. Técnicas de persuasión, negociación y oratoria.',
    },
    {
      referencia: 'Uriarte J. (2020). 10 características del pensamiento. ',
    },
    {
      referencia: 'Vygotsky (1984). Pensamiento y lenguaje. Capítulo 7.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elba Patricia Rodríguez',
          cargo: 'Experta técnica',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Zvi Daniel Grosman',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Reyes',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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
