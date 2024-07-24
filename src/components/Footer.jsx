import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex items-center flex-wrap w-[100%] gap-3 p-5 justify-center bg-black text-white'>
            <div className='flex flex-wrap'>
                <Link to={'/'} class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    AYAN JEWELS |
                </Link>
                
                <p>© 2024 AYAN JEWELS</p>
            </div>
         <div className='flex flex-wrap items-center  gap-3 px-4'>
            <span className='text-[1.5rem]'><FaFacebook/></span>
            <span className='text-[1.5rem]'><FaInstagram/></span>
            <span className='text-[1.5rem]'><FaTiktok/></span>
            <span className='text-[1.5rem]'><FaTwitter/></span>
         </div>
        </div> 
    )
}

export default Footer