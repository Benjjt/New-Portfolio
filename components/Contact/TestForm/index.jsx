import { useState } from "react";
import { IoCheckmarkCircleSharp, IoAlertCircleSharp } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const TestForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "StaticForms - Contact Form",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: `6320e144-7696-405a-9ac6-7713f4c19627`, // get your access key from https://www.staticforms.xyz
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const resetForm = () => {
    setContact({ ...contact, name: "", email: "", message: "" });
  };

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    console.log("handle submit called");
    setLoading(true);
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        resetForm();
        setResponse({
          type: "success",
          message: "Thank you for reaching out to me!",
        });
        setLoading(false);
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
        setLoading(false);
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
      setLoading(false);
    }
  };
  return (
    <form
      action="https://api.staticforms.xyz/submit"
      method="post"
      onSubmit={handleSubmit}
      className="w-full h-full   gap-8 md:gap-4 flex flex-col justify-between items-start md:p-8"
    >
      <div className="flex flex-col justify-start items-start gap-2  w-full">
        <label className="label">Name</label>
        <input
          className="w-full p-2 bg-dark border border-light/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
          type="text"
          placeholder="Enter a name"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-2  w-full">
        <label className="label">Email</label>
        <input
          className="w-full p-2 bg-dark border border-light/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
          type="email"
          value={contact.email}
          placeholder="Enter an email so I can get back to you"
          name="email"
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ display: "none" }}>
        <label className="label">Title</label>
        <div className="control">
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <input type="hidden" name="subject" onChange={handleChange} />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-2  w-full">
        <label className="label">Message</label>
        <textarea
          className="w-full p-2 bg-dark border border-light/50 rounded-md focus:outline-none focus:ring-2 focus:ring-[#773fc6]"
          style={{ resize: "none" }}
          placeholder="Your Message"
          value={contact.message}
          name="message"
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-start items-center gap-2 mt-auto w-full ">
        <button
          className={`bg-light relative transition-all text-dark px-4 py-1 rounded-md   w-1/2  md:w-[8rem] ${
            loading
              ? "bg-white/50 text-light"
              : "bg-white hover:bg-[#773fc6] hover:text-light"
          }`}
          type="submit"
          disabled={loading}
        >
          {loading && (
            <AiOutlineLoading3Quarters className="fill-[#773fc6] absolute w-6 h-6 animate-spin left-0 right-0 top-0 bottom-0 m-auto" />
          )}
          Submit
        </button>
        <button
          className={` relative transition-all border  px-4 py-1 rounded-md   w-1/2  md:w-[8rem] ${
            loading
              ? "bg-dark/50 text-light  border-white/50"
              : "bg-dark border-white/50 hover:bg-[#773fc6] hover:text-light"
          }`}
          type="reset"
          disabled={loading}
        >
          {loading && (
            <AiOutlineLoading3Quarters className="fill-[#773fc6] absolute w-6 h-6 animate-spin left-0 right-0 top-0 bottom-0 m-auto" />
          )}
          Clear
        </button>
      </div>
      {response && (
        <div className="flex justify-start items-center gap-3">
          {response.type === "success" && <IoCheckmarkCircleSharp />}
          {response.type === "error" && <IoAlertCircleSharp />}
          <span> {response.message}</span>
        </div>
      )}
    </form>
  );
};

export default TestForm;
