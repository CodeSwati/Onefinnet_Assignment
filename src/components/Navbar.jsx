import React from 'react'
import { IoIosArrowDown ,IoIosArrowRoundForward} from "react-icons/io";
import { FaRegUser,FaRegHeart,FaCartArrowDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";


function Navbar() {
  return (
    <div className='flex items-center justify-between p-8  lg:p-10'>
        <h1 className='text-base sm:text-xl md:text-2xl whitespace-nowrap'> GO <span className='font-bold'>FOOD</span></h1>

        <div className='lg:flex gap-10 font-medium hidden'>
           <p className='flex items-center gap-1'>Home <IoIosArrowDown /></p>
           <p className='flex items-center gap-1'>Groceries <IoIosArrowDown /></p>
           <p className='flex items-center gap-1'>Pages <IoIosArrowDown /></p>
        </div>

        <div className='flex gap-10'>
            <p className='lg:flex items-center gap-1 font-medium hidden'>Connect with us <IoIosArrowRoundForward /></p>
            <div className='flex gap-3 sm:gap-5'>{[
                    <IoMdSearch />,<FaRegUser />,<FaRegHeart />,<FaCartArrowDown/>
                ].map((e,id)=>
                    <div key={id} className='bg-[#85a190] hover:bg-green-900 text-white border border-transparent 
                    rounded-full md:h-11 md:w-11 sm:h-8 sm:w-8 h-6 w-6 md:text-base sm:text-sm text-xs flex items-center justify-center '>{e}   </div>
                )}
              
            </div>
        </div>
    </div>
  )
}

export default Navbar