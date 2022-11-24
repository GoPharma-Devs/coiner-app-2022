import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FJorge_Palacios.png?alt=media&token=88a53785-90c4-4151-ae1a-0f9fcbf76cc9';
interface ComiteJProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteJ() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteJProps) {
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
              alt="Dr. Jorge Palacios"
            />
            <div className="texto">
              <p className="nombre">Dr. Jorge Palacios</p>
              <p className="titulo-ponente">Genética Médica</p>
              <p className="trayectoria text-cyan-900">
                Estudió la carrera de Medicina en la Universidad Autónoma de
                Tamaulipas; posteriormente realizó su especialidad en Genética
                Médica en el Centro Médico Nacional Siglo XXI del IMSS. Realizó
                su maestría en Ciencias Médicas con respaldo universitario por
                la UNAM. Actualmente se desempeña como adscrito y coordinador de
                investigación en Genética Médica de la Clínica de Genética
                Psiquiátrica y psiquiatría Perinatal del INPRFM; es profesor
                adjunto del curso de especialización en Psiquiatría impartiendo
                la materia de Genética; también es profesor adjunto de los
                cursos de alta especialidad en Biología Molecular, Genética y
                Psiquiatría y del curso de alta especialidad en Psicogeriatría
                (Genética de las demencias). Es profesor del curso de Genética
                Médica en enfermería del Instituto Nacional de Nutrición y
                profesor de pregrado del área de Ciencias de la Salud del
                Instituto Tecnológico de Monterrey de las materias de Biología
                Celular y Genética, así como de neuroendocrinología. Miembro
                re-certificado del Consejo Mexicano de Genética y miembro
                Honorario de la Asociación Psiquiátrica Mexicana.
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
          Dr. Jorge Palacios
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

export default ComiteJ;
