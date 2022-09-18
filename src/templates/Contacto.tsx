import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Contacto = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <Hero />
    <h1>Contacto</h1>

    <Footer />
  </div>
);

export { Contacto };
