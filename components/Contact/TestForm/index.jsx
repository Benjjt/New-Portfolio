import { useState } from "react";
import { IoCheckmarkCircleSharp, IoAlertCircleSharp } from "react-icons/io5";

const TestForm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "StaticForms - Contact Form",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: "d0db2f66-c9be-459e-847b-d540238f5815", // get your access key from https://www.staticforms.xyz
  });

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
      action="https://api.staticforms.xyz/submit"
      method="post"
      onSubmit={handleSubmit}
      className="w-full h-full   gap-4 flex flex-col justify-between items-start p-8"
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
      <div className="flex justify-start items-center gap-2 mt-auto">
        <button
          className="bg-light transition-all text-dark px-4 py-1 rounded-md  hover:bg-[#773fc6] hover:text-light  w-[8rem]"
          type="submit"
        >
          Submit
        </button>
        <button
          type="reset"
          className="bg-dark transition-all text-light px-4 py-1 rounded-md border hover:border-[#773fc6]  w-[8rem]"
        >
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
