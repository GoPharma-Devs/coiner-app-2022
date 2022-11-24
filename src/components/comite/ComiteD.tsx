import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FAlejandra_Camacho.png?alt=media&token=2d76ddfc-0925-476a-ad37-96efcde1783d';
interface ComiteDProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteD() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteDProps) {
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
              alt="Dra. Alejandra Camacho"
            />
            <div className="texto">
              <p className="nombre">Dra. Alejandra Camacho</p>
              <p className="titulo-ponente">
                Genética Médica - Vicepresidenta del Consejo Mexicano de
                Genética
              </p>
              <p className="trayectoria text-cyan-900">
                Tiene especialidad en Genética Médica en el Hospital General de
                México (UNAM), maestría en Ciencias con Especialidad en
                Farmacología en la Escuela Superior de Medicina (IPN). Fue Jefa
                del Departamento de Genética e investigadora en ciencias médicas
                en el Insituto Nacional de Neurología y Neurocirugía Manuel
                Velasco Suárez, es miembro del Sistema Nacional de
                Investigadores y cuenta con diversas publicaciones nacionales e
                internacionales. Actualmente es coordinadora del Programa de
                Enfermedades Huérfanas Lisosomales, Estandarización de la
                Prescripción de Medicamentos de Alta Especialidad y de los
                Laboratorios de Genómica del Instituto de Seguridad y Servicios
                Sociales de los Trabajadores del Estado (ISSSTE). Vicepresidente
                del Consejo Méxicano de Genética.
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
          Dra. Alejandra Camacho
        </h3>
        <p className="mt-1 text-[#ff1ec7] text-center capitalize   max-w-xs  ">
          Genética Médica - Vicepresidenta del Consejo Mexicano de Genética
        </p>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
}

export default ComiteD;
