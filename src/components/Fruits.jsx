import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


function Fruits() {
  return (
    <div className='p-8 mt-10 grid grid-cols-2 gap-x-16 gap-y-5'>
      {[
        {img: 'https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg', heading :"Potato/Olivier Salad"},
        {img:"https://www.themealdb.com/images/media/meals/60oc3k1699009846.jpg",heading :"Cabbage Soup (Shchi)"},
        {img:"https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg",heading :"Beetroot Soup (Borscht)"},
        {img:"https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",heading :"Matar Paneer"},
        {img:"https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",heading :"Baingan Bharta"},
        {img:"https://www.themealdb.com/images/media/meals/qywups1511796761.jpg",heading :"Boulangère Potatoes"},


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

export default Fruits