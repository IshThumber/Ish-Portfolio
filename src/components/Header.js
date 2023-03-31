// import { Box, Card, Text } from "@chakra-ui/react";
// import React from "react";
// import "./header.css";

// const Header = () => {
//    return (
//       <>
//          <Box
//             w="40%"
//             paddingTop={10}
//             paddingLeft={"15%"}
//             marginLeft="-10%"
//          >
//             <div className="header__container">
//                <div className="header_div">
//                   <h1 className="header__heading">ishthumber.me</h1>
//                </div>
//             </div>
//          </Box>
//       </>
//    );
// };

// export default Header;
import { Box, Container, Text } from "@chakra-ui/react";
   
const Header = () => {
   return (
      <Box as="nav">
         <Container
            py={{
               base: "2rem",
               lg: "3rem"
            }}
            maxW="80%"
            className="header__heading"
         >
            <Text fontSize="1.3rem" fontWeight={600} color="muted" w="fit-content">
               ishthumber.me
            </Text>
         </Container>
      </Box>
   );
};

export default Header;
