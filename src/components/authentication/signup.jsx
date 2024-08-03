import { FaEyeSlash } from "react-icons/fa";
import LoginSignupHeading from "./loginSignupHeading";
import "./loginSignup.css";
import NavLink from "../reusables/NavLink";
function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" form-container h-[100%] flex flex-col items-center justify-center text-black bg-background bg-cover bg-center">
      <div className=" px-6 my-4 h-[620px]  lg:w-[400px] sm: w-[270px] bg-white rounded-lg ">
        <div>
        <LoginSignupHeading/>
          <form
            className="fex flex-col items-center"
            action=""
            onSubmit={handleSubmit}
          >
            <div className="w-full relative input-container">
              <input
                className=" input-container input-field w-full border border-blue-600 py-2 my-2 px-4 bg-transparent rounded-md"
                placeholder=""
                type="text"
              />
              <div className="label text-blue-600">First Name</div>
            </div>
            <div className="w-full relative input-container">
              <input
                className=" input-container input-field w-full border border-blue-600 py-2 my-2 px-4 bg-transparent rounded-md"
                placeholder=""
                type="text"
              />
              <div className="label text-blue-600">Laset Name</div>
            </div>
            <div className="w-full relative input-container">
              <input
                className=" input-container input-field w-full border border-blue-600 py-2 my-2 px-4 bg-transparent rounded-md"
                placeholder=""
                type="tel"
              />
              <div className="label text-blue-600">Phone Number</div>
            </div>
            <div className="w-full relative input-container">
              <input
                className=" input-container input-field w-full border border-blue-600 py-2 my-2 px-4 bg-transparent rounded-md"
                placeholder=""
                type="email"
              />
              <div className="label text-blue-600">Email Address</div>
            </div>
            <div className="w-full relative input-container">
              <input
                className=" input-container input-field w-full border border-blue-600 py-2 my-2 px-4 bg-transparent rounded-md"
                placeholder=""
                type="password"
              />
              <div className="label text-blue-600">Password</div>
              <FaEyeSlash className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative input-container">
              <input
                className=" input-field w-full border border-blue-600 py-2 px-4 my-2 bg-transparent rounded-md"
                placeholder=""
                type="password"
              />
              <div className="label text-blue-600">Confirm Password</div>
              <FaEyeSlash className="absolute top-[35%] right-3" />
            </div>
            <button className="w-full my-2 pb-1 py-1 bg-blue-600 text-white rounded-lg inter-uniquifier">
              Login
            </button>
          </form>
          <div className="text-center text-xs inter-uniquifier font-light sm:text-xs">
            <span>
              Aready have an account?
              <button className="inter-uniquifier font-thin text-xs sm:text-xs text-blue-600">
                <NavLink to="/login">Sign in here</NavLink>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
