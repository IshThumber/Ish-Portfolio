import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import { Container } from "@chakra-ui/react";
import Quote from "./components/quote";
import About from "./components/about";
// import ContactMe from "./components/contactme.js"; 
import Footer from "./components/Footer";
const App = () => {
   return (
      <>
         <Container
            maxW="100%"
            w="100%"
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
            {/* <ContactMe /> */}
         </Container>
         <footer
            style={{
               position: "absolute",
               width: "100%"
            }}
         >
            <Footer />
         </footer>
      </>
   );
};

export default App;
