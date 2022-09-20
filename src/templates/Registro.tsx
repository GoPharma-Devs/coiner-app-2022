import { Meta } from '../layout/Meta';
import Navbar from '../navbar/Navbar';
import RegistroPage from '../registro/RegistroPage';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';

const Registro = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <RegistroPage />
    <Footer />
  </div>
);

export { Registro };
