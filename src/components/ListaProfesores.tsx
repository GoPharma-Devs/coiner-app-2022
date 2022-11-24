import React from 'react';

import ProfesorA from './profesores/ProfesoresA';
import ProfesorB from './profesores/ProfesoresB';
import ProfesorC from './profesores/ProfesoresC';
import ProfesorE from './profesores/ProfesoresE';
import ProfesorF from './profesores/ProfesoresF';
import ProfesorG from './profesores/ProfesoresG';
import ProfesorH from './profesores/ProfesoresH';
import ProfesorI from './profesores/ProfesoresI';
import ProfesorJ from './profesores/ProfesoresJ';
import ProfesorK from './profesores/ProfesoresK';
import ProfesorL from './profesores/ProfesoresL';
import ProfesorM from './profesores/ProfesoresM';

function ListaProfesores() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <ProfesorA />
        <ProfesorB />
        <ProfesorC />
        <ProfesorE />
        <ProfesorF />
        <ProfesorG />
        <ProfesorH />
        <ProfesorI />
        <ProfesorJ />
        <ProfesorK />
        <ProfesorL />
        <ProfesorM />
      </div>
    </>
  );
}

export default ListaProfesores;
