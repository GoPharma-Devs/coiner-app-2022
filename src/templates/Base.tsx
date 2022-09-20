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
    <section id="sponsors" aria-label="Sponsors" className="py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-[#0c4e8b] sm:text-4xl">
          Nuestros Patrocinadores
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          <div className="flex items-center justify-center">
            <img
              alt="Transistor"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F5.png?alt=media&token=61b94360-9994-4e72-a693-f59f746a80c4"
              width={158}
              height={48}
              decoding="async"
              data-nimg="future"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Tuple"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F5.png?alt=media&token=61b94360-9994-4e72-a693-f59f746a80c4"
              width={105}
              height={48}
              decoding="async"
              data-nimg="future"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="StaticKit"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F5.png?alt=media&token=61b94360-9994-4e72-a693-f59f746a80c4"
              width={127}
              height={48}
              decoding="async"
              data-nimg="future"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Mirage"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F5.png?alt=media&token=61b94360-9994-4e72-a693-f59f746a80c4"
              width={138}
              height={48}
              decoding="async"
              data-nimg="future"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Laravel"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F5.png?alt=media&token=61b94360-9994-4e72-a693-f59f746a80c4"
              width={136}
              height={48}
              decoding="async"
              data-nimg="future"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Statamic"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F5.png?alt=media&token=61b94360-9994-4e72-a693-f59f746a80c4"
              width={147}
              height={48}
              decoding="async"
              data-nimg="future"
              loading="lazy"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </section>

    <Banner />
    <Footer />
  </div>
);

export { Base };
