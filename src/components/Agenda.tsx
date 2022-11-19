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
      desc: `https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/agenda%2FAGENDA-01.png?alt=media&token=0fcd4c51-8776-48ec-867a-8811e2438798`,
    },

    {
      label: 'Día 2',
      dates: '25 de noviembre 2022',
      value: '25 de noviembre 2022',
      desc: `https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/agenda%2FAGENDA-02.png?alt=media&token=27aaf9b5-fe0f-4f56-b6ca-8e6a83188b50`,
    },

    {
      label: 'Día 3',
      dates: '26 de noviembre 2022',
      value: '26 de noviembre 2022',
      desc: `https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/agenda%2FAGENDA-03.png?alt=media&token=12edca7d-aa14-40e4-a16c-ca79cef1c24c`,
    },
    {
      label: 'Día 4',
      dates: '27 de noviembre 2022',
      value: '27 de noviembre 2022',
      desc: `https://firebasestorage.googleapis.com/v0/b/assets-coiner2022.appspot.com/o/agenda%2FAGENDA-04.png?alt=media&token=c51c3f7b-6805-403d-9c3f-af715a9ebaef`,
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
      <TabsHeader className=" font-bold bg-[#a9d9f310]">
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
