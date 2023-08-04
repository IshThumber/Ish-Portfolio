import React from "react";
import Heading from "../components/Heading";
import { Input } from "@material-tailwind/react";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <>
      <div className="w-full">
        <Heading name="#Contact Me" />

        <div className="flex flex-col justify-center items-center -mt-5">
          <div className="w-4/5 py-10 items-center sm:justify-center flex">
            <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-7 w-4/5 justify-center items-center">
              <div className="col-span-2 sm:col-span-1">
                <Input
                  className="shadowButton rounded-lg col-span-2 text-purple-500"
                  type="text"
                  color="purple"
                  label="Name"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Input
                  className="shadowButton rounded-lg col-span-2 text-purple-500"
                  type="number"
                  color="purple"
                  label="Phone Number"
                />
              </div>
              <div className="col-span-2 sm:mt-3">
                <Input
                  className="shadowButton rounded-lg col-span-2 text-purple-500"
                  type="email"
                  label="Email Address"
                  icon={
                    <Send
                      size={16}
                      className="!text-blue-gray-800 cursor-pointer"
                      onClick={() => console.log("Send email")}
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
