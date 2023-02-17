import React from "react";
import "./header.css";

import { Button } from "@mui/material";

const Header = () => {
   return (
      <>
         <div className="header__container">
            <span
               style={{
                  // fontSize: "2rem",
                  fontWeight: "bold",
                  color: "black"
               }}
            >
               ishthumber.me
            </span>
            <div
               style={{
                  padding: "0 0 0.5rem 0"
               }}
            >
               <Button variant="contained">Resume</Button>
            </div>
         </div>
      </>
   );
};

export default Header;
