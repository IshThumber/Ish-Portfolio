import React from "react";
import Heading from "../components/Heading";
import { Input, Textarea } from "@material-tailwind/react";
import {
  ArrowBigUpDash,
  Github,
  Instagram,
  Linkedin,
  Send,
  Twitter
} from "lucide-react";

const Contact = () => {
  return (
    <>
      <div className="w-full">
        <Heading name="#Contact Me" />

        <div className="flex flex-col justify-center items-center -mt-5">
          <div className=" w-4/5 py-10 items-center sm:justify-center flex flex-col">
            <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-7 w-4/5 justify-center items-center">
              <div className="col-span-2 sm:col-span-1">
                <Input
                  className="shadowButton rounded-lg col-span-2 text-purple-500"
                  type="text"
                  color="purple"
                  label="Name"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 mt-3 sm:mt-0">
                <Input
                  className="shadowButton rounded-lg col-span-2 text-purple-500"
                  type="number"
                  color="purple"
                  label="Phone Number"
                />
              </div>
              <div className="col-span-2 mt-3">
                <Input
                  className="shadowButton rounded-lg col-span-2 text-purple-500"
                  type="email"
                  label="Email Address"
                />
              </div>
              <div className="col-span-2 sm:col-span-2 mt-3">
                <Input
                  className="shadowButton rounded-lg col-span-2 text-purple-500"
                  type="text"
                  color="purple"
                  label="Email Subject"
                />
              </div>

              <div className="col-span-2 sm:col-span-2 mt-3">
                <Textarea
                  className="shadowButton rounded-lg col-span-2 text-purple-500"
                  color="purple"
                  label="Message"
                />
              </div>

              <div className="col-span-2 sm:col-span-2 mt-3">
                <div className="flex sm:justify-start justify-end">
                  <div className="shadowButton w-fit border flex flex-row items-center gap-3 border-blue-gray-800 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-gray-100">
                    <span className="text-purple-500">Send</span>
                    <Send size={16} className="text-purple-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-4/5 mt-20 p-1 flex items-center">
              <h1 className="font-brandonMedium text-md text-left">
                Let's connect!
              </h1>

              <div className="ml-3 gap-3 flex items-center cursor-pointer">
                <div
                  className="shadowButton border border-blue-gray-800 p-2 rounded-full bg-blue-gray-100 cursor-pointer hover:bg-blue-gray-200"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/ishthumber/")
                  }
                >
                  <Linkedin size={16} className="text-blue-900" />
                </div>
                <div
                  className="shadowButton border border-blue-gray-800 p-2 rounded-full bg-blue-gray-100 cursor-pointer hover:bg-blue-gray-200"
                  onClick={() => window.open("https://github.com/IshThumber")}
                >
                  <Github size={16} className="text-gray-700" />
                </div>
                <div
                  className="shadowButton border border-blue-gray-800 p-2 rounded-full bg-blue-gray-100 cursor-pointer hover:bg-blue-gray-200"
                  onClick={() => window.open("https://twitter.com/ishthumber")}
                >
                  <Twitter size={16} className="text-blue-600" />
                </div>
                <div
                  className="shadowButton border border-blue-gray-800 p-2 rounded-full bg-blue-gray-100 cursor-pointer hover:bg-blue-gray-200"
                  onClick={() =>
                    window.open("https://www.instagram.com/__ish343__/")
                  }
                >
                  <Instagram size={16} className="text-pink-600" />
                </div>
              </div>
            </div>

            {/* back to top button */}
            <div className="p-2 flex justify-end items-center mt-10 -mb-9 sm:w-fit w-full">
              <div
                className="shadowButton sm:w-fit w-full justify-center flex flex-row gap-1 items-center border border-blue-gray-800 px-3 py-1 rounded-lg bg-white cursor-pointer hover:bg-blue-gray-200"
                // className="shadowButton w-full border flex flex-row items-center gap-3 border-blue-gray-800 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-gray-100"
                // scroll behaviour = "smooth"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }}
              >
                <span className="text-blue-gray-900 sm:text-xs text-sm">
                  Back to top
                </span>
                <ArrowBigUpDash className="text-blue-gray-900" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
