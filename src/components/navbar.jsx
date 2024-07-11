import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Image from '../assets/profile.jpeg';
import { BsChatRightDots } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="box-border">
        <div className="flex justify-between items-center h-20 px-5 bg-white">
            <div>
                <h1 className="text-blue-1 uppercase font-400 font-logo text-xl px-4">swiftselect</h1>
            </div>

            <ul className='flex items-center gap-6 pl-16'>
                <li className='text-blue-1 hidden font-bold text-base underline md:block lg:block' >Find Candidates</li>
                <li className='hidden px-3 font-400 md:block lg:block'>Profile</li>
            </ul>

            <div className='flex  items-center pr-6'>
                <div className='hidden md:flex items-center py-4 pr-14 gap-6  '>
                    <BsChatRightDots  className='size-6'/>
                    <FontAwesomeIcon icon={faBell} className='size-6' />
                    <img src={Image} alt="" className='size-8 rounded-full'/>
                    <div className="flex justify-center items-center rounded-xl -ml-8 mt-6 w-2 h-2 bg-green-2 "></div>
                </div>


                <button className='bg-blue-1 text-white text-sm  py-2  rounded-lg md:py-2 px-4 mr-3  '>Post New Job</button>
            </div>
        
        </div>
    </div>
    
  )
}

export default NavBar