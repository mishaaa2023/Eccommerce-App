import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/data'
import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
       

        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <NavLink to={'/'} className="flex title-font font-medium items-center text-red-500  text-bold oswald mb-4 md:mb-0 ml-3 text-xl">
                    WohooShop
                </NavLink>
                <nav className="md:ml-auto md:mr-auto  flex-wrap  text-base justify-center flex items-center gap-6">
                    {
                        navLinks.map(({ id, name, path }) => {
                            return (
                                <NavLink to={path} key={id} className='hover:text-red-500 transition-all ease-in 0.5s text-1xl'>{name}</NavLink>
                            )
                        })
                    }
                </nav>
                <button className='bg-red-500 hover:bg-white hover:text-red-500 py-2 px-3 transition-all ease-in 0.5s rounded text-white hover:border-2 hover:border-red-500 text-bold flex items-center '>
                 <NavLink to={'/shopnow'}>
                <FaBagShopping className='flex'/>
                 </NavLink>
             </button>
            </div>
        </header>
    )
}

export default Navbar