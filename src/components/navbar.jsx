import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { LiaCommentDots } from "react-icons/lia";
import Image from '../assets/profile.jpeg'

const NavBar = () => {
  return (
    <div className="box-border">
        <div className="flex justify-between items-center h-20 px-5 bg-white">
            <div>
                <h1 className="text-blue-1 uppercase font-400 font-logo text-xl px-4">swiftselect</h1>
            </div>

            <ul className='flex items-center gap-6 pl-16'>
                <li className='text-blue-1 font-bold text-base underline ' >Find Candidates</li>
                <li className='px-3 font-400 '>Profile</li>
            </ul>

            <div className='flex items-center pr-6'>
                <div className='flex items-center py-4 pr-14 gap-6 '>
                    <LiaCommentDots className='size-6 ' />
                    <FontAwesomeIcon icon={faBell} className='size-6' />
                    <img src={Image} alt="" className='size-8 rounded-full'/>
                </div>


                <button className='bg-blue-1 text-white py-2 px-4 mr-3 rounded-lg'>Post New Job</button>
            </div>
        
        </div>
    </div>
    
  )
}

export default NavBar