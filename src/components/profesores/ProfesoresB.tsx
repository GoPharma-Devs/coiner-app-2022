import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_Dr.-Giorgio-Franyuti.png?alt=media&token=8f04abc3-c641-4639-89b2-e1594360d61c';
interface ProfesorBProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorB() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorBProps) {
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
              alt="Dr. Giorgio Franyuti"
            />
            <div className="texto">
              <p className="nombre">Dr. Giorgio Franyuti</p>
              <p className="titulo-ponente">
                Director General de Medical Impact
              </p>
              <p className="trayectoria text-cyan-900">
                Es médico cirujano, actual director general de Medical Impact,
                punto focal para México del frente parlamentario regional contra
                la tuberculosis, miembro de la mesa directiva de Migrant
                Clinicians Network, ex jefe de Bioseguridad para la Unidad
                Operativa de Hospitalización COVID19 de la SEDENA, entre otras
                organizaciones de alto prestigio internacional, ex Director
                Médico en Hospitales Polanco. Ha participado ante varias
                asambleas generales de las naciones unidas en reuniones y
                revisiones de alto nivel y cofacilitado la creación de
                declaraciones políticas en la región. Además, el Dr. Franyuti ha
                liderado numerosas brigadas a lo largo del mundo en condiciones
                de difícil acceso, extrema marginación y desastres naturales en
                coordinación con representaciones locales y equipos mexicanos en
                diversos países como México, Guatemala, Colombia, Haití, Sierra
                Leona, Kenia y Ghana. Finalmente, a sus 30 años, ha publicado
                una quincena de artículos científicos en materia de
                neurociencia, salud pública e infectología a través de
                colaboraciones con EUA, Israel y México.{' '}
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
          alt="Dr. Giorgio Franyuti Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dr. Giorgio Franyuti
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Director General de Medical Impact
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

export default ProfesorB;
