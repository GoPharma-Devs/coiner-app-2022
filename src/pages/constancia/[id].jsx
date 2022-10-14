import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Head from 'next/head';
import Image from 'next/image';

function ConstanciaView({ contancia }) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Head>
        <title>Congreso Coiner® | Constancias</title>
        <meta name="description" content="Constancia Congreso Coiner" />
      </Head>

      <header
        ref={componentRef}
        className=" header constancia h-screen flex flex-col text-center align-middle place-content-center p-4"
      >
        <Image
          src="/assets/images/congreso.png"
          alt="hero"
          width={1280}
          height={234}
          className=" object-center"
        />
        <br />
        <br />
        <p>Apreciable</p>
        <br />
        <h1 className="mx-auto max-w-2xl text-center content-center	 font-display text-4xl font-medium tracking-tighter text-[#0c4e8b] sm:text-4xl">
          {contancia.name} {contancia.lastName}
        </h1>

        <br />
        <p>
          Agradecemos su participación en el Congreso Internacional de
          Enfermedades Raras realizado los días:
        </p>
        <h2 className="text-2xl text-[#FF1EC7] font-semibold mt-4 mb-16">
          24, 25, 26 y 27 de noviembre 2022
        </h2>
        <p>
          con duración de{' '}
          <span className=" text-[#FF1EC7] font-bold">15 horas</span>
        </p>
        <br />
        <br />
        <br />
        <br />

        <p>
          <span>Dr. Ronny Kershenovich</span>
          <br />
          <span>Presidente del Comité Científico 2022</span>
        </p>
        <br />
        <Image
          className="m-2  w-auto sm:h-10"
          src="/assets/images/logo.svg"
          alt=""
          width={80}
          height={80}
        />
      </header>
      <button className="botonImp" onClick={handlePrint}>
        Imprime tu certificado
      </button>
    </>
  );
}

export default ConstanciaView;

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`https://coiner.org/api/users/${ctx.query.id}`);
  const contancia = await res.json();

  return {
    props: { contancia },
  };
};
