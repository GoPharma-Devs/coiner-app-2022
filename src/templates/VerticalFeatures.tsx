import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
    <img
      alt="Nadie es menos"
      src="/adn-h.png"
      width={227}
      height={68}
      className="mx-auto mb-8"
      decoding="async"
      data-nimg="future"
      loading="lazy"
      style={{ color: 'transparent' }}
    />
    <VerticalFeatureRow
      title="¿Qué es COINER? ​"
      description="Es una organización en la que convergen
      asociaciones y grupos de pacientes
      con padecimientos de baja prevalencia.​"
      image="/assets/images/feature.svg"
      imageAlt="¿Qué es COINER?."
    />
  </Section>
);

export { VerticalFeatures };
