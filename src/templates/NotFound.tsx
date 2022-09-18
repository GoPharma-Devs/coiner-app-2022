import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';

const NotFound = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <section className="notFound h-screen  flex flex-col justify-center align-middle text-center">
      <h1>
        404<span>|</span>
        Pagína no encontrada, por favor,
      </h1>
      <Link href="/">
        <a className="btn">Regresar al inicio </a>
      </Link>
    </section>
    <Footer />
  </div>
);

export { NotFound };
