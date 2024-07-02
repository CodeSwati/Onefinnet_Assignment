import React from 'react'
import {IoIosArrowRoundForward} from "react-icons/io";


function Main() {
  return (
    <div className='px-10 pb-10 mt-20 flex justify-center gap-20'>

        <div className='LEFT w-[70%] flex flex-col gap-20'>
            <div className='flex flex-col gap-6'>
                <h3 className='font-bold text-2xl'>Discount up to 20%</h3>
                <h1 className='font-semibold text-5xl'>Buy Fresh And Organic Grocery Food</h1>
                <p className=' '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt est excepturi dolore dignissimos modi, a recusandae laborum in, expedita beatae ratione
                    temporibus deserunt molestiae quaerat pariatur nam atque molestias ab.</p>
            </div>
            <div className='text-white '>
                <button className='bg-green-900 border border-transparent rounded-full py-2 px-6 flex justify-center
                 items-center gap-2 text-sm font-semibold'>SHOP NOW  <IoIosArrowRoundForward /> </button>
            </div>
        </div>

        <div className='RIGHT '>
          <img className='w-[80%] border border-none rounded-full h-auto'
          src='https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=0.8890666666666666xw:1xh;center,top&resize=1200:*'/>
        </div>
    </div>
  )
}

export default Main