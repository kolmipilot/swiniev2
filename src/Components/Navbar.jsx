import React, { useState } from 'react';
import logo from './pig.png';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // Ustawiamy stan dla otwartego/zamkniętego menu
  const [isOpen, setIsOpen] = useState(false);

  // Funkcja do przełączania stanu menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    const location = useLocation(); // Pobieramy aktualną lokalizację (link)
  
    const isActive = (path) => {
      return location.pathname === path ? 'text-blue-500 font-bold' : 'text-gray-500'; // Dodajemy klasę Tailwind do podświetlenia aktywnego linku
    };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white">
        <Link
          to="/"
          className={`mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold bg-white`}>
          <img src={logo} alt="" className='object-cover object-center rounded-full h-20 w-20 bg-white' />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleMenu} // Dodajemy obsługę kliknięcia
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen} // Ustawiamy aria-expanded na podstawie stanu
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Zmieniamy widoczność menu na podstawie stanu isOpen */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto bg-white`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link to="/" className={`${isActive("/")}block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 bg-white border-t border-gray-200`} aria-current="page">O nas</Link>
            </li>
            <li>
              <Link to="/opowiesci" className={`${isActive("/opowiesci")}block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 bg-white border-t border-gray-200`}>Opowieści</Link>
            </li>
            <li>
              <Link to='/bohaterowie' className={`${isActive("/bohaterowie")}block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 bg-white border-t border-gray-200`}>Bohaterowie</Link>
            </li>
            <li>
              <Link to='/kontakt' className={`${isActive("/kontakt")}block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 bg-white border-t border-gray-200`}>Kontakt</Link>
            </li>
            <li>
            <Link to='/generator' className={`${isActive("/generator")}block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 bg-white border-t border-gray-200`}>Generator</Link>
            </li>
            <li>
            <Link to='/gra' className={`${isActive("/generator")}block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 bg-white border-t border-gray-200`}>Gra</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
