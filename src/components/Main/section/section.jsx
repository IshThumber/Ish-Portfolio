import React from "react";

import sideImg from "../../../assets/self.png";
import "./section.css";
import wave from "../../../assets/wave.svg";
import { Button } from "@chakra-ui/react";
// import Section from './section';
const Section = () => {
   return (
      <>
         <div className="main__container">
            <div className="main_div">
               <div
                  style={{
                     // border: "1px solid black",
                     width: "60%",
                     display: "flex",
                     flexDirection: "row",
                     // margin: "auto",
                     textAlign: "left"
                  }}
               >
                  <h1>Hey</h1>
                  <div
                     style={{
                        // border: "1px solid black",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                        // margin: "auto"
                     }}
                  >
                     <img src={wave} alt="wave" width="100rem" />
                  </div>
               </div>
               <h1>Ish Thumber</h1>
            </div>
            <div className="main_right_div">
               <img
                  src={sideImg}
                  alt="self"
                  width={400}
                  style={{
                     borderRadius: "3rem"
                  }}
               />
            </div>
            <div>
               <Button>skdjbf</Button>
            </div>
         </div>
      </>
   );
};

export default Section;
