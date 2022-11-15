import React from 'react';

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
        <div className="flex flex-wrap place-content-center  items-center p-8 transition-colors duration-200 transform cursor-pointer group s,sm:flex-col-reverse ">
          <img
            className="object-cover w-32 h-32 m-4 rounded-full ring-4 ring-gray-300"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="avatar"
          />
          <div className="flex flex-col ">
            <span className="bg-[#0c4e8b] rounded-[4rem] px-[3rem] py-2 pb-5 ml-4 ">
              <h3 className=" mt-4 text-3xl text-center font-semibold text-[#1ed4ff] capitalize dark:text-white ">
                Dr. Ronny Kershenovich
              </h3>
              <p className="mt-2 text-[white] text-center capitalize dark:text-gray-300  max-w-xs	">
                Presidente comité científico COINER® 2022 Genética médica
              </p>
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-white rounded-xl">
            <img
              className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="avatar"
            />
            <h3 className="mt-4 text-2xl text-center font-semibold text-[#0c4e8b] capitalize dark:text-white ">
              Dra. Alejandra Camacho
            </h3>
            <p className="mt-2 text-[#ff1ec7] text-center capitalize dark:text-gray-300 ">
              Genética médica Vicepresidenta del Consejo Mexicano de Genética
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comite;
