import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FEsther_Lieberman.png?alt=media&token=8982e40c-00f5-4a69-a672-ba4d233ddf4f';
interface ComiteHProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteH() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteHProps) {
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
              alt="Dra. Esther Lieberman"
            />
            <div className="texto">
              <p className="nombre">Dra. Esther Lieberman</p>
              <p className="titulo-ponente">Genética Médica</p>
              <p className="trayectoria text-cyan-900">
                Médico especialista en Genetica Humana Egresada del Departamento
                de Genética Humana del Instituto Nacional de Pediatría dónde
                ejerce como adscrito en dicho Departamento. Áreas de interés:
                abordaje genético en el asesoramiento en enfermedade raras,
                enfermedades lisosomales y diferencias en el desarrollo sexual.
                Profesor asociado de los cursos de Genética, Pediatría y
                Enfermería Pediatrica en el Insutituto Nacional de Pediatría.
                Miembro actual del Consejo Mexicano de Genética.{' '}
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
          Dra. Esther Lieberman
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

export default ComiteH;
