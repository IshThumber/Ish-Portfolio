import React from "react";
import Header from "../header/header";
import Section from "../section/section";
import "./Content.css";
import Quote from '../Quotes/quote';

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
