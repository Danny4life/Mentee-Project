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

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='box-border container mx-auto mt-8 w-full max-w-96 bg-white px-3'>
      <fieldset className='border-2 border-blue-1 mt-8 py-2 px-4'>
        <legend className='p-1 text-blue-1 text-sm'>Job Type</legend>
      <select id="options" value={selectedOption} onChange={handleChange} className='w-full font-normal border-none outline-none'>
        <option value="option1">Full-time</option>
        <option value="option2">Remote</option>
      </select>
      </fieldset>

      <fieldset className='border-2 border-blue-1 mt-8 py-2 px-4'>
        <legend className='p-1 text-blue-1 text-sm'>Job Category</legend>
      <select id="options" value={selectedOption} onChange={handleChange} className='w-full font-normal border-none outline-none'>
        <option value="option1">Engineering</option>
        <option value="option2">Front-end development</option>
        <option value="option3">Back-end development</option>
        <option value="option4">UI/UX design</option>
      </select>
      </fieldset>


        <div className='w-full mt-8'>
          <fieldset className='border-2 border-blue-1 px-4 py-2  h-[167px]'>
                <legend className=' text-blue-1 text-sm'>Job Description</legend>
                <div className="flex gap-3 cursor-pointer  ">
                    <img src={Icon} className='w-[18px] h-[18px]'/>
                    <img src={Italic} className='w-[18px] h-[18px]'/>
                    <img src={Under} className='w-[18px] h-[18px]'/>
                    <img src={Line} className='w-[18px] h-[18px]'/>
                    <img src={Link} className='w-[18px] h-[18px]'/>
                    <img src={Ol} className='w-[18px] h-[18px]'/>
                    <img src={Ul} className='w-[18px] h-[18px]'/>
                    <img src={Bq} className='w-[18px] h-[18px]'/>
                    <img src={Code} className='w-[18px] h-[18px]'/>
                </div>
            </fieldset>
            <img src={Divider} alt="" />
        </div>

    </div>

    
  );
};

export default Dropdown
