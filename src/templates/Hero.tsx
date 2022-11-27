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
        description="¡Muchas gracias!
        "
        button={
          <Link href="/REGISTRO">
            <a>
              <Button>Registro</Button>
            </a>
          </Link>
        }
      />
      <h2 className="text-center  mx-auto max-w-2xl p-4">
        Gracias por tu paricipación en el Congreso Internacional de Enfermedades
        Raras 2022, nos vemos en la próxima edición.
      </h2>
    </section>
  </Background>
);

export { Hero };
