import React from "react";
import Header from "./components/Main/header/Header";
import "./App.css";
import { Box, Card, Container } from "@chakra-ui/react";
const App = () => {
   return (
      <>
         <Container
            maxW="100%"
            h="100vh"
            margin={0}
            padding={0}
            bgGradient="linear(to-b, #FFF6DC, #fff )"
         >
            <Box
               w="40%"
               paddingTop={10}
               paddingLeft={"15%"}
               border="2px"
               marginLeft="-10%"
               borderRadius={50}
            >
               <Header />
            </Box>

            <Card >
               sd
            </Card>
         </Container>
      </>
   );
};

export default App;
