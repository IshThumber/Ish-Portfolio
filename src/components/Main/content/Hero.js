import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import sideImg from "../../../assets/self.png";
import "./Content.css";
const Hero = () => {
   return (
      <>
         <Box w="100%" padding="5rem 0rem 3rem 0rem">
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
                  alignSelf="start"
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
                  {/* <Text w="90%">
                     A <span>Tech Enthusiastic</span> developer from{" "}
                     <span>India</span>.
                     <br />
                     Interests in Cloud, DevOps, Web Development, and Machine
                     Learning.
                  </Text> */}
                  <br />
                  <Text>
                     Tech Stack:{" "}
                     <span>PostgreSQL, MongoDB, Express, Node, React</span>
                  </Text>
               </Box>
               <Box>
                  <Image
                     src={sideImg}
                     alt="self"
                     width={400}
                     border="2px solid black"
                     borderRadius="full"
                  />
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default Hero;
