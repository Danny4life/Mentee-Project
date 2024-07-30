import React from "react";
import GeneralLayout from "../components/layouts/HomeLayout";
import image from "../assets/image/imgIcon.png";
import Screen from "../components/profile/Screen";

function ProfilePage() {
  return (
    <GeneralLayout>
      <div className="w-[90%] mx-auto">
        <div className="w-5/6 ml-auto my-5 space-y-10">
          {/* TOP HEADER */}
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-3xl">Ayomide Fatogun</h2>
            <div className="flex items-end gap-x-4">
              <img
                src={image}
                alt="Profile image"
                className="w-24 h-24 rounded-full"
              />
              <button
                type="button"
                className="border border-blue-1 text-blue-1 py-1 px-3 text-sm rounded-md"
              >
                Change Avatar
              </button>
              <button className="text-red-500 font-medium">Delete</button>
            </div>
          </div>

          <div className="">
            <Screen />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default ProfilePage;
