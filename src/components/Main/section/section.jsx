import React from "react";

import sideImg from "../../../assets/side1.png";
import "./section.css";

// import Section from './section';
const Section = () => {
   return (
      <>
         <div className="main_div">
            <div>
               <h1>
                  Hey👋 <br />
                  Ish Thumber
               </h1>
               <p>Frontend Developer</p>
            </div>
            <div>
               <img src={sideImg} alt="sideImg" />
            </div>
         </div>
      </>
   );
};

export default Section;
