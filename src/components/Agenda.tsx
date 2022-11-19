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
      dates: '24 de noviembre 2022',
      value: '24 de noviembre 2022',
      desc: `/assets/images/AGENDA-01.png`,
    },

    {
      label: 'Día 2',
      dates: '25 de noviembre 2022',
      value: '25 de noviembre 2022',
      desc: `/assets/images/AGENDA-02.png`,
    },

    {
      label: 'Día 3',
      dates: '26 de noviembre 2022',
      value: '26 de noviembre 2022',
      desc: `/assets/images/AGENDA-03.png`,
    },
    {
      label: 'Día 4',
      dates: '27 de noviembre 2022',
      value: '27 de noviembre 2022',
      desc: `/assets/images/AGENDA-04.png`,
    },
  ];
  return (
    <Tabs value="html" className="w-3/4 mx-auto  ">
      <img
        id="agenda"
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
      <h2 className="mx-auto max-w-lg text-center font-display text-4xl font-medium tracking-tighter bg-[#7eff2d] text-white rounded-3xl  sm:text-4xl uppercase">
        Conoce la agenda de <br /> coiner<sup>®</sup> 2022
      </h2>
      <br />
      <TabsHeader className=" font-bold bg-[#a9d9f310] flex sm:flex-row  lg:flex-row ">
        {data.map(({ label, dates, value }) => (
          <Tab
            key={value}
            value={value}
            className=" py-6 leading-6 bg-[#aedef873] rounded-3xl  m-2 text-[#0d0d0d] hover:bg-[#7eff2d] hover:text-white"
          >
            <p className="text-[#1d98dc] font-bold text-2xl	 "> {label}</p>
            <small className="text-[#ff1ec7] text-sm	 ">{dates}</small>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <img alt="desc" className="agenda" src={desc}></img>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default Agenda;
