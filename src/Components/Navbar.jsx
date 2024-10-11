import React from 'react'
import logo from './pig.png'
import { Link } from "react-router-dom";
import Main from '../Pages/Main';
const Navbar = () => {
  return (
    <>
    <nav className="bg-white">
    <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800 bg-white">
      <Link to="/"
        className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold bg-white">
        <img src={logo} alt="" className='object-cover object-center rounded-full h-20 w-20 bg-white'/>
      </Link>
      <div className="hidden lg:block bg-white">
        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 bg-white">
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 bg-white">
            <Link to="/" href="#" className="flex items-center bg-white">O nas</Link>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 bg-white">
            <Link to="/opowiesci" className="flex items-center bg-white">Opowieści</Link>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 bg-white">
            <Link to='/bohaterowie' className="flex items-center bg-white">Bohaterowie</Link>
          </li>
          <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600 bg-white">
            <a href="#" className="flex items-center bg-white">Kontakt</a>
          </li>
        </ul>
      </div>
      <button
        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
        type="button">
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </span>
      </button>
    </div>
  </nav>
  </>
  )
}

export default Navbar