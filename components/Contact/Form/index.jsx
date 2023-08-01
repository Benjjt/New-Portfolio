import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IoAlertCircleSharp } from "react-icons/io5";

const Form = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission logic here
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to me.",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };

  return (
    <form
      className="p-8 flex flex-col justify-start items-start gap-8 w-full "
      action="https://api.staticforms.xyz/submit"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <label className="text-lg text-light/80">Name</label>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required",
            maxLength: {
              value: 20,
              message: "Name should be no longer than 20 characters",
            },
          }}
          render={({ field }) => (
            <input
              className="p-2 rounded-md bg-dark border border-light/50 w-full focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
              {...field}
            />
          )}
        />
        {errors.name && (
          <span className="text-white flex justify-start text-sm items-center gap-2">
            <IoAlertCircleSharp className="w-6 h-6" />
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <label className="text-lg text-light/80">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          }}
          render={({ field }) => (
            <input
              className="p-2 rounded-md bg-dark border border-light/50 w-full focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
              {...field}
            />
          )}
        />
        {errors.email && (
          <span className="text-white flex justify-start text-sm items-center gap-2">
            <IoAlertCircleSharp className="w-6 h-6" />
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <label className="text-lg text-light/80">Message</label>
        <Controller
          name="message"
          control={control}
          rules={{
            required: "Message is required",
            maxLength: {
              value: 250,
              message: "Message should be no longer than 250 characters",
            },
          }}
          render={({ field }) => (
            <textarea
              className="p-2 rounded-md bg-dark border border-light/50 w-full focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
              {...field}
              rows="5"
              style={{ resize: "none" }}
            />
          )}
        />
        {errors.message && (
          <span className="text-white flex justify-start text-sm items-center gap-2">
            <IoAlertCircleSharp className="w-6 h-6" />
            {errors.message.message}
          </span>
        )}
      </div>
      <div className="flex justify-start items-center gap-8">
        <button
          className="text-lg border border-light/50 bg-light text-dark px-5 w-[8rem] py-1 rounded-lg hover:scale-105 hover:cursor-pointer transition-all"
          type="submit"
        >
          Submit
        </button>
        <button className="text-lg border border-light/50  text-light px-5 w-[8rem] py-1 rounded-lg hover:scale-105 hover:cursor-pointer transition-all">
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
