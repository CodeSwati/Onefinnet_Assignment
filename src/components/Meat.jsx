import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Meat() {
  return (
    <div className='p-4 sm:p-8 mt-4 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-y-5 gap-y-10'>
      {[
        {img: 'https://www.themealdb.com/images/media/meals/ypuxtw1511297463.jpg', heading :"Turkey Meatloaf"},
        {img:"https://www.themealdb.com/images/media/meals/1529446137.jpg",heading :"Egg Drop Soup"},
        {img:"https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",heading :"Fish Fofos"},
        {img:"https://www.themealdb.com/images/media/meals/rtwwvv1511799504.jpg",heading :"Prawn & Fennel Bisque"},
        {img:"https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",heading :"Fish Soup(Ukha)"},
        {img:"https://www.themealdb.com/images/media/meals/vc08jn1628769553.jpg",heading :"Cevapi Sausages"},


      ].map((e,id)=>
             
      <div key={id} className='flex items-center  gap-4 sm:gap-7 mb-2'>
        <div className=''>
            <img className='w-[70px] border border-none rounded-full '
            src={e.img}/>
        </div>
      
       <div className='flex flex-col gap-3 '>
       <div className='grid grid-cols-1 md:grid-cols-2 whitespace-nowrap items-center font-semibold text-base sm:text-lg md:text-2xl'>
            <h1 className='' >{e.heading}</h1>
            <p className=' text-green-900 md:justify-self-end'>$8.45</p>
          </div>

        <div className='border border-dashed'></div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 items-center text-[10px] sm:text-xs md:text-sm'>
           <p className=' text-zinc-400'>Lorem ipsum dolor sit quod laudantium praesentium provident.</p>
           <button className='flex md:justify-self-end items-center text-green-900 font-medium'>SHOP NOW <FaArrowRight /></button>
        </div>

       </div>
    </div>
      )}
      
      
    </div>
  )
}

export default Meat