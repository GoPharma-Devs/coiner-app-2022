import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_Dr.-Luis-Arturo-Lizcano-Gil.png?alt=media&token=610ca2fb-4ece-44a3-81ee-a82c771f50fe';
interface ProfesorFProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorF() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorFProps) {
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
              alt="Dr. Luis Arturo Lizcano"
            />
            <div className="texto">
              <p className="nombre">Dr. Luis Arturo Lizcano</p>
              <p className="titulo-ponente">Genética Médica </p>
              <p className="trayectoria text-cyan-900">
                Médico y cirujano de la universidad del Rosario de Colombia.
                Maestría en genética humana de la Universidad de Guadalajara.
                CEO de Genética Humana EU. Genetista clínico con 20 años de
                experiencia en el diagnóstico y tratamiento de desórdenes
                neurodegenerativos. Líder latinoamericano de los servicios de
                metabolómica para pacientes con errores innatos del metabolismo.
                Creador y director del programa de tamizaje neonatal NEOGEN.
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
          alt="Dr. Luis Arturo Lizcano Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dr. Luis Arturo Lizcano
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Genética Médica
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

export default ProfesorF;
