import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_Dr.-Daniel-Cuevas-Ramos.png?alt=media&token=567231c0-2624-4a31-a955-48bb3630f3d4';
interface ProfesorLProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorL() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorLProps) {
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
              alt="Dr. Daniel Cuevas"
            />
            <div className="texto">
              <p className="nombre">Dr. Daniel Cuevas</p>
              <p className="titulo-ponente">
                Medicina Interna-Endocrinología Post-doctorado en fisiopatología
                de tumores hipofisiarios
              </p>
              <p className="trayectoria text-cyan-900">
                Médico Internista Endocrinólogo. Maestría y Doctorado en
                Ciencias Médicas. Post-doctorado en fisiopatología de tumores
                hipofisiarios. Endocrinólogo en el Instituto Nacional de
                Nutrición Salvador Zubirán y en Médica Sur. Investigador en
                Tumores hipofisiarios, diabetes y síndrome metabólico. Autor de
                múltiples trabajos de investigación y revisión clínica
                publicados en revistas indexadas.
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
          alt="Dr. Daniel Cuevas Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dr. Daniel Cuevas
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Medicina Interna-Endocrinología Post-doctorado en fisiopatología
              de tumores hipofisiarios
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

export default ProfesorL;
