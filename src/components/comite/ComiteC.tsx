import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FAraceli_Arellano.png?alt=media&token=130442f3-2a96-40d8-9d82-1bb4f1ec8552';
interface ComiteCProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteC() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteCProps) {
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
              alt="Dra. Araceli Arellano"
            />
            <div className="texto">
              <p className="nombre">Dra. Araceli Arellano</p>
              <p className="titulo-ponente">Reumatología Pediátrica </p>
              <p className="trayectoria text-cyan-900">
                Miembro de board de centros de referencia del proyecto global de
                la OMS Y OMS{' '}
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
          Dra. Araceli Arellano
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Reumatología Pediátrica
        </p>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteC;
