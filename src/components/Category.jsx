import React from 'react'
import { NavLink } from 'react-router-dom'


function Category() {
  return (
    <div className='mt-10 flex flex-col gap-5 items-center'>
        <h2 className='text-lg font-semibold'>Shop By Category</h2>
        <h1 className='text-3xl font-bold'>Top Category Of Organic Food</h1>

        <div className='flex mt-3 gap-10'>
            <NavLink to='/fruits' className='text-sm bg-[#85a190] border border-transparent rounded-full
             py-2 px-4 text-white focus:bg-green-900'>FRUITS AND VEGETABLES
            </NavLink>

            <NavLink to='/bakery' className='text-sm bg-[#85a190] border border-transparent rounded-full
             py-2 px-4 text-white focus:bg-green-900'>BAKERY
             </NavLink>

            <NavLink to='/meat' className='text-sm bg-[#85a190] border border-transparent rounded-full
             py-2 px-4 text-white focus:bg-green-900'>MEAT AND SEAFOOD
             </NavLink>

            <NavLink to='/beverage' className='text-sm bg-[#85a190] border border-transparent rounded-full
             py-2 px-4 text-white focus:bg-green-900'>BEVERAGE
             </NavLink>

            <NavLink to='/biscuit' className='text-sm bg-[#85a190] border border-transparent rounded-full
             py-2 px-4 text-white focus:bg-green-900'>BISCUIT AND SNACKS
             </NavLink>

        </div>

    </div>
  )
}

export default Category