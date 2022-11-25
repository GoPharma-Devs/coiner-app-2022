import { useEffect, useState } from 'react';

function Counter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date('Nov 27, 2022 08:20:00').getTime();
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
      <div className="flex  flex-wrap py-8 items-center justify-center bg-[#0C4E8B] text-white ">
        <p className="  text-4xl px-2 flex align justify-center">
          <svg
            className="mx-2 flex-shrink-0 w-10 h-10 text-[#FF1EC7]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Duración del congreso
        </p>
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
