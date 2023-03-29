import React from "react";
import {
   Box,
   Container,
   Heading,
   Image,
   Text,
   Icon,
   textDecoration
} from "@chakra-ui/react";
import sideImg from "../../../assets/self.png";
import "./Content.css";

import {
   AiOutlineGithub,
   AiFillLinkedin,
   AiOutlineTwitter,
   AiOutlineInstagram
} from "react-icons/ai";
const Hero = () => {
   const handleClick = () => {
      window.location.href = "https://www.example.com";
   };
   return (
      <>
         <Box w="100%" padding="5rem 0rem 4rem 0rem">
            <Box
               display="flex"
               width="60%"
               margin="auto"
               flexDirection="row"
               alignItems="center"
               justifyContent="space-between"
               // color="#D9E4EC"
               // fontSize="2rem"
               // padding="6rem 0rem 10rem 0rem"
               // bg="blue.100"
            >
               <Box
                  position="relative"
                  display="flex"
                  color={"black"}
                  alignSelf="center"
                  flexDirection={"column"}
               >
                  <Heading as="h1" size="md" fontFamily="Josefin Slab">
                     Hey 👋🏻 I'm
                  </Heading>
                  {/* <br /> */}
                  <Box>
                     <Heading className="text_ish" as="h1" fontSize="5rem">
                        Ish{" "}
                        <span
                           className="text_thumber"
                           as="h1"
                           fontSize="5rem"
                           // marginTop={-5}
                        >
                           Thumber
                        </span>
                     </Heading>
                  </Box>
                  <Text fontSize="2xl">
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
                     w="40%"
                     // bg="yellowgreen"
                     padding={2}
                     display="flex"
                     justifyContent="space-between"
                     marginTop={10}
                  >
                     <Box
                        borderRadius="100%"
                        onClick={() => {
                           window.location.href =
                              "https://github.com/IshThumber";
                        }}
                        cursor="pointer"
                     >
                        <Icon
                           as={AiOutlineGithub}
                           boxSize="6"
                           color="#161b22"
                        />
                     </Box>
                     <Box
                        borderRadius="100%"
                        onClick={() => {
                           window.location.href =
                              "https://www.linkedin.com/in/ishthumber/";
                        }}
                        cursor="pointer"
                     >
                        <Icon as={AiFillLinkedin} boxSize="6" color="#0a66c2" />
                     </Box>
                     <Box
                        borderRadius="100%"
                        onClick={() => {
                           window.location.href =
                              "https://twitter.com/ish_thumber";
                        }}
                        cursor="pointer"
                     >
                        <Icon
                           as={AiOutlineTwitter}
                           boxSize="6"
                           color="#1da1f2"
                        />
                     </Box>
                     <Box
                        borderRadius="100%"
                        onClick={() => {
                           window.location.href =
                              "https://instagram.com/__ish343__";
                        }}
                        cursor="pointer"
                     >
                        <Icon as={AiOutlineInstagram} boxSize="6" color="" />
                     </Box>
                  </Box>
               </Box>
               <Box>
                  <Image
                     src={sideImg}
                     alt="self"
                     width={400}
                     border="2px solid black"
                     borderRadius="full"
                     // boxShadow="5px 5px 0px rgba(0, 0, 0)"
                  />
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default Hero;
