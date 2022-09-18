import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section>
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
