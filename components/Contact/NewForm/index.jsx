"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoAlertCircleOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.post("/api/send-mail", data);
      notifySuccess();
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      notifyError();
    }
  };

  const notifyError = () => {
    toast.error("There was an issue sending your email!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notifySuccess = () => {
    toast.success("Email Sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <form
      className="w-full h-full gap-8 md:gap-4 flex flex-col justify-between items-start md:p-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col justify-start items-start gap-2  w-full">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          // defaultValue="test"
          {...register("name", { required: "Please enter a name" })}
          className="w-full p-2 bg-dark border border-light/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
        />
        {errors.name && (
          <span className="flex justify-start items-center gap-2">
            <IoAlertCircleOutline className="w-4 h-4" />
            {errors.name.message}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-2  w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          // defaultValue="test"
          {...register("email", { required: "Please enter an email" })}
          className="w-full p-2 bg-dark border border-light/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
        />
        {errors.email && (
          <span className="flex justify-start items-center gap-2">
            <IoAlertCircleOutline className="w-4 h-4" />
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-2  w-full">
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          style={{ resize: "none" }}
          // defaultValue="test"
          {...register("message", { required: "Please enter a message" })}
          className="w-full p-2 bg-dark border border-light/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
        />
      </div>
      {errors.message && (
        <span className="flex justify-start items-center gap-2">
          <IoAlertCircleOutline className="w-4 h-4" />
          {errors.message.message}
        </span>
      )}
      <div className="flex justify-start items-center gap-2 w-full ">
        <button
          className={`bg-light w-1/2 relative transition-all text-dark px-4 py-1 rounded-md   md:w-[8rem] ${
            loading
              ? "bg-[#773fc6] text-light"
              : "bg-white hover:bg-[#773fc6] hover:text-light"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading && (
            <AiOutlineLoading3Quarters className="w-6 h-6  absolute top-0 bottom-0 left-0 right-0 m-auto animate-spin" />
          )}
          Submit
        </button>
        <button
          className={`relative transition-all  px-4 py-1 rounded-md   w-1/2  md:w-[8rem] ${
            loading
              ? "bg-[#773fc6] text-light"
              : "bg-dark hover:bg-[#773fc6]  text-light border border-white/50 hover:border-dark"
          }`}
          type="reset"
          onClick={() => reset()}
          disabled={loading}
        >
          {loading && (
            <AiOutlineLoading3Quarters className="w-6 h-6  absolute top-0 bottom-0 left-0 right-0 m-auto animate-spin" />
          )}
          Reset Form
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
};

export default NewForm;
