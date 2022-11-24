import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';

const Hero = () => (
  <Background color="bg-[#fafafa]">
    <section>
      <HeroOneButton
        title={
          <>
            {'CONGRESO INTERNACIONAL\n'}
            <span className="text-primary-500">DE ENFERMEDADES RARAS</span>
          </>
        }
        description="24, 25, 26 y 27 de noviembre 2022."
        button={
          <Link href="/inicio">
            <a>
              <Button>Acceso al congreso</Button>
            </a>
          </Link>
        }
      />
    </section>
  </Background>
);

export { Hero };
