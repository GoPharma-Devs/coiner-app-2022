import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FDavid_Cervantes.png?alt=media&token=a16b3a36-03e0-4aae-82a9-b51978ec1833';
interface ComiteEProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteE() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteEProps) {
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
              alt="Dr. David Cervantes"
            />
            <div className="texto">
              <p className="nombre">Dr. David Cervantes</p>
              <p className="titulo-ponente">Genética Médica</p>
              <p className="trayectoria text-cyan-900">
                Es Jefe del servicio de Genética del Hospital Central Sur de
                Alta Especialidad de Pemex, Profesor de Biología molecular y
                genética de la Facultad Mexicana de Medicina de la Universidad
                La Salle, Profesor de Genética Medica de la Facultad de Medicina
                de la UNAM, Secretario de la Asociación Mexicana de Genética
                Humana, Miembro vigente del Consejo Mexicano de Genética,
                Miembro del Americanada Socety ir Human Genetics, con más de 30
                publicaciones nacionales e internacionales{' '}
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
          Dr. David Cervantes
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Genética Médica
        </p>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteE;
