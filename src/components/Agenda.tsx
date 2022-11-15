import React from 'react';

import {
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
} from '@material-tailwind/react';

function Agenda() {
  const data = [
    {
      label: 'Día 1',
      dates: '25 de noviembre 2022',
      value: 'vue',
      desc: `/assets/images/feature.svg`,
    },

    {
      label: 'Día 2',
      dates: '26 de noviembre 2022',
      value: 'angular',
      desc: `/assets/images/feature2.svg`,
    },

    {
      label: 'Día 3',
      dates: '27 de noviembre 2022',
      value: 'svelte',
      desc: `/assets/images/feature3.svg`,
    },
  ];
  return (
    <Tabs value="html" className="w-3/4 mx-auto ">
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
      <h2 className="mx-auto max-w-lg text-center font-display text-4xl font-medium tracking-tighter bg-[#1d98dc] text-white rounded-3xl  sm:text-4xl uppercase">
        Conoce la agenda
      </h2>
      <br />
      <TabsHeader className=" font-bold">
        {data.map(({ label, dates, value }) => (
          <Tab key={value} value={value} className=" py-6 leading-6 ">
            <p className="text-[#1d98dc] font-bold text-2xl	 "> {label}</p>
            <small className="text-[#ff1ec7] text-sm	 ">{dates}</small>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <img alt="desc" src={desc}></img>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default Agenda;
