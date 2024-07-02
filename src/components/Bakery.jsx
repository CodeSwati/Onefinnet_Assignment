import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Bakery() {
  return (
    <div className='p-8 mt-10 grid grid-cols-2 gap-x-16 gap-y-5'>
    {[
      {img: 'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg', heading :"Apple & Blackberry Crumble"},
      {img:"https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",heading :"Apam balik"},
      {img:"https://www.themealdb.com/images/media/meals/020z181619788503.jpg",heading :"Ayam Percik"},
      {img:"https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",heading :"Battenberg Cake"},
      {img:"https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg",heading :"Dundee cake"},
      {img:"https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",heading :"Banana Pancakes"},


    ].map((e,id)=>
           
    <div key={id} className='flex items-center gap-7 mb-2'>
      <div className=''>
          <img className='w-[70px] border border-none rounded-full '
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

export default Bakery