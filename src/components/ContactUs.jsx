import React from 'react'

const ContactUs = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/ContactImg.jpg"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Get in touch with us</h1>
     
      <div class="flex flex-col justify-center py-3">
         <h1 className='text-[1.5rem]'>Phone : [Phone Number]</h1>
         <h1 className='text-[1.5rem]'>Email : [Email Address]</h1>
      </div>
    </div>
  </div>
</section>
  )
}

export default ContactUs