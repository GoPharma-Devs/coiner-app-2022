import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgPonente =
  'https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/comite%2FPatricia_Grether.png?alt=media&token=079ed55f-5250-4cbb-86a9-77a89aaf7a97';
interface ComiteOProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ComiteO() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ComiteOProps) {
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
              alt="Dra. Patricia Grether
"
            />
            <div className="texto">
              <p className="nombre">Dra. Patricia Grether</p>
              <p className="titulo-ponente">Genética Médica</p>
              <p className="trayectoria text-cyan-900">
                Es médica especialista en Genética, egresada de la Facultad de
                Medicina de la Universidad Nacional Autónoma de México y del
                Instituto Nacional de Pediatría. Actualmente labora en el Centro
                Médico ABC. amplió los estudios básicos a través de la
                implementación de la citogenética y estudios moleculares y
                genómicos prenatales. convirtiendo al INPer en el primer centro
                de referencia nacional en el campo del Diagnóstico Prenatal.
                Fundó y dirigió el laboratorio de genética Diagen SC, (1993 –
                2020) certificado en calidad por el College of American
                Pathologists (CAP). Desde 2006, es miembro del Colegio de
                Bioética AC y tuvo a su cargo la vicepresidencia por 2 años.
                Tiene 44 trabajos publicados en revistas científicas y 8 en
                libros de la especialidad. Desde junio del 2020 es Presidente de
                la Práctica Médica Grupal de Genética del Centro Médico ABC y el
                1 de julio de 2022 fue nombrada Consejera del Consejo Consultivo
                de la Comisión Nacional de Bioética.
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
          Dra. Patricia Grether
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

export default ComiteO;
