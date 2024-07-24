import React from 'react'
import { Link } from 'react-router-dom'

const RightSide = () => {
  return (
    <div className='flex flex-wrap items-center gap-8 justify-center py-7 my-3 px-5'>
        <div>
            <img src="/mane_img.jpg" alt="" className='h-[29rem] lg:w-[20rem] w-[16rem]'/>
        </div>
        <div className='w-[29rem] h-[12rem] flex flex-col gap-2'>
            <h1 className='lg:text-[2.9rem] text-[2rem]'>The Best Jewellery made specially for you</h1>
            <Link to={'/products'}> <button className='bg-black mr-5 text-white rounded-lg lg:px-3 px-1 lg:py-5 py-2 text-2xl'>Shop Producs</button></Link>
        </div>
    </div>
    
  )
}

export default RightSide