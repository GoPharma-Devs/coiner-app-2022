import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Contacto = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <Hero />
    <h1>Contacto</h1>
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Contacto };
