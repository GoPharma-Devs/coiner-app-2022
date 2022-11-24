import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FLuz_Mar%C2%A1a_S%C2%A0nchez.png?alt=media&token=d02575e1-c5f6-4db1-b764-6fb1a330b9a8';
interface ComiteGProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteG() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteGProps) {
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
              alt="Dra. Luz María Sánchez"
            />
            <div className="texto">
              <p className="nombre">Dra. Luz María Sánchez</p>
              <p className="titulo-ponente">Pediatría y Neonatología</p>
              <p className="trayectoria text-cyan-900">
                Trabajó 28 años en el Hospital de Especialidades No. 25 del IMSS
                en Monterrey, NL y actualmente se dedica a la medicina privada.
                Se ha dedicado a las enfermedades raras desde hace más de 15
                años. Miembro de grupos de expertos nacionales e internacionales
                en enfermedades raras. Profesora de Pediatria por más de 20 años
                e investigadora clínica del Sistema Nacional de Investigadores.
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
          Dra. Luz María Sánchez
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Pediatría y Neonatología
        </p>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteG;
