import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FiMail, FiSend } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_kapjr0f",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_0zncxjc",
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "SbxKwZ_SXmaMFw2s8"
      )
      .then(
        result => {
          toast.success("Message sent successfully!");
          setIsLoading(false);
          e.target.reset();
        },
        error => {
          toast.error("Failed to send message. Please try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <ToastContainer theme="dark" position="top-right" autoClose={3000} />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-6 p-8 bg-blue-gray-800/60 border border-blue-gray-700/50 rounded-2xl shadow-xl"
      >
        <h3 className="text-2xl font-bold text-wild-sand-100">
          Send me a message
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 bg-transparent border-2 rounded-lg outline-none border-blue-gray-700 text-wild-sand-200 focus:border-genoa-400 transition-colors"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 bg-transparent border-2 rounded-lg outline-none border-blue-gray-700 text-wild-sand-200 focus:border-genoa-400 transition-colors"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="p-3 bg-transparent border-2 rounded-lg outline-none border-blue-gray-700 text-wild-sand-200 focus:border-genoa-400 transition-colors"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-3 bg-transparent border-2 rounded-lg outline-none border-blue-gray-700 text-wild-sand-200 focus:border-genoa-400 transition-colors"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center justify-center gap-2 px-6 py-3 font-bold transition-all duration-300 rounded-lg shadow-lg w-fit bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-wild-sand-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <FiSend />
            </>
          )}
        </button>
      </form>
    </>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen transition-all duration-500">
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      <PageTransition>
        <div className="h-32" />

        <div className="relative w-[97%] md:w-5/6 p-2 lg:p-6 font-gtReg text-wild-sand-200 mx-auto">
          <div className="w-full m-auto mb-10 xl:w-full text-center md:text-left">
            <h1 className="font-black tracking-tight font-urbanist text-[4rem] lg:text-9xl bg-gradient-to-r from-purple-300 to-genoa-300 inline-block text-transparent bg-clip-text xl:w-fit w-full">
              Contact Me
            </h1>
          </div>

          <div className="flex flex-col-reverse xl:flex-row justify-between items-center gap-12 ">
            <section className="flex flex-col w-full gap-16 mt-8 xl:flex-row">
              <div className="xl:w-2/5">
                <h2 className="text-3xl font-bold text-wild-sand-100">
                  Let's Build Something Amazing.
                </h2>

                <p className="mt-4 text-wild-sand-200/80 leading-relaxed">
                  Have a project, an idea, or an opportunity you'd like to
                  discuss? I'm always open to new collaborations and creative
                  challenges.
                </p>
                <p className="mt-4 text-wild-sand-200/80 leading-relaxed">
                  The form is the quickest way to reach me, but you can also
                  send a direct email.
                </p>

                <div className="mt-8">
                  <a
                    href="mailto:ishthumber343@gmail.com"
                    className="inline-flex items-center gap-3 bg-blue-gray-800/70 border border-blue-gray-700/50 rounded-lg px-4 py-3 transition-all duration-300 hover:border-genoa-400/80 hover:bg-blue-gray-800/90 hover:shadow-lg hover:shadow-genoa-500/10 cursor-pointer"
                  >
                    <div className="text-genoa-300">
                      <FiMail size={22} />
                    </div>
                    <span className="font-medium text-wild-sand-200">
                      ishthumber343@gmail.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="xl:w-3/5">
                <ContactForm />
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </PageTransition>
    </div>
  );
};

export default Contact;
