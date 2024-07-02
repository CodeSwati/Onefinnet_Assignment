import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Beverage() {
  return (
    <div className='p-8 mt-10 grid grid-cols-2 gap-x-16 gap-y-5'>
    {[
      {img: 'https://www.southernliving.com/thmb/mmyVvN80t0VvS4YqCbPM_Sh5kGE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gma_sl_1624-2000-9813deafe2fc4b818b0657fcef2c13d6.jpg',
         heading :"Ginger-Orange Mocktails"},
      {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL5JBrxAyKJghwE69yzr2nHgo0kDGPX1ZKfA&s",
        heading :"Orange Mojito Mocktail"},
      {img:"https://i0.wp.com/www.savourous.com/wp-content/uploads/2020/06/mocktail6-book.jpg?fit=1252%2C1252&ssl=1",
        heading :"Ginger, Lime, Beet Mocktail"},
      {img:"https://www.cupofzest.com/wp-content/uploads/2022/01/Cranberry-Ginger-Mocktail-Thumbnail-500x375.jpg",
        heading :"Cranberry Ginger Mocktail"},
      {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ijXWJ3jL5rl00O9kFU77hY_CqBNR-KB3gpfSKDDcQxQbZy6wGjWrksyeoSMPs_lq7tI&usqp=CAU",
        heading :"Tropical Sunshine Drink"},
      {img:"https://yummynotes.net/wp-content/uploads/2022/09/Watermelon-Granita-Mocktail.jpg",
        heading :"Watermelon Mocktail "},


    ].map((e,id)=>
           
    <div key={id} className='flex items-center gap-7 mb-2 '>
      <div className='w-[70px] h-[70px]'>
          <img className='bg-cover bg-center w-12 h-12 border border-none rounded-full '
          src={e.img}/>
      </div>
    
     <div className='flex flex-col gap-3 '>
        <div className='grid grid-cols-2 items-center font-semibold text-2xl'>
          <h1 className='' >{e.heading}</h1>
          <p className=' text-green-900 justify-self-end'>$8.45</p>
      </div>

      <div className='border border-dashed'></div>

      <div className='grid grid-cols-2 items-center'>
         <p className='text-sm text-zinc-400'>Lorem ipsum dolor sit quod laudantium praesentium provident.</p>
         <button className='flex justify-self-end items-center text-green-900 text-sm font-medium'>SHOP NOW <FaArrowRight /></button>
      </div>

   </div>
  </div>
    )}
    
    
  </div>
  )
}

export default Beverage