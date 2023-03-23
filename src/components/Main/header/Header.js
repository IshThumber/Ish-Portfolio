import { Box, Card, Text } from "@chakra-ui/react";
import React from "react";
import "./header.css";

const Header = () => {
   return (
      <>
         <div className="header__container">
            <div className="header_div">
               <h1 className="header__heading">ishthumber.me</h1>
            </div>
         </div>
      </>
   );
};

export default Header;
