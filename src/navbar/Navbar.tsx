import React from 'react';

import Link from 'next/link';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-white z-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/assets/images/logo.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-[#0c4e8b] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0c4e8b]"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <nav className="hidden md:flex space-x-10 items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="text-base font-medium text-[#0c4e8b] hover:text-gray-900"
              >
                Nosotros
              </a>
              <a
                href="#"
                className="text-base font-medium text-[#0c4e8b] hover:text-gray-900"
              >
                Contacto
              </a>
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-[#0c4e8b] hover:text-gray-900"
              >
                Registro
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0c4e8b] hover:bg-[#1ecdfa]"
              >
                Congreso
              </a>
            </nav>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          className={
            open
              ? 'opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2  transform origin-top-right md:hidden'
              : 'opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          }
        >
          <div className="navbar rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/assets/images/logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-[#0c4e8b] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0c4e8b]"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="menu bg-white grid gap-y-8 py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  href="/nosotros"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Nosotros
                </Link>
                <Link
                  href="/contacto"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Contacto
                </Link>

                <Link
                  href="/registro"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Registro
                </Link>
              </div>
              <div>
                <Link href="/congreso">
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0c4e8b] hover:bg-[#1ecdfa]">
                    Congreso
                  </a>
                </Link>
                <p className="mt-6 text-center text-base  text-[#6491bb]">
                  ¿No tienes acceso? <br />
                  <a
                    href="/registro"
                    className="text-[#0c4e8b] font-medium hover:text-indigo-500"
                  >
                    Registro
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
