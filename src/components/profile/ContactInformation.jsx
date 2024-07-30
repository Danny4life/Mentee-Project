import React from "react";
import { useForm } from "react-hook-form";
import "../authentication/loginSignup.css";

const ContactInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-3">
          <div className="w-full relative input-container">
            <input
              {...register("firstName", {
                required: "First Name is required",
                onChange: (e) => setValue("firstName", e.target.value),
                onBlur: (e) => setValue("firstName", e.target.value),
                onFocus: (e) => setValue("firstName", e.target.value),
              })}
              className={`input-container input-field w-full border py-2 my-2 px-4 bg-transparent rounded-md ${
                errors.firstName ? "border-red-600" : "border-blue-600"
              }`}
              placeholder=""
              type="text"
            />
            <div className="label text-blue-600">First Name</div>
            {errors.firstName && (
              <p className="text-red-600 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="w-full relative input-container">
            <input
              {...register("lastName", {
                required: "Last Name is required",
                onChange: (e) => setValue("lastName", e.target.value),
                onBlur: (e) => setValue("lastName", e.target.value),
                onFocus: (e) => setValue("lastName", e.target.value),
              })}
              className={`input-container input-field w-full border py-2 my-2 px-4 bg-transparent rounded-md ${
                errors.lastName ? "border-red-600" : "border-blue-600"
              }`}
              placeholder=""
              type="text"
            />
            <div className="label text-blue-600">Last Name</div>
            {errors.lastName && (
              <p className="text-red-600 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div className="w-full relative input-container">
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,}$/,
                  message: "Phone number is not valid",
                },
                onChange: (e) => setValue("phoneNumber", e.target.value),
                onBlur: (e) => setValue("phoneNumber", e.target.value),
                onFocus: (e) => setValue("phoneNumber", e.target.value),
              })}
              className={`input-container input-field w-full border py-2 my-2 px-4 bg-transparent rounded-md ${
                errors.phoneNumber ? "border-red-600" : "border-blue-600"
              }`}
              placeholder=""
              type="tel"
            />
            <div className="label text-blue-600">Phone number</div>
            {errors.phoneNumber && (
              <p className="text-red-600 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="w-full relative input-container">
            <input
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email address is not valid",
                },
                onChange: (e) => setValue("email", e.target.value),
                onBlur: (e) => setValue("email", e.target.value),
                onFocus: (e) => setValue("email", e.target.value),
              })}
              className={`input-container input-field w-full border py-2 my-2 px-4 bg-transparent rounded-md ${
                errors.email ? "border-red-600" : "border-blue-600"
              }`}
              placeholder=""
              type="email"
            />
            <div className="label text-blue-600">Email Address</div>
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md py-2 px-4"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInformation;
