import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FJes%EF%BD%A3s_Navarro.png?alt=media&token=478219ba-9da8-4b74-829e-be257a645497';
interface ComiteLProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteL() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteLProps) {
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
              src={ImgPonente}
              alt="Dr. Jesús Navarro"
            />
            <div className="texto">
              <p className="nombre">Dr. Jesús Navarro</p>
              <p className="titulo-ponente">
                Presidente Comité Científico COINER® 2022 Genética Médica
              </p>
              <p className="trayectoria text-cyan-900">
                Médico genetista desde el 2003 con especial interés en
                dismofología clínica, enfermedades del tejido conectivo y
                porfirias. Actualmente es Subdirector de Investigación Médica en
                el Instituto Nacional de Medicina Genómica, médico genetista en
                Centro Médico ABC Campus Santa Fé y profesor de pregrado en la
                universidad Anáhuac de norte en la facultad de medicina. Miembro
                activo de diversas asociaciones nacionales e internacionales
                como: Asociación Mexicana de Genética Humana, Capitulo de
                Genética del Colegio Mexicano de Ginecología y Obstetricia,
                American Porphyria Foundation, American College of Medical
                Genetics and Genomics, American Society of Human Genetics,
                European Society of Human Genetics. Miembro de la Asociación
                Médica y del Staff del Centro Médico ABC, Sociedad Mexicana para
                Porifira, Unique y The Ehlers-Danlos Society.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <React.Fragment>
      {' '}
      <div
        onClick={() => setModalShow(true)}
        className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-white rounded-xl"
      >
        <img className="object-cover w-42 h-52" src={ImgPonente} alt="avatar" />
        <h3 className="mt-4 text-2xl text-center font-semibold text-[#0c4e8b] capitalize ">
          Dr. Jesús Navarro
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Presidente OMER Y JAJAX
        </p>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteL;
