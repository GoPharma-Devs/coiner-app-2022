import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_Jennifer%20Mc%20Donald.png?alt=media&token=b51a7de6-199e-4399-9b9d-f6a14fa5c49e';
interface ProfesorGProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorG() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorGProps) {
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
              src={ImgProfesor}
              alt="Jennifer Mc Donald"
            />
            <div className="texto">
              <p className="nombre">Jennifer Mc Donald</p>
              <p className="titulo-ponente">
                MKT Jennifer Mingramm Paciente AAT{' '}
              </p>
              <p className="trayectoria text-cyan-900">
                Maestra en mercadotecnia otorgada por la Universidad de Bérgamo
                en Italia en 1999. En 2013 padeció un evento que le cambió la
                vida y la mantuvo fuera de cualquier actividad hasta el 2015. A
                partir de 2017 se ha dedicado a realizar múltiples conferencias
                sobre su testimonio en diversos estados de la república;
                buscando crear conciencia de la existencia de enfermedades
                raras. Jennifer ha tenido que enfrentarse a muchas negativas y
                adversidades y se ha convertido desde entonces en un puñado de
                tenacidad al ejercer su derecho a la salud para obtener la
                medicación necesaria y vivir con una mejor calidad al no
                permitir que la realidad distorsione su entorno. Actualmente se
                encuentra matriculada en la carrera de derecho, y es parte clave
                en el área de idiomas en la ONG en la que cede su tiempo para
                personas de recursos limitados. El testimonio de Jennifer es una
                muestra que cuando uno está convencido de que se quiere
                sobrevivir aparecen fuerzas necesarias y se adoptan actitudes
                que la acercan a su objetivo. Diagnóstico: Deﬁciencia de alfa 1
                antitripsina (2014){' '}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      {' '}
      <div
        onClick={() => setModalShow(true)}
        className="flex flex-wrap place-content-center  items-center p-8 transition-colors duration-200 transform cursor-pointer group s,sm:flex-col-reverse "
      >
        <img
          className="object-cover w-42 h-52 m-4 "
          src={ImgProfesor}
          alt="Jennifer Mc Donald Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Jennifer Mc Donald
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              MKT Jennifer Mingramm Paciente AAT{' '}
            </p>
          </span>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProfesorG;
