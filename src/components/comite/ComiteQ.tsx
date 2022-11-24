import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FGarbi%E0%B8%84e_Saruwatari.png?alt=media&token=0246437b-be74-4ac2-9882-4112ad989737';
interface ComiteQProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteQ() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteQProps) {
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
              alt="Dra. Garbiñe
Saruwatari"
            />
            <div className="texto">
              <p className="nombre">Dra. Garbiñe Saruwatari</p>
              <p className="titulo-ponente">
                Licenciatura en Derecho - Maestría en Bioética y Doctorado en
                Cultura de Derechos Humanos
              </p>
              <p className="trayectoria text-cyan-900">
                Es abogada, maestra en bioética, doctora en cultura de derechos
                humanos. Actualmente se desempeña como Jefa del Departamento de
                Estudios Jurídicos, Éticos y Sociales y como Presidente del
                Comité de Ética en Investigación del Instituto Nacional de
                Medicina Genómica
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
          Dra. Garbiñe Saruwatari
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Licenciatura en Derecho - Maestría en Bioética y Doctorado en Cultura
          de Derechos Humanos
        </p>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteQ;
