import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./loginSignup.css"
function Login(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className=" form-container h-[100vh] flex flex-col items-center justify-center text-black bg-background bg-cover bg-center">
            <div className=" px-6 my-4 h-[400px]  lg:w-[400px] sm: w-[270px] bg-white rounded-lg ">
                <div>
                    <h2 className="hanalei-fill-regular lg:text-4xl font-bold pb-2 py-2 text-center text-blue-600  sm:text-2xl ">SWIFTSELECT</h2>
                    <h3 className="welcome-msg text-center my-2">Welcome back to SwiftSlect </h3>
                    <button className="google-btn w-full my-2 pb-1 py-1 rounded-lg relative"><FcGoogle className=" absolute lg:bottom-2 lg:left-20 md:bottom-2 md:left-5 border-white border-2 sm:bottom-2 sm:left-5 " />Sign in with Goggle</button>

                    <div class="relative flex py-1 items-center">
                        <div class="flex-grow border-t border-gray-400"></div>
                        <span class="flex-shrink mx-4 text-gray-400">OR</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <form className="fex flex-col items-center" action="" onSubmit={handleSubmit}>

                        <div className="w-full relative input-container">
                            <input className=" input-container input-field w-full border border-blue-600 py-2 my-2 px-4 bg-transparent rounded-md" placeholder="" type="email" />
                            <div className="label text-blue-600">Enter Address</div>
                        </div>
                        <div className="w-full relative input-container">
                            <input className=" input-field w-full border border-blue-600 py-2 px-4 my-2 bg-transparent rounded-md" placeholder="" type="password" />
                            <div className="label text-blue-600">Password</div>
                            <FaEyeSlash className="absolute top-[35%] right-3" />
                        </div>
                        <p><a href="/" className="underline text-blue-400 inter-uniquifier">Forget Password</a></p>
                        <button type="submit" className="w-full my-2 pb-1 py-1 bg-blue-600 text-white rounded-lg inter-uniquifier">Login</button>
                    </form>
                </div>
                <div className="text-center text-xs inter-uniquifier font-light sm:text-xs">
                            <span > Don't have an account?
                                <button onClick={()=>props.onFormSwitch("signup")}  className="inter-uniquifier font-thin text-xs sm:text-xs text-blue-600">Sign in here</button></span></div>
                </div>
                
                
            </div>

        



    )
}

export default Login