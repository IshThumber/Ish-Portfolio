import React from "react";
import error from "../assets/error.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Error = () => {
  const windowLocation = window.location.href;

  return (
    <>
      <div className="w-full h-screen bg-[#F8F6F4]">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center">
            <img
              className="w-5/6 p-3 border-2 border-gray-900 rounded-lg img-responsive md:w-1/2 shadowButton"
              src={error}
              alt="error"
            />

            <h1 className="font-thin text-md md:text-lg mt-14 font-ikaros">
              <span className="underline ">{windowLocation}</span>
              <span> does not exist.</span>
            </h1>

            <h1 className="font-thin text-md md:text-lg font-ikaros">
              <span>Please check the URL or </span>
            </h1>
            <Button
              variant="outlined"
              className="shadowButton bg-green-100 hover:bg-green-600 text-blue-gray-800 hover:text-blue-gray-50 border-gray-900 border-2 py-3 rounded-md w-[150px] flex justify-center items-center gap-2 capitalize font-ikaros"
              // className="px-4 py-2 font-bold text-white rounded bg-amber-400 hover:bg-amber-500"
            >
              <Link to="/">Go to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
