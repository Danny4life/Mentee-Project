import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Dp from "../../assets/image/imgIcon.png";
import { BsChatRightDots } from "react-icons/bs";

const jobHeader = () => {
  return (
    <div className='box-border'>
        <div className="flex justify-between items-center h-20 px-5 bg-white">
            <div>
                <h1 className="text-blue-1 uppercase font-400 font-logo text-xl px-4">swiftselect</h1>
            </div>

            <ul className='flex  items-center gap-6 pl-16'>
                <li className='hidden  font-400 text-base cursor-pointer  md:block lg:block' >Find Candidates</li>
                <li className='hidden px-3 font-400 cursor-pointer md:block lg:block'>Profile</li>
            </ul>

            <div className='flex items-center  gap-6 md:pr-6 '>
                <BsChatRightDots  className='size-6 cursor-pointer'/>
                <FontAwesomeIcon icon={faBell} className='size-6 cursor-pointer' />
                <img src={Dp} alt="" className='w-10 h-10 cursor-pointer'  />
            </div>
        
        </div>
    </div>
  )
}

export default jobHeader