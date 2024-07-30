import { useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

import ContactInformation from "./ContactInformation";

import "./style.css";

const LocationInformation = () => <div>Location Information Content</div>;
const Resume = () => <div>Resume Content</div>;
const Qualifications = () => <div>Qualifications Content</div>;
const JobPreference = () => <div>Job Preference Content</div>;

const UserProfileSettings = () => {
  // State to keep track of the main active tab
  const [mainActiveTab, setMainActiveTab] = useState(0);
  // State to keep track of the sub-tab under Personal Information
  const [personalInfoSubTab, setPersonalInfoSubTab] = useState(0);

  // Main tabs data
  const mainTabs = [
    {
      title: "Personal Information",
      content: (
        <div className="lg:flex lg:justify-between w-full">
          <div className="sub-tabs grid lg:w-[30%] space-y-3 h-fit">
            <button
              className={`sub-tab ${
                personalInfoSubTab === 0 ? "active" : ""
              } flex justify-between items-center h-fit`}
              onClick={() => setPersonalInfoSubTab(0)}
            >
              <div className="flex gap-x-3 items-center">
                <BiSolidContact size={25} /> Contact Information
              </div>{" "}
              <span className="">
                <IoIosArrowForward />
              </span>
            </button>
            <hr className="" />
            <button
              className={`sub-tab ${
                personalInfoSubTab === 1 ? "active" : ""
              } flex justify-between items-center h-fit`}
              onClick={() => setPersonalInfoSubTab(1)}
            >
              <div className="flex gap-x-3 items-center">
                <IoLocationSharp size={25} /> Location Information
              </div>{" "}
              <span className="">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
          <div className="sub-tab-content lg:w-[65%] mt-7 lg:mt-0">
            {personalInfoSubTab === 0 ? (
              <ContactInformation />
            ) : (
              <LocationInformation />
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Resume",
      content: <Resume />,
    },
    {
      title: "Qualifications",
      content: <Qualifications />,
    },
    {
      title: "Job Preference",
      content: <JobPreference />,
    },
  ];

  return (
    <div className="user-profile-settings space-y-8">
      {/* MAIN TABS */}
      <div className="main-tabs space-x-8">
        {mainTabs.map((tab, index) => (
          <button
            key={index}
            className={`main-tab ${mainActiveTab === index ? "active" : ""}`}
            onClick={() => setMainActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* MAIN TAB CONTENT */}
      <div className="main-tab-content">{mainTabs[mainActiveTab]?.content}</div>
    </div>
  );
};

export default UserProfileSettings;
