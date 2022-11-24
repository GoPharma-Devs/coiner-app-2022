import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_Dr.%20Luis%20Leonardo%20Flores%20Lagunes.png?alt=media&token=883a359d-3f27-41f5-a26a-e28d144588d6';
interface ProfesorJProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorJ() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorJProps) {
    return (
      <Modal
        className="text-light"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="contenedor-modal">
            <Button className="boton-cerrar" onClick={props.onHide}>
              x
            </Button>
            <Image
              width={310}
              height={422}
              className="p-4  m-4 "
              src={ImgProfesor}
              alt="Dr. Luis Leonardo Flores Lagunes"
            />
            <div className="texto">
              <p className="nombre">Dr. Luis Leonardo Flores Lagunes</p>
              <p className="titulo-ponente">
                Genética Médica Maestría en Ciencias Medicina de Precisión de
                Cáncer del INMEGEN{' '}
              </p>
              <p className="trayectoria text-cyan-900">
                Médico especialista en Genética Médica por la Facultad de
                Medicina de la UNAM. Maestro en Ciencias por la Facultad de
                Química de la UNAM. Aspirante a Doctor en Ciencias por la
                Facultad de Química de la UNAM. Certificado por el Consejo
                Mexicano de Genética Humana: Certificado 327. Miembro Numerario
                de la Asociación Mexicana de Genética Humana A.C. Profesor
                Titular de Genética Clínica en el Instituto Politécnico
                Nacional. Profesor Titular invitado a los cursos de Alta
                Especialidad de Medicina Genómica y Salud Mental, Medicina de
                Precisión en Cáncer del INMEGEN. Profesor de Genética Medica y
                Herencia y Desarrollo en el ITESM (Tec de Monterrey) Campus
                CDMX. Médico Especialista C adscrito al Laboratorio de
                Diagnóstico Genómico, Instituto Nacional de Medicina Genómica
                (INMEGEN). Medico Especialista en Centro Oncológico del Hospital
                Medica Sur. Co-autor de 12 publicaciones internacionales en
                temas de Enfermedades neurológicas de origen genético, Leucemia
                y Deterioro cognitivo.{' '}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      {' '}
      <div
        onClick={() => setModalShow(true)}
        className="flex flex-wrap place-content-center  items-center p-8 transition-colors duration-200 transform cursor-pointer group s,sm:flex-col-reverse "
      >
        <img
          className="object-cover w-42 h-52 m-4 "
          src={ImgProfesor}
          alt="Dr. Luis Leonardo Flores Lagunes Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dr. Luis Leonardo Flores Lagunes
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Genética Médica Maestría en Ciencias Medicina de Precisión de
              Cáncer del INMEGEN
            </p>
          </span>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorJ;
