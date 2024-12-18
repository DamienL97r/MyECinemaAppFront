import React from 'react'

export default function Navbar() {
    return <>
  <nav className="bg-black fixed w-full z-20 top-0 start-0">
  <div className="w-full flex flex-wrap items-center justify-between px-4">
    <div className='flex items-center'>
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="logo/myEcinema-logo-light.svg" className="h-20" alt="My E-Cinema Logo"/>
      </a>

      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white items-center">
      <li>
        <a href="#" className="block py-2 px-3 rounded hover:text-gray-400 md:p-5" aria-current="page">Accueil</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 rounded hover:text-gray-400 md:p-5">Découverte</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 rounded hover:text-gray-400 md:p-5">Actualités</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 rounded hover:text-gray-400 md:p-5">Tarifs</a>
      </li>
    </ul>
  </div>
    </div>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
      <a className='px-3' href="#">
        <img src="assets/icons/loupe-light.png" className="h-6" alt="loupe"/>
      </a>
      <a className='px-3' href="#">
        <img src="assets/icons/utilisateur-light.png" className="h-6" alt="user"/>
      </a>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  </div>
</nav>
    </>
}
