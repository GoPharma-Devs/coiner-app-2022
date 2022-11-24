import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FIv%C2%A0n_Duncker.png?alt=media&token=9750fe95-fc69-4354-a497-b24080dab01c';
interface ComiteIProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteI() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteIProps) {
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
              alt="Dr. Iván Duncker
"
            />
            <div className="texto">
              <p className="nombre">Dr. Iván Duncker</p>
              <p className="titulo-ponente">
                Doctorado en ciencias (Biología molecular y celular)
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
          Dr. Iván Duncker
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Doctorado en ciencias (Biología molecular y celular)
        </p>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteI;
