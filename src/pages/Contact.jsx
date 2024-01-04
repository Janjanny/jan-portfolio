import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

const Contact = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const theme = useSelector((state) => state.theme);

  return (
    <div className="contact-container w-full min-h-screen bg-off-white pt-20">
      <div className="form-container grid grid-cols-2 w-10/12 mx-auto shadow-xl rounded-xl overflow-hidden ">
        <div className="illustration-div bg-black p-8">
          <h1 className=" text-off-white font-body font-bold text-center text-4xl uppercase">
            Contact Me
          </h1>
        </div>
        <div className="form-div bg-white p-8">
          <p className="text-center font-body text-base md:text-sm font-medium">
            Don't hesitate to reach out and drop me a message. I'm here to
            listen and ready to connect with you.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" className="border-2" />
            <label>Email</label>
            <input type="email" name="user_email" className="border-2" />
            <label>Message</label>
            <textarea name="message" className="border-2" />
            <input type="submit" value="Send" className="border-2" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
