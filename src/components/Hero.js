import React from "react";
import { Box, Heading, Image, Text, Icon } from "@chakra-ui/react";
import sideImg from "../assets/self.png";
import "./Content.css";

import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const About = () => {
   return (
      <Box
         display="flex"
         // margin="auto"
         w="100%"
         flexDirection={{ base: "column", md: "row" }}
         alignItems={{ base: "center", md: "flex-start" }}
         padding={{ base: "3rem 1rem", md: "5rem 0" }}
      >
         <Box
            position="relative"
            width="60%"
            display={{
               base: "flex",
               md: "flex"
            }}
            flexDirection={{ base: "column-reverse", md: "row" }}
            // alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ base: "space-between", md: "space-between" }}
            margin="auto"
         >
            <Box
               position="relative"
               display="flex"
               color={"black"}
               flexDirection={"column"}
               alignSelf="center"
               textAlign={{ base: "left", sm: "center", md: "left" }}
               h="100%"
            >
               <Heading as="h1" size="md" fontFamily="Josefin Slab">
                  Hey 👋🏻 I'm
               </Heading>
               <Box>
                  <Heading className="text_ish" as="h1" fontSize={{ base: "3.5rem", md: "5rem" }}>
                     Ish{" "}
                     <span className="text_thumber" as="h1" fontSize={{ base: "3.5rem", md: "5rem" }}>
                        Thumber
                     </span>
                  </Heading>
               </Box>

               <Text fontSize={{ base: "lg", md: "2xl" }}>
                  I'm a{" "}
                  <span
                     style={{
                        color: "#FFC300",
                        textDecoration: "underline",
                        fontWeight: "bold"
                     }}
                  >
                     Web Developer
                  </span>
               </Text>

               <Box
                  w="30%"
                  padding={2}
                  display="flex"
                  justifyContent="space-between"
                  alignSelf={{ base: "center", md: "flex-start" }}
                  marginBottom={{ base: "2rem", md: "0rem" }}
                  pt={{
                     base: "2rem",
                     md: "2rem"
                  }}
               >
                  <Box
                     borderRadius="100%"
                     onClick={() => {
                        window.location.href = "https://github.com/IshThumber";
                     }}
                     cursor="pointer"
                  >
                     <Icon as={AiOutlineGithub} boxSize="6" color="#161b22" />
                  </Box>
                  <Box
                     borderRadius="100%"
                     onClick={() => {
                        window.location.href = "https://www.linkedin.com/in/ishthumber/";
                     }}
                     cursor="pointer"
                  >
                     <Icon as={AiFillLinkedin} boxSize="6" color="#0a66c2" />
                  </Box>
                  <Box
                     borderRadius="100%"
                     onClick={() => {
                        window.location.href = "https://twitter.com/ish_thumber";
                     }}
                     cursor="pointer"
                  >
                     <Icon as={AiOutlineTwitter} boxSize="6" color="#1da1f2" />
                  </Box>
                  {/* <Box
                     borderRadius="100%"
                     onClick={() => {
                        window.location.href = "https://instagram.com/__ish343__";
                     }}
                     cursor="pointer"
                  >
                     <Icon as={AiOutlineInstagram} boxSize="6" color="" />
                  </Box> */}
               </Box>
            </Box>
            
            <Box>
               <Image
                  src={sideImg}
                  alt="self"
                  w="400px"
                  margin={{ base: "0 auto 2rem auto", md: "0" }}
                  border="2px solid black"
                  borderRadius="full"
               />
            </Box>
         </Box>
      </Box>
   );
};

export default About;
