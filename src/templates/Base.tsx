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
    <section id="sponsors" aria-label="Sponsors" className="py-1 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-[#0c4e8b] sm:text-4xl">
          Nuestros Patrocinadores
        </h2>
        <div className="mx-auto mt-20 mb-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          <div className="flex items-center justify-center">
            <img
              alt="Biomarin"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F2.png?alt=media&token=63f7d91b-47f4-4c1b-b397-9bd97b515a31"
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
              alt="Go Pharma"
              src="https://firebasestorage.googleapis.com/v0/b/go-pharma-website.appspot.com/o/gopharma-logo.png?alt=media&token=396b8608-07b1-48c9-91d2-619ad1b2cd90"
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
              alt="Novartis"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F7.png?alt=media&token=87574aca-14ed-4d7a-9220-8e39337f3694"
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
              alt="PTC LABORATORIES"
              src="https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/ptc%202.png?alt=media&token=54533fd6-7585-4ca6-9cc1-0b6a347889fe"
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
              alt="Recordatti"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2Frecordati.png?alt=media&token=d133cc82-2957-4188-a49f-3c1b21554265"
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
              alt="Takeda"
              src="https://firebasestorage.googleapis.com/v0/b/coiner-2022.appspot.com/o/Takeda.png?alt=media&token=bfe70710-d7f2-40d1-8125-b2793583c2f9"
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
              alt="Ultragenyx"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2F8.png?alt=media&token=9888717c-8c0c-4eb0-a1fb-51d69266ea62"
              width={136}
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
    <section id="partners" aria-label="partners" className="py-1 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-[#0c4e8b] sm:text-4xl">
          Nuestros Aliados
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          <div className="flex items-center justify-center">
            <img
              alt="Omer"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FOMER_LOGO%402x.png?alt=media&token=8b20c418-05cd-421f-b398-6626ec6b63bf"
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
              alt="JAJAX"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FMPS_JAJAX_LOGO.png?alt=media&token=65eaa1c6-cef8-43d2-a557-de2c35c79589"
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
              alt="Nadie es menos"
              src="https://firebasestorage.googleapis.com/v0/b/comite-coiner.appspot.com/o/Patrocinadores%2FLogo_NEM.png?alt=media&token=ea434608-8e0b-47eb-a046-8f08eac13841"
              width={127}
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
