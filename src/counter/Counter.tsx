import { useEffect, useState } from 'react';

function Counter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date('Nov 24, 2022 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = target - now;

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-wrap py-8 items-center justify-center bg-[#0C4E8B] text-white ">
        <p className="text-4xl px-1">Reserva la fecha</p>
        <ul className="flex  p-4 leading-9">
          <li className="p-2 flex flex-col text-center">
            <span className="text-5xl mb-0 ">{days}</span>
            <small className="text-xl mt-0">Días</small>
          </li>
          <li className="p-2 flex flex-col text-center">
            <span className="text-5xl mb-0 ">{hours}</span>
            <small className="text-xl mt-0">Horas</small>
          </li>
          <li className="p-2 flex flex-col text-center">
            <span className="text-5xl mb-0 ">{minutes}</span>
            <small className="text-xl mt-0">Minutos</small>
          </li>
          <li className="p-2 flex flex-col text-center">
            <span className="text-5xl mb-0 ">{seconds}</span>
            <small className="text-xl mt-0">segundos</small>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Counter;
