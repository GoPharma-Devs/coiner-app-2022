import React from 'react';

import Head from 'next/head';

function ConstanciaView({ contancia }) {
  return (
    <>
      <Head>
        <title>Congreso Coiner® | Constancias</title>
        <meta name="description" content="Constancia Congreso Coiner" />
      </Head>

      <section className="h-screen flex align-middle content-center p-4">
        <h1>{contancia.name}</h1>
      </section>
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
