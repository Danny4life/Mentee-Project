import React, { useState } from 'react';
import Icon from '../../assets/image/type-bold.png';
import Italic from '../../assets/image/type-italic.png';
import Under from '../../assets/image/type-underline.png';
import Link from '../../assets/image/link-45deg.png';
import Line from '../../assets/image/Line.png';
import Ol from '../../assets/image/list-ol.png';
import Ul from '../../assets/image/list-ul.png';
import Bq from '../../assets/image/blockquote-left.png';
import Code from '../../assets/image/code-slash.png';
import Divider from '../../assets/image/Horizontal Divider.png';
import Clip from '../../assets/image/paperclip.png';
import Emoji from '../../assets/image/emoji-smile.png';
import Trash from '../../assets/image/trash3.png';
import Send from '../../assets/image/send-fill.png';
import Down from '../../assets/image/chevron-down.png';
import Pipe from '../../assets/image/Pipe.png';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='box-border container mx-auto mt-8 w-full max-w-96 bg-white px-3 mb-4 md:max-w-[500px] font-inter'>
      <fieldset className='border-2 border-blue-1 mt-8 py-2 px-4 rounded-[4px]'>
        <legend className='p-1 text-blue-1 text-sm'>Job Type</legend>
      <select id="options" value={selectedOption} onChange={handleChange} className='w-full font-normal border-none outline-none'>
        <option value="option1">Full-time</option>
        <option value="option2">Remote</option>
      </select>
      </fieldset>

      <fieldset className='border-2 border-blue-1 mt-8 py-2 px-4 rounded-[4px]'>
        <legend className='p-1 text-blue-1 text-sm'>Job Category</legend>
      <select id="options" value={selectedOption} onChange={handleChange} className='w-full font-normal border-none outline-none'>
        <option value="option1">Engineering</option>
        <option value="option2">Front-end development</option>
        <option value="option3">Back-end development</option>
        <option value="option4">UI/UX design</option>
      </select>
      </fieldset>


        <div className='w-full mt-8  font-inter'>
          <fieldset className='border-2 relative border-blue-1 px-4 py-2  h-[167px] rounded-[4px]'>
                <legend className=' text-blue-1 text-sm'>Job Description</legend>
                <textarea placeholder='Type your message' className='w-full h-[70px] mt-8 border-none outline-none'></textarea>
                <div className="flex gap-3  absolute top-2">
                    <img src={Icon} className='w-[18px] h-[18px] cursor-pointer'/>
                    <img src={Italic} className='w-[18px] h-[18px] cursor-pointer'/>
                    <img src={Under} className='w-[18px] h-[18px] cursor-pointer'/>
                    <img src={Line} className='w-[18px] h-[18px] cursor-pointer'/>
                    <img src={Link} className='w-[18px] h-[18px] cursor-pointer'/>
                    <img src={Ol} className='w-[18px] h-[18px] cursor-pointer'/>
                    <img src={Ul} className='w-[18px] h-[18px] cursor-pointer'/>
                    <img src={Bq} className='w-[18px] h-[18px] cursor-pointer '/>
                    <img src={Code} className='w-[18px] h-[18px] cursor-pointer'/>
                </div>
                <img src={Divider} alt="" className='absolute top-8 right-[2px] w-full '/>

                <div className='flex justify-between items-center p-[2px]'>
                  <div className='flex justify-between w-[80px] '>
                  <img src={Clip} className='w-[18px] h-[18px] cursor-pointer'/>
                  <img src={Emoji} className='w-[18px] h-[18px] cursor-pointer'/>
                  <img src={Trash} className='w-[18px] h-[18px] cursor-pointer'/>
                  </div>

                  <div className='flex justify-between items-center w-[50px]'>
                  <img src={Send} className='w-[16px] h-[16px] cursor-pointer'/>
                  <img src={Pipe} className='w-[1px] h-[20px]'/>
                  <img src={Down} className='w-[12px] h-[12px] cursor-pointer mt-1'/>
                  </div>
                </div>

            </fieldset>
            
        </div>


        <div className='w-full flex justify-between items-center mt-6  font-inter'>
         <fieldset className='border-2 border-blue-1  px-2 py-2 rounded-[4px] md:w-[120px] md:px-[16px]py-[10px]'>
         <legend className='text-blue-1 text-xs'>Minimum Pay</legend>
          <input type="text" className='w-[80px] border-none  outline-none text-center font-inter' />
         </fieldset>

         <p>to</p>

         <fieldset className='border-2 border-blue-1  px-2 py-2  rounded-[4px] md:w-[120px] md:px-[16px]py-[10px] '>
         <legend className='text-blue-1 text-xs'>Maximum Pay</legend>
          <input type="text" className='w-[80px] border-none  outline-none text-center font-inter' />
         </fieldset>


          <fieldset className='border-2 font-inter border-blue-1 text-sm rounded-[4px] px-2 py-[11px] md:w-[200px] md:text-base'>
          <legend className='text-blue-1 text-sm'>Rate</legend>
          <select id="options"  value={selectedOption} onChange={handleChange} className='block w-full px-3 border-none outline-none'>
           <option value="option1">Per Month</option>
           <option value="option1">Per Year</option>
          </select>
          </fieldset>



        </div>

        <div className="flex justify-end w-full">
        <button className='bg-blue-1  text-white text-sm mt-6 py-2  rounded-xl md:py-2 px-4'>Continue</button>
        </div>

    </div>

    
  );
};

export default Dropdown
