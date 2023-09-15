import { Button } from "@material-tailwind/react";
import { ExternalLink } from "lucide-react";
import React from "react";
import "./general.css";
import Quote from "./Quote";

const HeroMain = () => {
    const handleScroll = () => {
        const element = document.getElementById("contact-us");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="bg-[#F8F6F4] w-full h- flex flex-col justify-center items-center ">
                <div className="items-center text-center mt-56">
                    <h3 className="font-brandonLight text-lg sm:text-2xl mb-2">
                        Hey, I&apos;m
                    </h3>
                    <h1 className="font-penna font-black text-7xl sm:text-7xl md:text-9xl transition-transform">
                        Ish Thumber
                    </h1>
                </div>
                <div className="justify-center text-center w-4/6">
                    <p className="font-brandonLight text-sm sm:text-lg font-thin">
                        I&apos;m a Full-Stack Developer who loves crafting
                        awesome web experiences with ReactJS, NodeJS, and a dash
                        of DevOps magic. Let's code, collaborate, and create
                        something extraordinary together! 🚀
                    </p>
                </div>
                <div className="items-center justify-center">
                    <div className=" my-3 p-1 flex flex-row justify-between items-center gap-8">
                        <Button
                            variant="outlined"
                            className="shadowButton bg-amber-100 hover:bg-amber-500 text-blue-gray-800 border-gray-900 border-2 py-3 rounded-md w-[150px]"
                            onClick={handleScroll}
                        >
                            Contact me
                        </Button>
                        <Button
                            variant="outlined"
                            className="shadowButton bg-amber-100 hover:bg-amber-500 text-blue-gray-800 border-gray-900 border-2 py-3 rounded-md w-[150px] flex justify-center items-center gap-2"
                            onClick={() => {
                                // https://drive.google.com/file/d/1wobdcWuAlP70nx1Qqq7KN9poGKwdbroq/view?usp=sharing
                                window.open(
                                    "https://drive.google.com/file/d/1wobdcWuAlP70nx1Qqq7KN9poGKwdbroq/view?usp=sharing",
                                    "_blank"
                                );
                            }}
                        >
                            Resume
                            <ExternalLink size={12} color="rgb(55 71 79)" strokeWidth={3} />
                        </Button>
                    </div>
                </div>
                <div className="w-full items-center justify-center mt-20 py-7">
                    <Quote />
                </div>
            </div>
        </>
    );
};

export default HeroMain;
