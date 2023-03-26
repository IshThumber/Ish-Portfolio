import { Box, Card, Text } from "@chakra-ui/react";
import React from "react";
import "./header.css";

const Header = () => {
   return (
      <>
         <Box
            w="40%"
            paddingTop={10}
            paddingLeft={"15%"}
            border="2px"
            marginLeft="-10%"
            borderRadius={50}
         >
            <div className="header__container">
               <div className="header_div">
                  <h1 className="header__heading">ishthumber.me</h1>
               </div>
            </div>
         </Box>
      </>
   );
};

export default Header;
