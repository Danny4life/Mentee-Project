import React from 'react';


const jobBody = () => {
  return (
    <div className='box-border'>
        <div className="container mx-auto mt-8 w-full max-w-96 bg-white px-3">
          <div className="w-full relative">
            <div>
              <div className='relative w-[16rem]  mx-auto'>
                <h1 className='items-center overflow-hidden text-blue-1 '>...........................................................................</h1>
              </div>

              <div className='absolute flex justify-between w-[16rem] top-0 right-[52px] items-center mt-1 z-10'>
                <p className='bg-blue-1 text-white rounded-[50%] w-6 h-6 text-center font-inter text-base'>1</p>
                <p className='bg-white rounded-[50%] w-6 h-6 text-center border font-inter text-base text-grey-5'>2</p>
                <p className='bg-white rounded-[50%] w-6 h-6 text-center font-inter border text-base text-grey-5'>3</p>
              </div>
            </div>

            <div className='w-full mt-1 flex justify-between text-xs mx-auto'>
              <p className='text-blue-1 capitalize t'>job information</p>
              <p className='text-blue-1 capitalize'>qualifucations and requirements</p>
              <p className='text-blue-1 capitalize'>contact details</p>
            </div>
          </div>


          <div className='w-full mt-8'>
              <form>
                <fieldset className='border-2 border-blue-1 py-2 px-4 '>
                  <legend className='p-1 text-blue-1 text-sm'>Job Title</legend>
                  <input type="text" required className='w-full border-none outline-none items-center'/>
                </fieldset>


                <fieldset className='border-2 border-blue-1 mt-8 py-2 px-4 '>
                  <legend className='p-1 text-blue-1 text-sm'>Number of people to hire for this job</legend>
                  <input type="text" required className='w-full border-none outline-none items-center'/>
                </fieldset>
              </form>


              <fieldset className='border-2 border-blue-1 mt-8 py-2 px-4 '>
                  <legend className='p-1 text-blue-1 text-sm'>Location to post this job</legend>
                  <input type="text" required className='w-full border-none outline-none items-center'/>
              </fieldset>
          </div>
            
        </div>
    </div>
  )
}

export default jobBody