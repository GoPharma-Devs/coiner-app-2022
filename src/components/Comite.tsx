import React from 'react';

import ListaComite from './ListaComite';

function Comite() {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <img
          alt="Comité COINER"
          src="/adn-h.png"
          width={227}
          height={68}
          className="mx-auto mb-8"
          decoding="async"
          data-nimg="future"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
        <h3 className="text-3xl text-[#0c4e8b] text-center  font-semibold uppercase">
          Conoce al
          <br />
          comité científico
        </h3>
        <br />
        <ListaComite />

        {/* GRID */}
      </div>
    </section>
  );
}

export default Comite;
