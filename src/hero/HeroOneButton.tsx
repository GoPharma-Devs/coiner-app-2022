import { ReactNode } from 'react';

import Image from 'next/image';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="header text-center">
    <Image
      src="/assets/images/congreso.png"
      alt="hero"
      width={1044}
      height={234}
      className="object-cover object-center"
    />
    <h2 className="text-2xl text-[#FF1EC7] font-semibold mt-4 mb-16">
      {props.description}
    </h2>

    {props.button}
  </header>
);

export { HeroOneButton };
