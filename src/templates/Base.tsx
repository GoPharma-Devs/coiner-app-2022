import Counter from '../counter/Counter';
import { Meta } from '../layout/Meta';
import Navbar from '../navbar/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
// import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <Counter />
    <VerticalFeatures />
    <Banner />
    <Footer />
  </div>
);

export { Base };
