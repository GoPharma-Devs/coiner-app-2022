import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FRonny_Kershenovich.png?alt=media&token=77c8e4e5-a5dd-4be3-9916-657ee73d697c';
interface ComiteAProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteA() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteAProps) {
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
              alt="Dr. Ronny Kershenovich"
            />
            <div className="texto">
              <p className="nombre">Dr. Ronny Kershenovich</p>
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
    <>
      {' '}
      <div
        onClick={() => setModalShow(true)}
        className="flex flex-wrap place-content-center  items-center p-8 transition-colors duration-200 transform cursor-pointer group s,sm:flex-col-reverse "
      >
        <img
          className="object-cover w-42 h-52 m-4 "
          src={ImgPonente}
          alt="Dr. Ronny Kershenovich Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dr. Ronny Kershenovich
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Presidente Comité Científico COINER® 2022 Genética Médica
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

export default ComiteA;
