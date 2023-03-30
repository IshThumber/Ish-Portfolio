import React from "react";
import Header from "./components/Main/header/Header";
import Hero from "./components/Main/content/Hero";
import "./App.css";
import { Container } from "@chakra-ui/react";
import Quote from "./components/Main/Quotes/quote";
import About from "./components/About/about";
import ContactMe from "./components/ContactUs/contactme.js";
const App = () => {
   return (
      <>
         <Container
            maxW="100%"
            h="100%"
            margin={0}
            padding={0}
            // bgGradient="linear(to-b, #FFF6DC, #fff)"
            bgGradient="linear(to-b, #FFFAEA, #fff)"
         >
            <Header />
            <Hero />
            <Quote />
            <br />
            <br />
            <br />
            <About />
            <br />
            <br />
            <br />
            <ContactMe />

            <footer></footer>
         </Container>
      </>
   );
};

export default App;
