import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_Dr.-Eduardo-Barrag%C2%A0n_02.png?alt=media&token=c924d4ec-800a-4086-8043-17150a027374';
interface ProfesorAProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorA() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorAProps) {
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
              alt="Dr. Eduardo Barragán "
            />
            <div className="texto">
              <p className="nombre">Dr. Eduardo Barragán</p>
              <p className="titulo-ponente">Neurología Pediátrica</p>
              <p className="trayectoria text-cyan-900">
                Es jefe del departamento de neurología pediátrica del Hospital
                Infantil de México Es profesor titular del Curso Universitario
                de Neuropediatría, UNAM.
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
          alt="Dr. Eduardo Barragán Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dr. Eduardo Barragán
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Neurología Pediátrica
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

export default ProfesorA;
