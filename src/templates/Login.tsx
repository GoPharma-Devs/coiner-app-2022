import { Meta } from '../layout/Meta';
import LoginPage from '../login/LoginPage';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';

const Login = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    <LoginPage />
    <Footer />
  </div>
);

export { Login };
