import vector from '../assets/Vector (2).png'
import vector2 from '../assets/Vector (1).png'
import vector3 from '../assets/Vector (4).png'
import vector4 from '../assets/Vector (3).png'

// please check the readme 

function Forgotpassword() {
        return (
          <div className=" h-[1024px] w-hug[1440px] py-[150px] relative bg-[#D1E9FF] border-solid 
          box-border border-0 border-black m-auto flex:justify-center items-center; ">

            <div className="border-0 border-black bg-gray z-index-[-100] absolute top-[0px] right-[0px]
            w-[509.6px] h-[503.5px] ">
             <img className='pl-[20px] w-[100%] h-[85%] ' src={vector} alt="" srcset="" />
            </div>
            <div className="border-0 border-black bg-gray w-[653.7px] h-[657.3px] absolute
            top-[0px] left-[-141px]">
              <img className='pl-[20px] w-[100%] h-[80%] ' src={vector2} alt="" srcset="" />
            </div>
            
            <div className="border-0 border-black bg-gray w-[638px] h-[689px] absolute 
            bottom-0 left-0">
              
              <img className='pt-[85px]   w-[100%] h-[100%] ' src={vector3} alt="" srcset="" />
            </div>
            <div className="border-0 border-black bg-gray w-[509.6px] h-[673.8px] 
            absolute bottom-0 right-0">
               <img className='pt-[120px] pl-[40px]  w-[100%] h-[100%] ' src={vector4} alt="" srcset="" />
            </div> 

                <div className="bg-[#FFFFFF] border-2 m-auto h-[446px] w-[565px]  
                border-black box-border flex;  p-[32px] flex-col shadow-2xl rounded-2xl justify-center items-center relative z-index-[10]">
                    <div className="text-blue-1 font-normal font-logo text-4xl mt-0 mr-[0.2px] mb-4 ml-0  
                     break-words text-center flex items-center justify-center ">
                        SWIFTSELECT
                    </div>
                      
                    <span className="flex items-center justify-center text-black-1 text-center width-[247] h-[34] break-words font-inter font-bold text-2xl
                    leading-6 ">
                        Reset your password
                    </span>
                    <br />
                    
                        <div className="text-black-1 text-center mb-8 inline-block break-words font-inter ">
                            Enter email below and we will send you instructions on how to 
                            reset your password
                        </div>
                            
                              <span className="bg-[#FFFFFF] p-1 relative mt-[-100px] ml-[15px]  border-black border-solid text-blue-1 z-10  w-[92px] h-5 break-words font-inter font-normal text-sm">
                                        Email Address
                              </span>
                              <div className="bg-gray relative mt-[-10px]  mb-8 pt-[18px]  pl-[15px] box-border w-[500px] h-[60px] 
                                border-2 border-black border-solid border-blue-400 z-1]">
                                  <div class frame-64>
                                        <input className="bg-black" type="email" placeholder="ayomidefatogun@gmail.com"/>
                                      </div>
                              </div>
                              {/* reset div */}
                              <div className="m-[0_9px_0_9px] flex flex-col items-center w-[482px] box-sizing-border">
                              <div className="rounded-[12px] bg-[var(--blue-1,#2F80ED)] m-[0_0_24px_0] flex p-[12px_0.4px_12px_0] w-[482px] box-sizing-border">
                                <span className="break-words  font-['Inter'] font-[var(--button-semi-bold-14-font-weight,600)]
                                text-[14px] leading-[var(--button-semi-bold-14-line-height,1.429)] text-[var(--white-1,#FFFFFF)] text-center m-auto">
                                  Send reset instructions
                                </span>
                              </div>
                              <p class="m-[0_0.4px_0_0] break-words font-['Inter'] w-[122] h-[20] font-[var(--button-normal-14-font-weight,400)]
                              text-[14px] leading-[var(--button-normal-14-line-height,1.429)] text-[var(--grey-400,#98A2B3)]">
                                <span className="text-2-sub-0"> Go Back to</span>
                                <span className="text-blue-1 font-inter font-normal"> Sign in </span>
                              </p>
                        </div>
                              
                            
                  </div>
            
        </div>
    )
  }
  
  export default Forgotpassword;