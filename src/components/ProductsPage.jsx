import React from 'react'
import { products } from '../data/data'

const ProductsPage = () => {
  return (
    <section className='p-3 px-3 m-4 mt-6 flex flex-col'>
    <h1 className='text-3xl m-4 text-center mb-6'>Popular Products</h1>
    <div className='flex gap-1 flex-wrap items-center justify-around'>
         {products.map(({id,img,name,price,rating})=>{
       return (
          <div className='flex flex-col gap-3  justify-center items-center w-[20rem] rounded-lg p-2 bg-black text-white'>
          
               {/* img container */}
    <div id={id} className='w-[16rem] rounded-lg h-[19rem] overflow-hidden '>
           <img src={img} className='rounded-lg object-cover object-bottom p-4'/>
       </div>
       {/* details */}
       <div>
         <h1>{name}</h1>
         <p>{price}</p>
         <button className='bg-white text-black py-1 px-2 my-2 rounded-lg hover:bg-black hover:text-white hover:border-2 hover:border-white transition-all ease-in 0.5s'>ADD TO CART</button>
       </div>
       </div>
       )
           })}
       </div>
       </section>
  )
}

export default ProductsPage