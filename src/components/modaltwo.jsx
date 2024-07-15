
import sent_icon from '../assets/sent_icon.png'


// please check the readme 

function App(){
    return( <div className=" bg-blue-1 flex justify-center items-center h-[100vh]" >
                            <div className="rounded-[15px] bg-[var(--color-light-light,#FCFCFD)] flex flex-col items-center p-[32px_31px_32px_31px] box-sizing-border w-[544px]">
           
             

                    <div className="m-[0_0_32px_0] flex box-sizing-border  ">
                    <span className="text-center break-words font-['Inter'] w-[300px] font-[var(--heading-h-4-font-weight,500)] text-[24px] leading-[var(--heading-h-4-line-height,1.333)] text-[var(--blue-1,#2F80ED)]">
                      Your email has been successfully verified!
                    </span>
                  </div>
                  <div className="rounded-[40px] bg-[#EFF8FF] relative m-[0_0_32px_0] flex justify-center items-center  w-[80px] h-[80px] border-[2px solid white]">
                    
                      <img className="w-[100px] h-[100%] mr-[50%] ml-[50%]" src={sent_icon} /> 
                  
                  </div>
                  <div className="m-[0_0_32px_0] inline-block text-center break-words font-['Inter'] font-[var(--heading-h-6-font-weight,500)] text-[16px] leading-[var(--heading-h-6-line-height,1.375)] text-[var(--gray-3,#828282)]">
                    You will get an email confirmation at ayomidefatogun@gmail.com
                  </div>
             

                 <div className="rounded-[12px] text-center  bg-[var(--blue-1,#2F80ED)] p-[16px_0.4px_16px_0] w-[100%] box-sizing-border">
                  <span class="break-words font-['Inter']   font-[var(--button-semi-bold-normal-font-weight,600)] text-[16px] leading-[var(--button-semi-bold-normal-line-height,1)] text-[var(--color-light-light,#FCFCFD)]">
                Continue
              </span>
            </div>
          </div>
          </div>
        
      
   
    )
}

export default App

