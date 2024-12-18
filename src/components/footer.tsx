import React from 'react'

export default function Footer() {
    return <>
    <footer className="var(--background) w-full border-t-2 border-[#959595]">
      <div className=''>
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo/myEcinema-logo-light.svg" className="h-20" alt="My E-Cinema Logo"/>
        </a>
      </div>
      <div className="w-full flex flex-wrap items-start justify-center mt-[-40px]">
        
        <div className='w-full flex flex-wrap justify-center'>
          <div className='w-[150px] mx-20 mb-5'>
            <h3 className='text-lg uppercase border-b-2 border-[#959595] pb-1 font-bold'>à propos</h3>
            <ul className='text-[#959595]'>
              <li className='py-1 pt-3'>
                <a className='hover:text-white transition' href="#" target="_blank" rel="noopener noreferrer">Qui sommes nous ?</a>
              </li>
              <li className='py-1'>
                <a className='hover:text-white transition' href="#" target="_blank" rel="noopener noreferrer">S'abonner</a>
              </li>
              <li className='py-1'>
                <a className='hover:text-white transition' href="#" target="_blank" rel="noopener noreferrer">Contact</a>
              </li>
              <li className='py-1'>
                <a className='hover:text-white transition' href="#" target="_blank" rel="noopener noreferrer">FAQ</a>
              </li>
            </ul>
          </div>

          <div className='w-[150px] mx-20 mb-5'>
            <h3 className='text-lg uppercase border-b-2 border-[#959595] pb-1 font-bold'>suivez nous</h3>
            <div className="flex mt-3">
              <a className='h-[60px] w-[60px] mt-2 mr-2 hover:opacity-50 transition' href="#">
                <img src="assets/socials/facebook-light.png" alt="Facebook Logo"/>
              </a>
              <a className='h-[60px] w-[60px] mt-2 mr-2 hover:opacity-50 transition' href="#">
                <img src="assets/socials/instagram-light.png" alt="Instagram Logo"/>
              </a>
              <a className='h-[60px] w-[60px] mt-2 mr-2 hover:opacity-50 transition' href="#">TikTok?
              </a>
            </div>
          </div>

          <div className='w-[150px] mx-20 mb-5'>
            <h3 className='text-lg uppercase border-b-2 border-[#959595] pb-1 font-bold'>paiements</h3>
            <div className="my-2">
              <img src="assets/payments/card-payments.png" alt="Facebook Logo"/>
            </div>
            <div className="my-2">
              <img src="assets/payments/card-payments.png" alt="Facebook Logo"/>
            </div>
            <div className="my-2">
              <img src="assets/payments/card-payments.png" alt="Facebook Logo"/>
            </div>
          </div>
        </div>
        
        
      </div>
      <div className='bg-black flex justify-center p-5'>
        <p>My E-Cinema © 2025
          <span className='p-2'>|</span>
          <a className='p-2' href="#" target="_blank" rel="noopener noreferrer">CGV</a> 
          - 
          <a className='p-2' href="#" target="_blank" rel="noopener noreferrer">Mentions légales</a>
          -
          <a className='p-2' href="#" target="_blank" rel="noopener noreferrer"> Politique de gestion de cookies</a>
        </p>
      </div>
    </footer>
    </>
}
