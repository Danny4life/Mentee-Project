import React from "react";
import Checked from "../../assets/image/checked.png";
import Pwc from "../../assets/image/pwc.png";
import Paystack from "../../assets/image/payStack.png";
import Flutter from "../../assets/image/flutterWave.png";
import Menu from "../../assets/image/menu.png";

const FindBody = () => {
  return (
    <div className="cursor-default">
      <h1 className="text-lg md:text-xl font-semibold text-center mt-4 md:mt-8">
        Suggested employment opportunities
      </h1>
      <div className="flex flex-col md:flex-row mx-4 md:mx-8 mt-4 md:mt-8">
        <div className="flex-1 bg-white py-0 flex flex-col gap-4 md:pr-4">
          <div className="schedule mb-4">
            <h3 className="font-medium text-customGray mb-2">Schedule</h3>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Full time</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Part time</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Project work</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Volunteering</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Internship</p>
            </div>
          </div>
          <div className="employment mb-4 ">
            <h3 className="font-medium text-customGray mb-2">
              Employment type
            </h3>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Full Day</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Shift work</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Flexible schedule</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Distant work</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Shift method</p>
            </div>
          </div>
          <div className="professional mb-4">
            <h3 className="font-medium text-customGray mb-2">
              Professional level
            </h3>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Trainee level</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Junior</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Middle level</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Senior level</p>
            </div>
            <div className="flex items-center mb-2">
              <img
                src={Checked}
                alt="Checked"
                className="w-4 h-4 mr-2 hover:bg-customBlue"
              />
              <p>Director level</p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white w-[404px] h-[873px] pr-8 flex flex-col gap-2.5">
          <div className="gigs mb-4 p-4 border border-gray-300 shadow-lg rounded-lg hover:shadow-2xl">
            <div className="role flex justify-between items-center mb-2">
              <div className="role-type justify-between w-[300px]">
                <p className="text-sm">Price Waterhouse Coopers</p>
                <h1 className="text-lg font-semibold">
                  Junior Full-Stack Engineer
                </h1>
              </div>
              <img src={Pwc} alt="pwc-logo" className="w-12 h-12" />
            </div>
            <span className="block mb-2 text-customBlue">
              ₦ 500,000 - ₦ 700,000
            </span>
            <p className="text-sm mb-2">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="jobtype flex items-center justify-between">
              <button
                type="submit"
                className="bg-customBabyBlue w-[115px] h-[38px] rounded-[12px] px-4 py-2 mr-2 text-customText hover:text-white"
              >
                Remote
              </button>
              Lagos, Nigeria
            </div>
          </div>
          <div className="gigs mb-4 p-4 border border-gray-300 shadow-lg rounded-lg hover:shadow-2xl">
            <div className="role flex justify-between items-center mb-2">
              <div className="role-type">
                <p className="text-sm">Paystack</p>
                <h1 className="text-lg font-semibold">Mid Product Designer</h1>
              </div>
              <img src={Paystack} alt="paystack-logo" className="w-12 h-12" />
            </div>
            <span className="block mb-2 text-customBlue">
              ₦ 600,000 - ₦ 800,000
            </span>
            <p className="text-sm mb-2">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="jobtype flex items-center justify-between">
              <button
                type="submit"
                className="bg-customGreen w-[115px] h-[38px] rounded-[12px] px-4 py-2 mr-2 text-customGreenText hover:text-white"
              >
                Hybrid
              </button>
              Lagos, Nigeria
            </div>
          </div>
          <div className="gigs mb-4 p-4 border border-gray-300 shadow-lg rounded-lg hover:shadow-2xl">
            <div className="role flex justify-between items-center mb-2">
              <div className="role-type">
                <p className="text-sm">Flutterwave</p>
                <h1 className="text-lg font-semibold">Senior Front-End Dev.</h1>
              </div>
              <img src={Flutter} alt="flutter-logo" className="w-12 h-12" />
            </div>
            <span className="block mb-2 text-customBlue">
              ₦ 500,000 - ₦ 700,000
            </span>
            <p className="text-sm mb-2">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <div className="jobtype flex items-center justify-between">
              <button
                type="submit"
                className="bg-customBabyBlue text-customText w-[115px] h-[38px] rounded-[12px] px-4 py-2 mr-2 hover:text-white"
              >
                Remote
              </button>
              Lagos, Nigeria
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white w-[547px] h-[803px]">
          <div
            className="apply mb-4 p-4 border border-gray-300 shadow-lg rounded-lg hover:shadow-2xl"
            style={{
              width: "380px",
              borderRadius: "12px",
              borderWidth: "0.5px",
              padding: "24px",
            }}
          >
            <div className="menu flex justify-between items-center mb-2">
              <img src={Pwc} alt="Pwc-logo" className="w-12 h-12" />
              <img src={Menu} alt="menu-bar" />
            </div>
            <p className="text-sm mb-1">Price Waterhouse Coopers</p>
            <h1 className="text-lg font-semibold mb-1">
              Junior Full-Stack Engineer
            </h1>
            <span className="text-customBlue flex text-center">
              <h4> ₦ 500,000 - ₦ 700,000/ </h4>
              <h6 className="text-xs">per month</h6>
            </span>
            <p className="text-sm mb-2">Lagos, Nigeria</p>
            <button
              type="submit"
              className="bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-400"
            >
              Apply now
            </button>
          </div>

          <h1 className="text-xl font-semibold p-2">JOB DESCRIPTION</h1>
          <p className="text-sm mb-2 px-2 font-semibold">
            We are seeking a talented and motivated Junior Full-Stack Engineer
            to join our dynamic team. As a Junior Full-Stack Engineer, you will
            work closely with our development team to create, maintain, and
            optimize web applications. This is an excellent opportunity for
            someone looking to kick-start their career in full-stack development
            and gain hands-on experience with modern technologies.
          </p>
          <h1 className="text-xl font-semibold p-2">RESPONSIBILITIES</h1>
          <ul className="list-disc list-inside text-sm mb-2 px-2 font-semibold">
            <li>
              Collaborate with cross-functional teams to design, develop, and
              maintain web applications
            </li>
            <li>
              Work on both front-end and back-end development tasks,
              contributing to the full software development lifecycle
            </li>
            <li>
              Participate in code reviews, troubleshoot issues, and optimize
              application performance
            </li>
            <li>
              Stay up-to-date with emerging technologies and industry trends,
              applying them to your work as appropriate
            </li>
            <li>
              Communicate effectively within the team, sharing ideas and
              insights to help improve our products
            </li>
          </ul>
          <h4 className="text-customBlue cursor-pointer p-4 items-end flex justify-end">
            See more {" >"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FindBody;
