import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-0 pb-0 px-5">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <section>
      <HeroOneButton
        title={
          <>
            {'CONGRESO INTERNACIONAL\n'}
            <span className="text-primary-500">DE ENFERMEDADES RARAS</span>
          </>
        }
        description="24, 25, 26 y 27 de Noviembre 2022."
        button={
          <Link href="/registro">
            <a>
              <Button xl>Registro</Button>
            </a>
          </Link>
        }
      />
    </section>
  </Background>
);

export { Hero };
