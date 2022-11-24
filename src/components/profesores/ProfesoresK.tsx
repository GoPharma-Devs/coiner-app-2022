import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_Ana_rios.png?alt=media&token=83787eb6-24a1-4f2b-ad22-894b38ed6d88';
interface ProfesorKProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorK() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorKProps) {
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
              alt="Dra. Ana Ríos"
            />
            <div className="texto">
              <p className="nombre">Dra. Ana Ríos</p>
              <p className="titulo-ponente">
                Ginecólogía - Andrología Doctorado en Biología Molecular
              </p>
              <p className="trayectoria text-cyan-900">
                Médica Cirujana, egresada de la Universidad de Guadalajara con
                especialidad en Ginecología y Obstetricia por el Antiguo
                Hospital Civil Fray Antonio Alcalde. Andrología por el Centro
                Médico Nacional de Occidente IMSS. Maestra en Ciencias de la
                Educación y Doctora en Biología Molecular. Actualmente
                ejerciendo medicina privada.{' '}
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
          alt="Dra. Ana Ríos Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dra. Ana Ríos
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Ginecólogía - Andrología Doctorado en Biología Molecular
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

export default ProfesorK;
