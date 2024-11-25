"use client";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from "react-toastify";
import "@styles/pages/contact.scss";
// import react toastify css from package
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xel056x","template_4puomul",
        form.current,
        "TNOxyuk24P7orssRV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message Sent", {
      position: "bottom-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    e.target.reset();
  };
  return (
    <div className="main contact">
      <div className="contact-wrapper">
        <div className="c-title">Get in Touch</div>
        <div className="form">
          <div className="num">
            <div className="num-contain">01</div>
            <div className="num-contain">02</div>
            <div className="num-contain">03</div>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="text-form">
              <div className="form-contain">
                <input type="text" name="user_name" placeholder="Name" />
              </div>
              <div className="form-contain">
                <input type="text" name="user_email" placeholder="E-mail" />
              </div>
              <div className="form-contain">
                <textarea type="text" name="message" placeholder="Message" />
              </div>
            </div>
            <div className="submit">
              <input type="submit" className="button-submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
