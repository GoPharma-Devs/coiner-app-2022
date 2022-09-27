import Image from 'next/image';
import Link from 'next/link';

import { Meta } from '../layout/Meta';
import Navbar from '../navbar/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';

const Gracias = () => (
  <div className="antialiased text-gray-600 ">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <section className="header py-20 w-1/2 m-auto h-screen flex-col align-center justify-start flex">
      <Image
        src="/assets/images/congreso.png"
        alt="hero"
        width={1044}
        height={234}
        className="object-cover object-center"
      />

      <div className="container mx-auto px-6 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center text-[#FF1EC7] font-semibold mt-4 mb-8">
          No olvides tenemos una cita los próximos <br />
          24, 25, 26 y 27 de noviembre 2022.
        </h1>

        <h2 className="text-2xl text-center text-[#0C4E8B] font-semibold mt-4 mb-16">
          Muchas gracias por tu registro.
        </h2>
        <button>
          <Link href="/">
            <a className="text-white bg-[#0C4E8B] px-6 py-2 rounded-lg text-lg font-semibold">
              Volver al inicio
            </a>
          </Link>
        </button>
      </div>
    </section>

    <Footer />
  </div>
);

export { Gracias };
