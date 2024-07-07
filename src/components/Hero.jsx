import React from 'react';
import { TbCurrencyNaira } from "react-icons/tb";
import Image from '../assets/profile.jpeg';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GrDocumentPdf } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";

const Hero = () => {
  return (
    <div className='max-w-5xl  mt-4 m-auto mb-4'>
      <h1 className='font-semibold text-black-0'>Company's employment opportunities</h1>

      <div className='flex gap-12'>
          <div className='max-w-sm mt-3 gap-4'>
            <div className='w-full h-52 shadow-3xl rounded-xl p-5'>
              <div className='flex justify-between'>
                <h2 className='font-bold'>Junior Full-Stack Engineer</h2>

                <p className='text-grey-3 text-xs mt-1'>5 days ago</p>
              </div>

              <p className='text-sm flex items-center text-blue-1 font-medium pt-2'><TbCurrencyNaira  />500,000  - <TbCurrencyNaira className='ml-2' />700,000</p>

              <p className='text- pt-2 font-normal leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur ab possimus. Ratione, totam impedit.</p>

              <div className='flex justify-between items-center mt-3'>
                <p className='bg-blue-3 rounded-xl px-2 py-1 text-blue-1 font-medium '>REMOTE</p>
                <p>Lagos, Nigeria</p>
              </div>

            </div>  

            <div className='w-full h-52 shadow-3xl rounded-xl p-5 mt-4'>
              <div className='flex justify-between'>
                <h2 className='font-bold'>Junior Full-Stack Engineer</h2>

                <p className='text-grey-3 text-xs mt-1'>5 days ago</p>
              </div>

              <p className='text-sm flex items-center text-blue-1 font-medium pt-2'><TbCurrencyNaira  />500,000  - <TbCurrencyNaira className='ml-2' />700,000</p>

              <p className='text- pt-2 font-normal leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur ab possimus. Ratione, totam impedit.</p>

              <div className='flex justify-between items-center mt-3'>
                <p className='bg-orange-3 rounded-xl px-2 py-1 text-orange-1 font-medium '>ON SITE</p>
                <p>Lagos, Nigeria</p>
              </div>

            </div>

            <div className='w-full h-52 shadow-3xl rounded-xl p-5 mt-4'>
              <div className='flex justify-between'>
                <h2 className='font-bold'>Junior Full-Stack Engineer</h2>

                <p className='text-grey-3 text-xs mt-1'>5 days ago</p>
              </div>

              <p className='text-sm flex items-center text-blue-1 font-medium pt-2'><TbCurrencyNaira  />500,000  - <TbCurrencyNaira className='ml-2' />700,000</p>

              <p className='text- pt-2 font-normal leading-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consequuntur ab possimus. Ratione, totam impedit.</p>

              <div className='flex justify-between items-center mt-3'>
                <p className='bg-blue-3 rounded-xl px-2 py-1 text-blue-1 font-medium '>REMOTE</p>
                <p>Lagos, Nigeria</p>
              </div>

            </div>
          </div>

          <div className='max-w-2xl'>
            <div className='flex w-full mt-3 flex-wrap '>
              <div className='shadow-3xl mr-6 px-6 py-4 h-48 rounded-xl'>
                <div className='flex justify-between items-center'>
                 <img src={Image} alt="" className='size-8 rounded-full'/>
                  <HiOutlineDotsVertical/>
                </div>

                <h3 className='font-medium pt-1'>Ayomide Fatogun</h3>
                <p className='text-sm font-light'>Junior UI/UX Designer</p>

                <div className='flex  justify-between items-center pt-3 gap-4 '>
                  <div className='flex gap-1'>
                  <GrDocumentPdf className='w-2 text-blue-2'/>
                  <p className='text-xs text-blue-1'>Resume-ayomi.pdf</p>
                  </div>
                 

                  <div className='flex items-center gap-1'>
                    <IoLogoLinkedin className='w-2.5 text-blue-4'/>
                    <FaBehance className='w-2.5'/>
                    <FaDribbble className='w-2.5 text-bright'/>
                  </div>
                </div>


                <div className='flex justify-between items-center gap-3'>
                  <div className='mt-4 py-2 px-2.5 bg-blue-5 relative flex items-center justify-between rounded-md'>
                    <IoMail className='text-blue-1  items-center'/>
                    <button className=' text-blue-1  text-xs pl-1 capitalize'>Send email</button>
                  </div>
                  <div className='mt-4 py-2 px-2.5 bg-green-1 relative flex items-center justify-between rounded-md'>
                    <AiFillMessage className='text-green-2  items-center'/>
                    <button className=' text-green-2  text-xs pl-1 capitalize'>Message</button>
                  </div>
                </div>
                
              </div>


              <div className='shadow-3xl mr-6 px-6 py-4 h-48 rounded-xl'>
                <div className='flex justify-between items-center'>
                 <img src={Image} alt="" className='size-8 rounded-full'/>
                  <HiOutlineDotsVertical/>
                </div>

                <h3 className='font-medium pt-1'>Ayomide Fatogun</h3>
                <p className='text-sm font-light'>Junior UI/UX Designer</p>

                <div className='flex  justify-between items-center pt-3 gap-4 '>
                  <div className='flex gap-1'>
                  <GrDocumentPdf className='w-2 text-blue-2'/>
                  <p className='text-xs text-blue-1'>Resume-ayomi.pdf</p>
                  </div>
                 

                  <div className='flex items-center gap-1'>
                    <IoLogoLinkedin className='w-2.5 text-blue-4'/>
                    <FaBehance className='w-2.5'/>
                    <FaDribbble className='w-2.5 text-bright'/>
                  </div>
                </div>


                <div className='flex justify-between items-center gap-3'>
                  <div className='mt-4 py-2 px-2.5 bg-blue-5 relative flex items-center justify-between rounded-md'>
                    <IoMail className='text-blue-1  items-center'/>
                    <button className=' text-blue-1  text-xs pl-1 capitalize'>Send email</button>
                  </div>
                  <div className='mt-4 py-2 px-2.5 bg-green-1 relative flex items-center justify-between rounded-md'>
                    <AiFillMessage className='text-green-2  items-center'/>
                    <button className=' text-green-2  text-xs pl-1 capitalize'>Message</button>
                  </div>
                </div>
                
              </div>


              <div className='shadow-3xl mr-6 px-6 py-4 h-48 rounded-xl mt-4'>
                <div className='flex justify-between items-center'>
                 <img src={Image} alt="" className='size-8 rounded-full'/>
                  <HiOutlineDotsVertical/>
                </div>

                <h3 className='font-medium pt-1'>Ayomide Fatogun</h3>
                <p className='text-sm font-light'>Junior UI/UX Designer</p>

                <div className='flex  justify-between items-center pt-3 gap-4 '>
                  <div className='flex gap-1'>
                  <GrDocumentPdf className='w-2 text-blue-2'/>
                  <p className='text-xs text-blue-1'>Resume-ayomi.pdf</p>
                  </div>
                 

                  <div className='flex items-center gap-1'>
                    <IoLogoLinkedin className='w-2.5 text-blue-4'/>
                    <FaBehance className='w-2.5'/>
                    <FaDribbble className='w-2.5 text-bright'/>
                  </div>
                </div>


                <div className='flex justify-between items-center gap-3'>
                  <div className='mt-4 py-2 px-2.5 bg-blue-5 relative flex items-center justify-between rounded-md'>
                    <IoMail className='text-blue-1  items-center'/>
                    <button className=' text-blue-1  text-xs pl-1 capitalize'>Send email</button>
                  </div>
                  <div className='mt-4 py-2 px-2.5 bg-green-1 relative flex items-center justify-between rounded-md'>
                    <AiFillMessage className='text-green-2  items-center'/>
                    <button className=' text-green-2  text-xs pl-1 capitalize'>Message</button>
                  </div>
                </div>
                
              </div>


              <div className='shadow-3xl mr-6 px-6 py-4 h-48 rounded-xl mt-4'>
                <div className='flex justify-between items-center'>
                 <img src={Image} alt="" className='size-8 rounded-full'/>
                  <HiOutlineDotsVertical/>
                </div>

                <h3 className='font-medium pt-1'>Ayomide Fatogun</h3>
                <p className='text-sm font-light'>Junior UI/UX Designer</p>

                <div className='flex  justify-between items-center pt-3 gap-4 '>
                  <div className='flex gap-1'>
                  <GrDocumentPdf className='w-2 text-blue-2'/>
                  <p className='text-xs text-blue-1'>Resume-ayomi.pdf</p>
                  </div>
                 

                  <div className='flex items-center gap-1'>
                    <IoLogoLinkedin className='w-2.5 text-blue-4'/>
                    <FaBehance className='w-2.5'/>
                    <FaDribbble className='w-2.5 text-bright'/>
                  </div>
                </div>


                <div className='flex justify-between items-center gap-3'>
                  <div className='mt-4 py-2 px-2.5 bg-blue-5 relative flex items-center justify-between rounded-md'>
                    <IoMail className='text-blue-1  items-center'/>
                    <button className=' text-blue-1  text-xs pl-1 capitalize'>Send email</button>
                  </div>
                  <div className='mt-4 py-2 px-2.5 bg-green-1 relative flex items-center justify-between rounded-md'>
                    <AiFillMessage className='text-green-2  items-center'/>
                    <button className=' text-green-2  text-xs pl-1 capitalize'>Message</button>
                  </div>
                </div>
                
              </div>


              <div className='shadow-3xl mr-6 px-6 py-4 h-48 rounded-xl mt-4'>
                <div className='flex justify-between items-center'>
                 <img src={Image} alt="" className='size-8 rounded-full'/>
                  <HiOutlineDotsVertical/>
                </div>

                <h3 className='font-medium pt-1'>Ayomide Fatogun</h3>
                <p className='text-sm font-light'>Junior UI/UX Designer</p>

                <div className='flex  justify-between items-center pt-3 gap-4 '>
                  <div className='flex gap-1'>
                  <GrDocumentPdf className='w-2 text-blue-2'/>
                  <p className='text-xs text-blue-1'>Resume-ayomi.pdf</p>
                  </div>
                 

                  <div className='flex items-center gap-1'>
                    <IoLogoLinkedin className='w-2.5 text-blue-4'/>
                    <FaBehance className='w-2.5'/>
                    <FaDribbble className='w-2.5 text-bright'/>
                  </div>
                </div>


                <div className='flex justify-between items-center gap-3'>
                  <div className='mt-4 py-2 px-2.5 bg-blue-5 relative flex items-center justify-between rounded-md'>
                    <IoMail className='text-blue-1  items-center'/>
                    <button className=' text-blue-1  text-xs pl-1 capitalize'>Send email</button>
                  </div>
                  <div className='mt-4 py-2 px-2.5 bg-green-1 relative flex items-center justify-between rounded-md'>
                    <AiFillMessage className='text-green-2  items-center'/>
                    <button className=' text-green-2  text-xs pl-1 capitalize'>Message</button>
                  </div>
                </div>
                
              </div>


              <div className='shadow-3xl mr-6 px-6 py-4 h-48 rounded-xl mt-4'>
                <div className='flex justify-between items-center'>
                 <img src={Image} alt="" className='size-8 rounded-full'/>
                  <HiOutlineDotsVertical/>
                </div>

                <h3 className='font-medium pt-1'>Ayomide Fatogun</h3>
                <p className='text-sm font-light'>Junior UI/UX Designer</p>

                <div className='flex  justify-between items-center pt-3 gap-4 '>
                  <div className='flex gap-1'>
                  <GrDocumentPdf className='w-2 text-blue-2'/>
                  <p className='text-xs text-blue-1'>Resume-ayomi.pdf</p>
                  </div>
                 

                  <div className='flex items-center gap-1'>
                    <IoLogoLinkedin className='w-2.5 text-blue-4'/>
                    <FaBehance className='w-2.5'/>
                    <FaDribbble className='w-2.5 text-bright'/>
                  </div>
                </div>


                <div className='flex justify-between items-center gap-3'>
                  <div className='mt-4 py-2 px-2.5 bg-blue-5 relative flex items-center justify-between rounded-md'>
                    <IoMail className='text-blue-1  items-center'/>
                    <button className=' text-blue-1  text-xs pl-1 capitalize'>Send email</button>
                  </div>
                  <div className='mt-4 py-2 px-2.5 bg-green-1 relative flex items-center justify-between rounded-md'>
                    <AiFillMessage className='text-green-2  items-center'/>
                    <button className=' text-green-2  text-xs pl-1 capitalize'>Message</button>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
      </div>

    </div>
  )
}

export default Hero