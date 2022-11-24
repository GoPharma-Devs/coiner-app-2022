import React from 'react';

import ComiteA from './comite/ComiteA';
import ComiteB from './comite/ComiteB';
import ComiteC from './comite/ComiteC';
import ComiteD from './comite/ComiteD';
import ComiteE from './comite/ComiteE';
import ComiteF from './comite/ComiteF';
import ComiteG from './comite/ComiteG';
import ComiteH from './comite/ComiteH';
import ComiteI from './comite/ComiteI';
import ComiteJ from './comite/ComiteJ';
import ComiteL from './comite/ComiteL';
import ComiteM from './comite/ComiteM';
import ComiteN from './comite/ComiteN';
import ComiteO from './comite/ComiteO';
import ComiteP from './comite/ComiteP';
import ComiteQ from './comite/ComiteQ';

function ListaComite() {
  return (
    <div className="comite">
      <ComiteA />
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <ComiteB />
        <ComiteC />
        <ComiteD />
        <ComiteE />
        <ComiteF />
        <ComiteG />
        <ComiteH />
        <ComiteI />
        <ComiteJ />
        <ComiteL />
        <ComiteM />
        <ComiteN />
        <ComiteO />
        <ComiteP />
        <ComiteQ />
      </div>
    </div>
  );
}

export default ListaComite;
