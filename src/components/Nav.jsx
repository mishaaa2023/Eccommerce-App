import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'

const Nav = () => {
  return (
    // <div className='flex flex-wrap sm:flex-col flex-row py-5 px-12 items-center lg:justify-between justify-none'>
    //     {/* Logo Continer  */}
    //    
    //     {/* NavLinks container */}
    //     <nav className='p-1 flex items-center gap-3 text-left font-sans'>
    // 
    //     </nav>
    //     {/* Buttons Container */}
    //     {/* <div className='p-4 flex gap-2'>
    //         <button className='bg-black text-white font-bold px-3 py-2 font-mono'>Shop now</button>
    //         <button className='bg-black text-white font-bold px-3 py-2 font-mono'>Contact us</button>
    //     </div> */}
    // </div>
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={'/'} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
        <h1 className='text-[1.5rem] font-serif font-bold mx-auto text-center'>AYAN JEWELS</h1>
      
    </Link>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link className='mr-5' to={'/'}>Home</Link>
    <Link className='mr-5' to={'/about'}>About</Link>
   <Link className='mr-5' to={'/contact'}>Contact</Link>
     <Link className='mr-5' to={'/products'}>Popular Products</Link>
    </nav>
   <div>
    <button className='flex justify-center items-center text-2xl p-3 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all ease-in 0.5s'><FaShoppingCart/></button>
   </div>
  </div>
</header>
  )
}

export default Nav