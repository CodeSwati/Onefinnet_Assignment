import React from 'react'
import { NavLink } from 'react-router-dom'


function Category() {
  return (
    <div className='mt-10 flex flex-col gap-3 sm:gap-5 items-center'>
        <h2 className='text-sm sm:text-base md:text-lg font-semibold text-center lg:text-start'>Shop By Category</h2>
        <h1 className='md:text-3xl sm:text-2xl text-lg font-bold text-center lg:text-start'>Top Category Of Organic Food</h1>

        <div className='flex lg:flex-nowrap flex-wrap justify-center mt-3 gap-2 sm:gap-6 md:gap-10'>
            <NavLink to='/' className='text-[9px] sm:text-xs md:text-sm bg-[#85a190] border border-transparent rounded-full
             sm:py-2 sm:px-4 py-1 px-3 text-white focus:bg-green-900'>FRUITS AND VEGETABLES
            </NavLink>

            <NavLink to='/bakery' className='text-[9px] sm:text-xs md:text-sm bg-[#85a190] border border-transparent rounded-full
             sm:py-2 sm:px-4 py-1 px-3 text-white focus:bg-green-900'>BAKERY
             </NavLink>

            <NavLink to='/meat' className='text-[9px] sm:text-xs md:text-sm bg-[#85a190] border border-transparent rounded-full
             sm:py-2 sm:px-4 py-1 px-3 text-white focus:bg-green-900'>MEAT AND SEAFOOD
             </NavLink>

            <NavLink to='/beverage' className='text-[9px] sm:text-xs md:text-sm bg-[#85a190] border border-transparent rounded-full
             sm:py-2 sm:px-4 py-1 px-3 text-white focus:bg-green-900'>BEVERAGE
             </NavLink>

            <NavLink to='biscuit' className='text-[9px] sm:text-xs md:text-sm bg-[#85a190] border border-transparent rounded-full
             sm:py-2 sm:px-4 py-1 px-3 text-white focus:bg-green-900'>BISCUIT AND SNACKS
             </NavLink>

        </div>

    </div>
  )
}

export default Category