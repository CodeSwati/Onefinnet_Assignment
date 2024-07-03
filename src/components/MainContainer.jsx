import React from 'react'
import {IoIosArrowRoundForward} from "react-icons/io";


function MainContainer() {
  return (
    <div className='px-10 sm:pb-20 pb-10 mt-4 sm:mt-16 flex lg:flex-row flex-col items-center  sm:gap-30 lg:gap-40'>

        <div className='LEFT lg:w-[70%] flex lg:items-start items-center  flex-col gap-10 lg:gap-20'>
            <div className='flex lg:items-start items-center flex-col gap-3 sm:gap-6'>
                <h3 className='font-bold text-base sm:text-xl md:text-2xl'>Discount up to 20%</h3>
                <h1 className='font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-start'>Buy Fresh And Organic Grocery Food</h1>
                <p className=' text-center lg:text-start text-xs sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt est excepturi dolore dignissimos modi, a recusandae laborum in, expedita beatae ratione
                    temporibus deserunt molestiae quaerat pariatur nam atque molestias ab.</p>
            </div>
            <div className='text-white '>
                <button className='bg-green-900 border border-transparent rounded-full py-1 px-3 sm:py-2 sm:px-6 flex justify-center
                 items-center gap-1 sm:gap-2 text-[9px] sm:text-xs md:text-sm font-normal sm:font-semibold'>SHOP NOW  <IoIosArrowRoundForward /> </button>
            </div>
        </div>

        <div className=' lg:w-[60%] '>
          <img className='lg:w-96 lg:h-96 sm:w-72 sm:h-72 h-48 w-48 border border-none rounded-full lg:mt-0 mt-20'
          src='https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=0.8890666666666666xw:1xh;center,top&resize=1200:*'/>
        </div>
    </div>
  )
}

export default MainContainer