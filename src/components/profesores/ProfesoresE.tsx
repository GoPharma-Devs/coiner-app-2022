import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_Axel%20Orozco.png?alt=media&token=7471f591-d0c9-4a72-9f49-d1beb44deaeb';
interface ProfesorEProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorE() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorEProps) {
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
              alt="Dr. Axel Orozco "
            />
            <div className="texto">
              <p className="nombre">Dr. Axel Orozco</p>
              <p className="titulo-ponente">
                Oftalmología y Alta Especialidad en Retina y Vítreo{' '}
              </p>
              <p className="trayectoria text-cyan-900">
                Médico oftalmólogo de la Universidad Nacional Autónoma de México
                | Hospital “Luis Sánchez Bulnes” de la “Asociación Para evitar
                la Ceguera en México I.A.P.” Alta especialidad médica y
                quirúrgica en Retina y Vítreo de la Universidad Nacional
                Autónoma de México | Hospital Luis Sánchez Bulnes de la
                “Asociación Para evitar la Ceguera en México I.A.P.” Afiliado a:
                Sociedad Mexicana de Oftalmología (Coordinador de Programa
                2022). Asociación Mexicana de Retina (Coordinador académico
                2016, 2018). American Association of Ophthalmology (2022).
                Fundador y miembro de Pan-American Association of Inherited
                Retinal Diseases (2019).{' '}
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
          alt="Dr. Axel Orozco  Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dr. Axel Orozco
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Oftalmología y Alta Especialidad en Retina y Vítreo{' '}
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

export default ProfesorE;
