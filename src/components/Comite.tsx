import React from 'react';

function Comite() {
  const comite = [
    {
      lugar: 'Presidente',
      nombre: 'Dr Ronny Kershenovich',
      Job: 'Presidente Comité Científico COINER® 2022 Genética Médica',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FRonny_Kershenovich.png?alt=media&token=77c8e4e5-a5dd-4be3-9916-657ee73d697c',
      Bio: 'Médico genetista desde el 2003 con especial interés en dismofología clínica, enfermedades del tejido conectivo y porfirias. Actualmente es Subdirector de Investigación Médica en el Instituto Nacional de Medicina Genómica, médico genetista en Centro Médico ABC Campus Santa Fé y profesor de pregrado en la universidad Anáhuac de norte en la facultad de medicina. Miembro activo de diversas asociaciones nacionales e internacionales como: Asociación Mexicana de Genética Humana, Capitulo de Genética del Colegio Mexicano de Ginecología y Obstetricia, American Porphyria Foundation, American College of Medical Genetics and Genomics, American Society of Human Genetics, European Society of Human Genetics. Miembro de la Asociación Médica y del Staff del Centro Médico ABC, Sociedad Mexicana para Porifira, Unique y The Ehlers-Danlos Society.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dr. Jesús Navarro',
      Job: 'Presidente OMER Y JAJAX',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FJes%EF%BD%A3s_Navarro.png?alt=media&token=478219ba-9da8-4b74-829e-be257a645497',
      Bio: 'Es fundador y actual Vice-Presidente de la Alianza Iberoamericana de las Enfermedades Raras o Poco Frecuentes (ALIBER), Fundador y Presidente de la Organización Mexicana de Enfermedades Raras (OMER) y de MPS JAJAX AC. Miembro del panel de expertos de enfermedades raras para Rare Diseases International.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Araceli Arellano',
      Job: 'Reumatología Pediátrica',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FAraceli_Arellano.png?alt=media&token=130442f3-2a96-40d8-9d82-1bb4f1ec8552',
      Bio: 'Miembro de board de centros de referencia del proyecto global de la OMS Y OMS',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Alejandra Camacho',
      Job: 'Genética médica Vicepresidenta del Consejo Mexicano de Genética',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FAlejandra_Camacho.png?alt=media&token=2d76ddfc-0925-476a-ad37-96efcde1783d',
      Bio: 'Tiene especialidad en Genética Médica en el Hospital General de México (UNAM), maestría en Ciencias con Especialidad en Farmacología en la Escuela Superior de Medicina (IPN). Fue Jefa del Departamento de Genética e investigadora en ciencias médicas en el Insituto Nacional de Neurología y Neurocirugía Manuel Velasco Suárez, es miembro del Sistema Nacional de Investigadores y cuenta con diversas publicaciones nacionales e internacionales. Actualmente es coordinadora del Programa de Enfermedades Huérfanas Lisosomales, Estandarización de la Prescripción de Medicamentos de Alta Especialidad y de los Laboratorios de Genómica del Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado (ISSSTE). Vicepresidente del Consejo Méxicano de Genética.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dr. David Cervantes',
      Job: 'Genética médica',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FDavid_Cervantes.png?alt=media&token=a16b3a36-03e0-4aae-82a9-b51978ec1833',
      Bio: 'Es Jefe del servicio de Genética del Hospital Central Sur de Alta Especialidad de Pemex, Profesor de Biología molecular y genética de la Facultad Mexicana de Medicina de la Universidad La Salle, Profesor de Genética Medica de la Facultad de Medicina de la UNAM, Secretario de la Asociación Mexicana de Genética Humana, Miembro vigente del Consejo Mexicano de Genética, Miembro del Americanada Socety ir Human Genetics, con más de 30 publicaciones nacionales e internacionales',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Juana Navarrete',
      Job: 'Genética médica Presidenta de la Asociación Méxicana de Genética Humana',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FJuana_Navarrete.png?alt=media&token=1ad64228-a7de-4323-8bde-797c8c68a2c5',
      Bio: 'Médico Genetista egresada de la UNAM. Profesor titular de Genética Médica de la carrera de Médico Cirujano, Facultad de Medicina UNAM, Actual presidenta de la Asociación Mexicana de Genética Humana, miembro del Consejo Mexicano de Especialistas en Genética Humana. Miembro Fundador del Grupo de Estudios al Nacimiento.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Luz María Sánchez',
      Job: 'Pediatría y neonatología',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FLuz_Mar%C2%A1a_S%C2%A0nchez.png?alt=media&token=d02575e1-c5f6-4db1-b764-6fb1a330b9a8',
      Bio: 'Trabajó 28 años en el Hospital de Especialidades No. 25 del IMSS en Monterrey, NL y actualmente se dedica a la medicina privada. Se ha dedicado a las enfermedades raras desde hace más de 15 años. Miembro de grupos de expertos nacionales e internacionales en enfermedades raras. Profesora de Pediatria por más de 20 años e investigadora clínica del Sistema Nacional de Investigadores.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Esther Lieberman',
      Job: 'Genética médica',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FEsther_Lieberman.png?alt=media&token=8982e40c-00f5-4a69-a672-ba4d233ddf4f',
      Bio: 'Médico especialista en Genetica Humana \n\nEgresada del Departamento de Genética Humana del Instituto Nacional de Pediatría dónde ejerce como adscrito en dicho Departamento.  \n\nÁreas de interés: abordaje genético en el asesoramiento en enfermedade  raras, enfermedades lisosomales y diferencias en el desarrollo sexual.  \n\nProfesor asociado de los cursos de Genética, Pediatría y Enfermería Pediatrica en el Insutituto Nacional de Pediatría. Miembro actual del Consejo Mexicano de Genética.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dr. Iván Duncker',
      Job: 'Médico Cirujano y Doctor en ciencias (Biol. molecular y celular)',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FIv%C2%A0n_Duncker.png?alt=media&token=9750fe95-fc69-4354-a497-b24080dab01c',
      Bio: 'El Dr. Iván Martínez-Duncker Ramírez cuenta con el grado de Médico Cirujano Militar por parte de la Escuela Médico Militar, tiene grado de Doctor en Ciencias con felicitaciones del jurado por parte de la Escuela Práctica de Altos Estudios del Ministerio de Educación Nacional, Enseñanza Superior y de Investigación de Francia. Desde el 2006 es Profesor-Investigador Titular B de la Universidad Autónoma del Estado de Morelos, donde se encuentra adscrito al Centro de Investigación en Dinámica Celular, del cual fungió como director fundador y donde dirige el Laboratorio de Glicobiología Humana y Diagnóstico Molecular. estudiado enfermedades metabólicas hereditarias causadas por defectos en la síntesis de los glicanos, diagnosticando en el 2014 los primeros casos en México de niños afectados por desórdenes congénitos de la glicosilación (CDG) y continuando desde entonces a reportar nuevos casos de CDG .',
    },
    {
      lugar: 'Comite',
      nombre: 'Dr. Jorge Palacios',
      Job: 'Genética médica',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FJorge_Palacios.png?alt=media&token=88a53785-90c4-4151-ae1a-0f9fcbf76cc9',
      Bio: 'Estudió la carrera de Medicina en la Universidad Autónoma de Tamaulipas; posteriormente realizó su especialidad en Genética Médica en el Centro Médico Nacional Siglo XXI del IMSS. Realizó su maestría en Ciencias Médicas con respaldo universitario por la UNAM. Actualmente se desempeña como adscrito y coordinador de investigación en Genética Médica de la Clínica de Genética Psiquiátrica y psiquiatría Perinatal del INPRFM; es profesor adjunto del curso de especialización en Psiquiatría impartiendo la materia de Genética; también es profesor adjunto de los cursos de alta especialidad en Biología Molecular, Genética y Psiquiatría y del curso de alta especialidad en Psicogeriatría (Genética de las demencias). Es profesor del curso de Genética Médica en enfermería del Instituto Nacional de Nutrición y profesor de pregrado del área de Ciencias de la Salud del Instituto Tecnológico de Monterrey de las materias de Biología Celular y Genética, así como de neuroendocrinología. Miembro re-certificado del Consejo Mexicano de Genética y miembro Honorario de la Asociación Psiquiátrica Mexicana.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Talia Wegman',
      Job: 'Oncogenetista',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FTalia_Wegman.png?alt=media&token=be7c65b9-47d6-494c-a5f9-4669a7e057e1',
      Bio: 'Médica cirujana de la UNAM, maestría, doctorado y especialidad en genética humana. Posdoc en epidemiología Oncogenetica en NCI en EUA. Investigadora del Instituto Nacional de Cancerología. Miembro de SNI 1. Autora de capítulos y artículos nacionales e internacionales con especial enfoque en enfermedades raras. Galardonada con premios nacionales e internacionales en investigación. Directora del centro Kumar. Miembro del board internacional de agenesia sacra',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Rosa Alvarez',
      Job: 'Genética médica',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FRosa_Alvarez.png?alt=media&token=7377b701-71d1-4bec-b135-b0c378f4c60b',
      Bio: 'Médico especialista en Genética. Responsable del programa institucional de Cáncer Hereditario, del Instituto Nacional de Cancerologia (SSA), el cual fundó y dirige. Investigador en Ciencias Médicas. Maestro y Doctor en Ciencias. Miembro del SNI, nivel 1.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Elisa Saleme',
      Job: 'Urgencióloga - Porfirias',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FElisa_Saleme.png?alt=media&token=db572580-f98b-4cb4-bdea-677e83de6ca7',
      Bio: 'Especialista en Medicina de Urg con M. En Salud Publica, actualmente Doctorado en Admon en Alta Dirección y Sistemas de Salud, Jefe de Servicio de Urgencias CM ABC Santa Fe, profesor Titular de la Esp. Medicina de Urgencias y del ITESM',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Patricia Grether',
      Job: 'Genética médica',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FPatricia_Grether.png?alt=media&token=079ed55f-5250-4cbb-86a9-77a89aaf7a97',
      Bio: 'Es médica especialista en Genética, egresada de la Facultad de Medicina de la Universidad Nacional Autónoma de México y del Instituto Nacional de Pediatría. Actualmente labora en el Centro Médico ABC. amplió los estudios básicos a través de la implementación de la citogenética y estudios moleculares y genómicos prenatales. convirtiendo al INPer en el primer centro de referencia nacional en el campo del Diagnóstico Prenatal. Fundó y dirigió el laboratorio de genética Diagen SC, (1993 – 2020) certificado en calidad por el College of American Pathologists (CAP). Desde 2006, es miembro del Colegio de Bioética AC y tuvo a su cargo la vicepresidencia por 2 años. Tiene 44 trabajos publicados en revistas científicas y 8 en libros de la especialidad. Desde junio del 2020 es Presidente de la Práctica Médica Grupal de Genética del Centro Médico ABC y el 1 de julio de 2022 fue nombrada Consejera del Consejo Consultivo de la Comisión Nacional de Bioética.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dr. Xavier Tello',
      Job: 'Médico Cirujano Especialista en políticas de salud',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FXavier_Tello.png?alt=media&token=20412f3d-0113-4ce4-a4c2-3a9478d15919',
      Bio: 'Médico Cirujano por la UNAM, con estudios en Farmacología Clínica, Mercadotecnia, Alta Dirección de empresas y Salud Digital. \n\nCon 30 años de experiencia en el área de Salud, Farma y Biotecnogía, es consultor en comunicación para diferentes empresas y sociedades médicas y de pacientes, además de analista en políticas de salud. \n\nEs comentarista experto en salud para diferentes medios de México y el mundo. \n\nHa escrito artículos y columnas de opinión en The Washington Post, Reforma, Excelsior, El Economista y el Universal, entre otros. \n\nPublica quincenalmente su columna “Diagnóstico Reservado” en La-Lista.com \n\nEs autor del libro “La Tragedia del Desabasto”.',
    },
    {
      lugar: 'Comite',
      nombre: 'Dra. Garbiñe\nSaruwatari',
      Job: 'Maestra en Bioética',
      Image:
        'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FGarbi%E0%B8%84e_Saruwatari.png?alt=media&token=0246437b-be74-4ac2-9882-4112ad989737',
      Bio: 'Es abogada, maestra en bioética, doctora en cultura de derechos humanos. Actualmente se desempeña como Jefa del Departamento de Estudios Jurídicos, Éticos y Sociales y como Presidente del Comité de Ética en Investigación del Instituto Nacional de Medicina Genómica',
    },
  ];
  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <img
          alt="Comité COINER"
          src="/adn-h.png"
          width={227}
          height={68}
          className="mx-auto mb-8"
          decoding="async"
          data-nimg="future"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        <h3 className="text-3xl text-[#0c4e8b] text-center  font-semibold uppercase">
          Conoce al
          <br />
          comité científico
        </h3>
        <br />
        <div className="flex flex-wrap place-content-center  items-center p-8 transition-colors duration-200 transform cursor-pointer group s,sm:flex-col-reverse ">
          <img
            className="object-cover w-42 h-52 m-4 "
            src="https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FRonny_Kershenovich.png?alt=media&token=77c8e4e5-a5dd-4be3-9916-657ee73d697c"
            alt="Dr. Ronny Kershenovich Coiner 2022"
          />
          <div className="flex flex-col ">
            <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
              <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
                Dr. Ronny Kershenovich
              </h3>
              <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
                Presidente comité científico COINER® 2022 Genética médica
              </p>
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {comite
            .filter((item) => item.lugar === 'Comite')
            .map((item) => (
              <div
                key={comite.indexOf(item)}
                className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-white rounded-xl"
              >
                <img
                  className="object-cover w-42 h-52"
                  src={item.Image}
                  alt="avatar"
                />
                <h3 className="mt-4 text-2xl text-center font-semibold text-[#0c4e8b] capitalize dark:text-white ">
                  {item.nombre}
                </h3>
                <p className="mt-2 text-[#ff1ec7] text-center capitalize dark:text-gray-300 ">
                  {item.Job}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Comite;
