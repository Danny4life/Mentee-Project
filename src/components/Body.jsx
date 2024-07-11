import React from 'react';
import { TbCurrencyNaira } from "react-icons/tb";
import Image from '../assets/profile.jpeg';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GrDocumentPdf } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { FaDribbble, FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

const Body = () => {
  return (
    <div className='max-w-5xl mt-4 m-auto mb-4 p-4'>
      <h1 className='font-semibold text-black-0 mb-6'>Company's employment opportunities</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-5'>
        <div className='max-w-lg  md:max-w-xl'>
          <div className='w-full h-52 shadow-3xl rounded-xl pt-5 md: p-3'>
            <div className='flex justify-between'>
              <h2 className='font-bold text-sm md:text-sm lg:text-base'>Junior Full-Stack Engineer</h2>
              <p className='text-grey-3 text-xs mt-1 md:text-xm lg:text-xs '>5 days ago</p>
            </div>
            <p className='text-sm flex items-center text-blue-1 font-medium pt-2'>
              <TbCurrencyNaira />500,000 - <TbCurrencyNaira className='ml-2' />700,000
            </p>
            <p className='pt-3 text-sm font-normal leading-5 md:pt-1 md:text-xm lg:pt-3 lg:text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur ab possimus. Ratione, totam impedit.</p>
            <div className='flex justify-between items-center mt-3 md:mt-1 lg:mt-3'>
              <p className='bg-blue-3 rounded-xl px-2 py-1 text-blue-1 font-medium md:py-1 text-sm lg:text-base '>REMOTE</p>
              <p className='text-sm md:text-xm lg:text-sm'>Lagos, Nigeria</p>
            </div>
          </div>
          <div className='w-full h-52 shadow-3xl rounded-xl pt-5 mt-4 md: p-3'>
            <div className='flex justify-between'>
              <h2 className='font-bold text-sm md:text-sm lg:text-base'>Junior Full-Stack Engineer</h2>
              <p className='text-grey-3 text-xs mt-1 md:text-xm lg:text-xs '>5 days ago</p>
            </div>
            <p className='text-sm flex items-center text-blue-1 font-medium pt-2'>
              <TbCurrencyNaira />500,000 - <TbCurrencyNaira className='ml-2' />700,000
            </p>
            <p className='text-pt-2 font-normal pt-1 leading-5 text-sm md:text-xm lg:text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur ab possimus. Ratione, totam impedit.</p>
            <div className='flex justify-between items-center mt-6 md:mt-1 lg:mt-6'>
              <p className='bg-orange-3 rounded-xl px-2 py-1 text-orange-1 font-medium md:py-1 text-sm lg:text-base'>ON SITE</p>
              <p className='text-sm md:text-xm lg:text-sm'>Lagos, Nigeria</p>
            </div>
          </div>
          <div className='w-full h-52 shadow-3xl rounded-xl pt-5 mt-4 md: p-3'>
            <div className='flex justify-between'>
              <h2 className='font-bold text-sm md:text-sm lg:text-base'>Junior Full-Stack Engineer</h2>
              <p className='text-grey-3 text-xs mt-1 md:text-xm lg:text-xs'>5 days ago</p>
            </div>
            <p className='text-sm flex items-center text-blue-1 font-medium pt-2'>
              <TbCurrencyNaira />500,000 - <TbCurrencyNaira className='ml-2' />700,000
            </p>
            <p className='pt-3 text-sm font-normal leading-5 md:text-xm lg:text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur ab possimus. Ratione, totam impedit.</p>
            <div className='flex justify-between items-center mt-6 md:mt-1 lg:mt-6'>
              <p className='bg-blue-3 rounded-xl px-2 py-1 text-blue-1 font-medium md:py-1 text-sm lg:text-base'>REMOTE</p>
              <p className='text-sm md:text-xm lg:text-sm'>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div className='col-span-2 max-w-8xl'>
          <div className='grid gap-6 md:grid-cols-2 '>
            {[...Array(6)].map((_, index) => (
              <div key={index} className='shadow-3xl relative px-6 py-4 h-48 rounded-xl'>
                <div className='flex justify-between items-center'>
                  <img src={Image} alt="" className='w-8 h-8 rounded-full' />
                  <div className="flex justify-center items-center absolute rounded-xl left-12 top-10 w-2 h-2 bg-green-2"></div>
                  <HiOutlineDotsVertical />
                </div>
                <h3 className='font-medium pt-1 text-sm md:text-base'>Ayomide Fatogun</h3>
                <p className='text-sm font-light'>Junior UI/UX Designer</p>
                <div className='flex justify-between items-center pt-3 gap-4'>
                  <div className='flex gap-1'>
                    <GrDocumentPdf className='w-2 text-blue-2' />
                    <p className='text-xs text-blue-1'>Resume-ayomi.pdf</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <IoLogoLinkedin className='w-4 md:w-2.5 text-blue-4' />
                    <FaBehance className='w-4 md:w-2.5' />
                    <FaDribbble className='w-4 text-bright md:w-2.5' />
                  </div>
                </div>
                <div className='flex justify-between items-center gap-3'>
                  <div className='mt-4 py-2 px-2.5 bg-blue-5 flex items-center justify-between rounded-md md:px-1 md:py-1 lg:py-2 lg:px-2.5'>
                    <IoMail className='text-blue-1' />
                    <button className='text-blue-1 text-xs pl-1 capitalize md:text-xm lg:text-xs'>Send email</button>
                  </div>
                  <div className='mt-4 py-2 px-2.5 bg-green-1 flex items-center justify-between rounded-md md:px-1 md:py-1 lg:py-2 lg:px-2.5'>
                    <AiFillMessage className='text-green-2' />
                    <button className='text-green-2 text-xs pl-1 capitalize md:text-xm lg:text-xs'>Message</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
