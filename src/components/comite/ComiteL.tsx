import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FTalia_Wegman.png?alt=media&token=be7c65b9-47d6-494c-a5f9-4669a7e057e1';
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
              alt="Dra. Talia Wegman"
            />
            <div className="texto">
              <p className="nombre">Dra. Talia Wegman</p>
              <p className="titulo-ponente">Oncogenética</p>
              <p className="trayectoria text-cyan-900">
                Médica cirujana de la UNAM, maestría, doctorado y especialidad
                en genética humana. Posdoc en epidemiología Oncogenetica en NCI
                en EUA. Investigadora del Instituto Nacional de Cancerología.
                Miembro de SNI 1. Autora de capítulos y artículos nacionales e
                internacionales con especial enfoque en enfermedades raras.
                Galardonada con premios nacionales e internacionales en
                investigación. Directora del centro Kumar. Miembro del board
                internacional de agenesia sacra{' '}
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
          Dra. Talia Wegman
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Oncogenética
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
