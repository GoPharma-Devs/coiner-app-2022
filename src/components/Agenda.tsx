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
      <h3 className="text-3xl text-[#0c4e8b] text-center  bg-[#b7ddff]font-semibold">
        Nuestro horario
      </h3>
      <TabsHeader className=" font-bold">
        {data.map(({ label, dates, value }) => (
          <Tab key={value} value={value} className=" py-4">
            <p className="text-[#1d98dc] font-bold text-2xl	 "> {label}</p>
            <small>{dates}</small>
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
