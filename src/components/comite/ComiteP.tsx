import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FXavier_Tello.png?alt=media&token=20412f3d-0113-4ce4-a4c2-3a9478d15919';
interface ComitePProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteP() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComitePProps) {
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
              alt="Dr. Xavier Tello"
            />
            <div className="texto">
              <p className="nombre">Dr. Xavier Tello</p>
              <p className="titulo-ponente">
                Médico Cirujano - Especialidad en Políticas de Salud
              </p>
              <p className="trayectoria text-cyan-900">
                Médico Cirujano por la UNAM, con estudios en Farmacología
                Clínica, Mercadotecnia, Alta Dirección de empresas y Salud
                Digital. Con 30 años de experiencia en el área de Salud, Farma y
                Biotecnogía, es consultor en comunicación para diferentes
                empresas y sociedades médicas y de pacientes, además de analista
                en políticas de salud. Es comentarista experto en salud para
                diferentes medios de México y el mundo. Ha escrito artículos y
                columnas de opinión en The Washington Post, Reforma, Excelsior,
                El Economista y el Universal, entre otros. Publica
                quincenalmente su columna Diagnóstico Reservado en La-Lista.com
                Es autor del libro La Tragedia del Desabasto.
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
          Dr. Xavier Tello
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Médico Cirujano - Especialidad en Políticas de Salud
        </p>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteP;
