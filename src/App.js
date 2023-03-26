import React from "react";
import Header from "./components/Main/header/Header";
import Hero from "./components/Main/content/Hero";
import "./App.css";
import { Box, Card, Container } from "@chakra-ui/react";
import Quote from "./components/Main/Quotes/quote";
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
            <Header />
            <Hero />
            <Quote />
         </Container>
      </>
   );
};

export default App;
