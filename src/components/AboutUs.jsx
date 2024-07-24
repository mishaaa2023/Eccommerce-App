import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <>
            <div className='flex flex-wrap items-center gap-8 justify-center py-7 my-3 px-5'>
                <div>
                    <img src="/AboutImg.jpg" alt="" className='h-[29rem] lg:w-[20rem] w-[16rem]' />
                </div>
                <div className='w-[29rem] h-[12rem] flex flex-col gap-2'>
                    <h1 className='lg:text-[2.9rem] text-[2rem]'>About Us</h1>
                    <p>
                        Welcome to AYAN JEWELS, where elegance meets craftsmanship. Established in 2023, we have dedicated ourselves to creating exquisite, high-quality jewelry that embodies timeless beauty and contemporary style. 👇
                    </p>
                </div>
            </div>


            <div className='flex flex-wrap items-center gap-8 justify-center py-7 my-3 px-5'>

                <div className='w-[29rem] h-[12rem] flex flex-col gap-2'>
                    <h1 className='lg:text-[2.9rem] text-[2rem]'>Our Story</h1>
                    <p>
                        Our journey began with a passion for creating jewelry that not only dazzles the eye but also captures the heart. Over the years, we've grown from a small, family-owned business into a beloved brand known for our unique designs and exceptional customer service. Each piece of jewelry tells a story, and we take pride in being part of our customers' most cherished moments.
                    </p>
                </div>
                <div>
                    <img src="/AboutImg2.jpg" alt="" className='h-[29rem] lg:w-[20rem] w-[16rem]' />
                </div>
            </div>

            <div className='flex flex-wrap items-center gap-8 justify-center py-7 my-3 px-5'>
                <div>
                    <img src="/AboutUs3.jpg" alt="" className='h-[29rem] lg:w-[20rem] w-[16rem]' />
                </div>
                <div className='w-[29rem] h-[12rem] flex flex-col gap-2'>
                    <h1 className='lg:text-[2.9rem] text-[2rem]'>Our Journey</h1>
                    <p>
                    At AYAN JEWELS, we believe that true beauty lies in the details. Our skilled artisans meticulously handcraft each piece using the finest materials, including ethically sourced gemstones and precious metals. From the initial design sketch to the final polish, every step of our process is driven by a commitment to excellence and a love for the art of jewelry making.
                    </p>
                </div>
            </div>

            <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/AboutImg4.jpg"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">What are you waiting for?</h1>
     
      <div class="flex justify-center">
     <Link to={'/products'}> <button className='bg-black mr-5 text-white rounded-lg lg:px-3 px-1 lg:py-5 py-2 text-2xl'>Shop Producs</button></Link>
     <Link to={'/contact'}><button className='bg-black mr-5 text-white rounded-lg lg:px-3 px-1 lg:py-5 py-2 text-2xl'>Contact us</button></Link> 
      </div>
    </div>
  </div>
</section>
        </>

    )
}

export default AboutUs