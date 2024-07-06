import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className='flex justify-center relative top-15 gap-2 items-center '>
        <div className='relative flex items-center'>
            <input className='justify-between bg-grey-4  p- rounded-lg px-6 py-2 block focus:outline-none' type="text" placeholder='Job titles and Keyword'/>
            <IoIosSearch className='absolute right-1 text-blue-1 cursor-pointer'/>
        </div>

        <div className='relative flex items-center'>
            <input className='justify-between bg-grey-4  p- rounded-lg px-6 py-2 block focus:outline-none' type="text" placeholder='City, Country or Remote'/>
            <IoLocationOutline className='absolute right-1 text-blue-1 cursor-pointer' />
        </div>

        <button className='bg-blue-1 text-white py-1.5 px-4 mr-3 rounded-lg'>Find Applicants</button>
    </div>
  )
}

export default Search