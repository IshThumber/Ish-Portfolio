import React from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import sideImg from "../../../assets/self.png";
import "./Content.css";
import wave from "../../../assets/wave.svg";
import { Button } from "@chakra-ui/react";
// import Section from './section';
const Section = () => {
   return (
      <>
         {/* <div className="main__container">
            <div className="main_div">
               <div
                  style={{
                     // border: "1px solid black",
                     width: "60%",
                     display: "flex",
                     flexDirection: "row",
                     // margin: "auto",
                     textAlign: "left"
                  }}
               >
                  <h1>Hey</h1>
                  <div
                     style={{
                        // border: "1px solid black",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                        // margin: "auto"
                     }}
                  >
                     <img src={wave} alt="wave" width="100rem" />
                  </div>
               </div>
               <h1>Ish Thumber</h1>
            </div>
            <div className="main_right_div">
               <img
                  src={sideImg}
                  alt="self"
                  width={400}
                  style={{
                     borderRadius: "3rem"
                  }}
               />
            </div>
         </div> */}
         <Box w="100%" padding="6rem 0rem">
            <Box
               display="flex"
               width="50%"
               margin="auto"
               flexDirection="row"
               alignItems="center"
               justifyContent="space-between"
               // color="#D9E4EC"
               // fontSize="2rem"
               // padding="6rem 0rem 10rem 0rem"
               // bg="blue.100"
            >
               <Box color={"black"} alignSelf="center">
                  <Heading as="h1" size="md" fontFamily="Josefin Slab">
                     Hey 👋🏻 I'm
                  </Heading>
                  {/* <br /> */}
                  <Box display="flex" flexDirection={"column"}>
                     <Heading className="text_ish" as="h1" fontSize="5rem">
                        Ish
                     </Heading>
                     <Heading
                        className="text_thumber"
                        as="h1"
                        fontSize="5rem"
                        marginTop={-5}
                     >
                        Thumber
                     </Heading>
                  </Box>

                  <Text w="90%">
                     A <span>Tech Enthusiastic</span> developer from{" "}
                     <span>India</span>.
                     <br />
                     Interests in Cloud, DevOps, Web Development, and Machine
                     Learning.
                  </Text>
               </Box>
               <Box>
                  <Image
                     src={sideImg}
                     alt="self"
                     width={400}
                     borderRadius="full"
                  />
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default Section;
