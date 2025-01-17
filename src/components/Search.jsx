import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className='flex flex-col justify-center relative top-15 mt-4 gap-2 items-center md:flex-row '>
        <div className='relative flex items-center'>
            <input className='justify-between bg-grey-4  p- rounded-lg px-6 py-2 block focus:outline-none' type="text" placeholder='Job titles and Keyword'/>
            <IoIosSearch className='absolute right-1 text-blue-1 cursor-pointer mx-4'/>
        </div>

        <div className='relative flex items-center'>
            <input className='justify-between bg-grey-4  p- rounded-lg px-6 py-2 block focus:outline-none' type="text" placeholder='City, Country or Remote'/>
            <IoLocationOutline className='absolute right-1 text-blue-1 cursor-pointer mx-4' />
        </div>

        <button className='bg-blue-1 text-white text-sm  py-2  rounded-lg md:py-2 px-4 mr-3 '>Find Applicants</button>
    </div>
  )
}

export default Search