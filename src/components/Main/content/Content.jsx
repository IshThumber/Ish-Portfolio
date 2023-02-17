import React from "react";
import Header from "../header/Header";
import Section from "../section/section";
import Quote from '../Quotes/quote';
import "./Content.css";

const Content = () => {
   return (
      <>
         <div>
            <Header />
         </div>
         <div>
            <Section />
         </div>
         <div>
            <Quote />
         </div>
      </>
   );
};

export default Content;
