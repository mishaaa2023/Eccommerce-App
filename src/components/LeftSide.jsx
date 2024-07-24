import React from 'react'

const LeftSide = () => {
  return (
    <div className='flex flex-wrap items-center gap-8 justify-center py-7 my-3 px-5'>
      
        <div className='w-[29rem] h-[12rem] flex flex-col gap-2'>
            <h1 className='lg:text-[2.9rem] text-[2rem]'>We sell quality products!</h1>
          <p>Our products are excellent and long lasting. Of course you deserve the best of the best
            !
          </p>
        </div>
        <div>
            <img src="/second_img.jpg" alt="" className='h-[29rem] lg:w-[20rem] w-[16rem]'/>
        </div>
    </div>
  )
}

export default LeftSide