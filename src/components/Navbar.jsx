import React from 'react'
import { IoIosArrowDown ,IoIosArrowRoundForward} from "react-icons/io";
import { FaRegUser,FaRegHeart,FaCartArrowDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";


function Navbar() {
  return (
    <div className='flex items-center justify-between p-8'>
        <h1 className='text-xl'> GO <span className='font-bold'>FOOD</span></h1>

        <div className='flex gap-10 font-medium'>
           <p className='flex items-center gap-1'>Home <IoIosArrowDown /></p>
           <p className='flex items-center gap-1'>Groceries <IoIosArrowDown /></p>
           <p className='flex items-center gap-1'>Pages <IoIosArrowDown /></p>
        </div>

        <div className='flex gap-10'>
            <p className='flex items-center gap-1 font-medium'>Connect with us <IoIosArrowRoundForward /></p>
            <div className='flex gap-5'>{[
                    <IoMdSearch />,<FaRegUser />,<FaRegHeart />,<FaCartArrowDown/>
                ].map((e,id)=>
                    <div key={id} className='bg-[#85a190] hover:bg-green-900 text-white border border-transparent rounded-full h-11 w-11 flex 
                items-center justify-center '>{e}   </div>
                )}
                
                
                <div> </div>
                <div></div>   
            </div>
        </div>
    </div>
  )
}

export default Navbar