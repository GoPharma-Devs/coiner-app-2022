import React, { useState } from 'react';

import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const ImgProfesor =
  'https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/profesores%2FWEB_COINER_PROFESORES_DraMarcelaVela.png?alt=media&token=bfad0192-798c-49ae-866c-d0fc5741efde';
interface ProfesorHProps {
  nombre?: string;
  titulo?: string;
  trayectoria?: string;
  onHide?: () => void;
  show?: boolean;
}

function ProfesorH() {
  const [modalShow, setModalShow] = useState(false);
  function MyVerticallyCenteredModal(props: ProfesorHProps) {
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
              alt="Dra. Marcela Vela Amieva"
            />
            <div className="texto">
              <p className="nombre">Dra. Marcela Vela Amieva</p>
              <p className="titulo-ponente">
                Pediatría - Errores Innnatos del Metabolismo y Tamiz en INP{' '}
              </p>
              <p className="trayectoria text-cyan-900">
                Jefa del Laboratorio de Errores Innatos del Metabolismo y Tamiz
                del Instituto Nacional de Pediatría de la Secretaría de Salud de
                México. Pediatra investigadora con 30 años de experiencia en el
                área de enfermedades raras, con énfasis en los errores innatos
                del metabolismo y tamiz neonatal. Miembro del Sistema Nacional
                de Investigadores del CONACYT. Autora de más de 150
                publicaciones científicas nacionales e internacionales.
                Expresidenta de la Sociedad Latinoamericana de Errores Innatos
                del Metabolismo y Pesquisa Neonatal (SLEIMPN). Galardonada con
                el premio Reina Sofía para la prevención de las deficiencias en
                el año 2000.
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
          alt="Dra. Marcela Vela Amieva Coiner 2022"
        />
        <div className="flex flex-col ">
          <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
            <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
              Dra. Marcela Vela Amieva
            </h3>
            <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
              Pediatría - Errores Innnatos del Metabolismo y Tamiz en INP
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

export default ProfesorH;
