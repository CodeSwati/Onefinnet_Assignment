import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Meat() {
  return (
    <div className='p-8 mt-10 grid grid-cols-2 gap-x-16 gap-y-5'>
      {[
        {img: 'https://www.themealdb.com/images/media/meals/ypuxtw1511297463.jpg', heading :"Turkey Meatloaf"},
        {img:"https://www.themealdb.com/images/media/meals/1529446137.jpg",heading :"Egg Drop Soup"},
        {img:"https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",heading :"Fish Fofos"},
        {img:"https://www.themealdb.com/images/media/meals/rtwwvv1511799504.jpg",heading :"Prawn & Fennel Bisque"},
        {img:"https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",heading :"Fish Soup(Ukha)"},
        {img:"https://www.themealdb.com/images/media/meals/vc08jn1628769553.jpg",heading :"Cevapi Sausages"},


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

export default Meat