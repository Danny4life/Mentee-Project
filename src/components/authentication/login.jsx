import { FaEyeSlash } from "react-icons/fa";
import LoginSignupHeading from "./loginSignupHeading";
import "./loginSignup.css";
import NavLink from "../reusables/NavLink";
function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" form-container h-[100vh] flex flex-col items-center justify-center text-black bg-background bg-cover bg-center">
      <div className=" px-6 my-4 h-[420px]  lg:w-[400px] sm: w-[270px] bg-white rounded-lg ">
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
                type="email"
              />
              <div className="label text-blue-600">Enter Address</div>
            </div>
            <div className="w-full relative input-container">
              <input
                className=" input-field w-full border border-blue-600 py-2 px-4 my-2 bg-transparent rounded-md"
                placeholder=""
                type="password"
              />
              <div className="label text-blue-600">Password</div>
              <FaEyeSlash className="absolute top-[35%] right-3" />
            </div>
            <p>
              <a href="/" className="underline text-blue-400 inter-uniquifier">
                Forget Password
              </a>
            </p>
            <button
              type="submit"
              className="w-full my-2 pb-1 py-1 bg-blue-600 text-white rounded-lg inter-uniquifier"
            >
              Login
            </button>
          </form>
        </div>
        <div className="text-center text-xs inter-uniquifier font-light sm:text-xs">
          <span>
            {" "}
            Don't have an account?
            <button className="inter-uniquifier font-thin text-xs sm:text-xs text-blue-600">
              <NavLink to="/register">Sign up here</NavLink>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
