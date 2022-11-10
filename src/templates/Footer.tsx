import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-[#0C4E8B]">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            {/* Facebook */}
            <Link href="https://web.facebook.com/CoinerMexico">
              <a>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </a>
            </Link>

            <Link href="https://www.instagram.com/coinermx/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="icons8-instagram"
                    d="M10,3a7.008,7.008,0,0,0-7,7V20a7.008,7.008,0,0,0,7,7H20a7.008,7.008,0,0,0,7-7V10a7.008,7.008,0,0,0-7-7ZM22,7a1,1,0,1,1-1,1A1,1,0,0,1,22,7ZM15,9a6,6,0,1,1-6,6A6.006,6.006,0,0,1,15,9Zm0,2a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z"
                    transform="translate(-3 -3)"
                  />
                </svg>
              </a>
            </Link>

            <Link href="https://www.linkedin.com/company/coiner-rare-diseases/">
              <a>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </Link>
          </>
        }
      >
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/registro">
            <a>Registro</a>
          </Link>
        </li>
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
        <li>
          <Link href="/aviso">
            <a>Aviso de privacidad</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
