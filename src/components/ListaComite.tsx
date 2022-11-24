import React from 'react';

import ComiteA from './comite/ComiteA';
import ComiteB from './comite/ComiteB';
import ComiteC from './comite/ComiteC';

function ListaComite() {
  return (
    <div className="comite">
      <ComiteA />
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <ComiteB />
        <ComiteC />
      </div>
    </div>
  );
}

export default ListaComite;
