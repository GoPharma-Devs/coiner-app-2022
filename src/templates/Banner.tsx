import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="No te pierdas el evento "
      subtitle="24, 25, 26 y 27 de Noviembre 2022"
      button={
        <Link href="/contacto">
          <a>
            <Button>Registro</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
