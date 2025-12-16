import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FiMail, FiSend, FiUser, FiMessageSquare, FiType } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import CustomHeadings from "../components/CustomHeadings";

const ContactForm = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        toast.success("Message sent successfully!", result);
        setIsLoading(false);
        e.target.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
        setIsLoading(false);
      }
    );
  };

  return (
    <>
      <ToastContainer theme="dark" position="bottom-center" autoClose={3000} className="" />

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 p-8 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl relative overflow-hidden group"
      >
        {/* Subtle Gradient Background for Form */}
        <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />

        <h3 className="text-2xl font-bold font-urbanist text-gray-100 mb-2">Send me a message</h3>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="relative group/input">
            <FiUser className="absolute left-4 top-4 text-gray-500 group-focus-within/input:text-purple-400 transition-colors" aria-hidden="true" />
            <label htmlFor="from_name" className="sr-only">
              Your Name
            </label>
            <input
              id="from_name"
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              aria-required="true"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-900/50 border border-gray-700/50 rounded-xl outline-none text-gray-200 placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-gray-900/80 transition-all duration-300"
            />
          </div>
          <div className="relative group/input">
            <FiMail className="absolute left-4 top-4 text-gray-500 group-focus-within/input:text-purple-400 transition-colors" aria-hidden="true" />
            <label htmlFor="user_email" className="sr-only">
              Your Email
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              aria-required="true"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-900/50 border border-gray-700/50 rounded-xl outline-none text-gray-200 placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-gray-900/80 transition-all duration-300"
            />
          </div>
        </div>

        <div className="relative group/input">
          <FiType className="absolute left-4 top-4 text-gray-500 group-focus-within/input:text-purple-400 transition-colors" aria-hidden="true" />
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
            aria-required="true"
            className="w-full pl-11 pr-4 py-3.5 bg-gray-900/50 border border-gray-700/50 rounded-xl outline-none text-gray-200 placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-gray-900/80 transition-all duration-300"
          />
        </div>

        <div className="relative group/input">
          <FiMessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within/input:text-purple-400 transition-colors" aria-hidden="true" />
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            aria-required="true"
            className="w-full pl-11 pr-4 py-3.5 bg-gray-900/50 border border-gray-700/50 rounded-xl outline-none text-gray-200 placeholder:text-gray-500 focus:border-purple-500/50 focus:bg-gray-900/80 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="group flex items-center justify-center gap-2 px-8 py-4 mt-2 font-bold transition-all duration-300 rounded-xl shadow-lg w-full sm:w-fit bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Message</span>
              <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </motion.form>
    </>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />

      <PageTransition>
        {/* Background Texture */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "radial-gradient(#4b5563 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        ></div>

        <div className="h-24 lg:h-32" />

        <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 mt-4">
          {/* Header Section */}

          <CustomHeadings heading="Contact" subHeading="Get in Touch" description="I'm here to help you turn your ideas into reality." gradientColor="gradient-contact" />
          {/* <section className="mb-12 text-center lg:text-left">
            <motion.h1
              className="font-black font-heading text-6xl md:text-8xl lg:text-9xl tracking-tighter text-gray-100 opacity-10 uppercase select-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.1, x: 0 }}
              transition={{ duration: 1 }}
            >
              HELLO
            </motion.h1>
            <motion.div className="-mt-12 md:-mt-20 lg:-mt-24 ml-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <span className="text-6xl ml-5 font-bold bg-gradient-to-r from-[#d8deed] to-[#8e95c6] bg-clip-text text-transparent font-signature tracking-wider">Get in Touch</span>
              <p className="text-gray-400 mt-2 text-lg">I'm here to help you turn your ideas into reality.</p>
            </motion.div>
          </section> */}

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Column: Text & Info */}
            <motion.div className="lg:w-2/5 flex flex-col gap-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              <div>
                <h2 className="text-3xl font-bold text-gray-100 font-urbanist">Let's Build Something Amazing.</h2>
                <p className="mt-4 text-gray-400 leading-relaxed text-lg">
                  Have a project idea, a question, or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:ishthumber343@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/60 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium mb-0.5">Mail me at</p>
                    <span className="text-lg font-bold text-gray-200 group-hover:text-purple-300 transition-colors">ishthumber343@gmail.com</span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <div className="lg:w-3/5">
              <ContactForm />
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />
    </div>
  );
};

export default Contact;
