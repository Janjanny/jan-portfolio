import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import graphics from "../assets/graphics.svg";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l6nchmq",
        "template_ihsnqz9",
        form.current,
        "Q2I17AG5lBrwZq4tU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={`contact-container w-full min-h-screen ${
        theme.darkMode ? "bg-black" : "bg-off-white "
      } pt-20 pb-52`}
      id="contact"
    >
      <div className="form-container grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto shadow-xl rounded-xl overflow-hidden ">
        <div className="illustration-div  bg-dark-card p-12 pb-0 flex flex-col justify-center items-center overflow-hidden">
          <h1 className=" text-off-white font-body font-bold text-center text-4xl sm:text-5xl uppercase">
            Contact Me
          </h1>
          <div className="graphics-container w-[25rem] h-[25rem] sm:w-[30rem] sm:h-[30rem] md:w-[35rem] md:h-[35rem] justify-self-end">
            <img
              src={graphics}
              alt=""
              className=" object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="form-div bg-white p-12">
          <p className="text-center font-body text-base md:text-sm font-medium">
            Don't hesitate to reach out and drop me a message. I'm here to
            listen and ready to connect with you.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col font-body mt-10"
          >
            <label className=" text-sm font-medium ">Name</label>
            <input
              type="text"
              name="user_name"
              className="border-2 rounded-md p-2 px-2 text-sm mb-5"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label className=" text-sm font-medium ">Email</label>
            <input
              type="email"
              name="user_email"
              className="border-2 rounded-md p-2 px-2 text-sm mb-5"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label className=" text-sm font-medium ">Message</label>
            <textarea
              name="message"
              className="border-2 rounded-md p-1 px-2 text-sm mb-5"
              cols={10}
              rows={8}
              required
              value={formData.message}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Send Message"
              className=" mt-8 border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all ease-linear self-center py-2 px-10 font-medium font-body cursor-pointer rounded-md active:bg-black active:text-white w-full md:w-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
