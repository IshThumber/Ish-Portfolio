import React from "react";
import error from "../assets/error.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Error = () => {
    const windowLocation = window.location.href;

    return (
        <>
            <div className="w-full h-screen bg-[#F8F6F4]">
                <div className="h-screen flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="img-responsive w-5/6 md:w-1/2 shadowButton border-gray-900 border-2 rounded-lg p-3"
                            src={error}
                            alt="error"
                        />

                        <h1 className="text-md md:text-lg mt-14 font-thin font-ikaros">
                            <span className=" underline">{windowLocation}</span>
                            <span> does not exist.</span>
                        </h1>

                        <h1 className="text-md md:text-lg font-thin font-ikaros">
                            <span>Please check the URL or </span>
                        </h1>
                        <Button
                            variant="outlined"
                            className="shadowButton bg-green-100 hover:bg-green-600 text-blue-gray-800 hover:text-blue-gray-50 border-gray-900 border-2 py-3 rounded-md w-[150px] flex justify-center items-center gap-2 capitalize font-ikaros"
                            // className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded"
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
