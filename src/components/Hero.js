import React from "react";
import { Box, Heading, Image, Text, Icon, IconButton, Stack, Button } from "@chakra-ui/react";
import sideImg from "../assets/self.png";
import "./Content.css";
import { HiOutlineExternalLink } from "react-icons/hi";

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
               textAlign={{ lg: "left", base: "center", md: "left" }}
               h="100%"
            >
               <Heading as="h1" size="md" fontFamily="Josefin Slab">
                  Hey 👋 I'm
               </Heading>
               <Box>
                  <Heading className="text_ish" fontSize={{ base: "4.5rem", md: "5rem" }}>
                     Ish{" "}
                     <span className="text_thumber" fontSize={{ base: "4rem", md: "5rem" }}>
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

               <Stack
                  spacing={4}
                  direction="row"
                  // w={{ base: "50%", lg: "30%" }}
                  // padding={2}
                  // display="flex"
                  // justifyContent="space-between"
                  alignSelf={{ base: "center", md: "flex-start" }}
                  // marginBottom={{ base: "2rem", md: "0rem" }}
                  pt={{
                     base: "2rem",
                     md: "2rem"
                  }}
               >
                  <Button
                     onClick={() => {
                        window.open("https://drive.google.com/file/d/1HW5CGHEjK8XQc8vzqNXj1vUJJ9PzNnep/view?usp=share_link", "_blank");
                     }}
                     rightIcon={<HiOutlineExternalLink />}
                     colorScheme="teal"
                     color="muted"
                     variant="outline"
                  >
                     Resume
                  </Button>
                  {/* <IconButton
                     as="a"
                     href="https://github.com/IshThumber"
                     aria-label="GitHub"
                     icon={<FaGithub fontSize="1.5rem" />}
                     color="#161b22"
                     // colorScheme="#161b22"
                     variant="ghost"
                     borderRadius="full"
                  />
                  <IconButton
                     as="a"
                     href="https://www.linkedin.com/in/ishthumber/"
                     aria-label="LinkedIn"
                     icon={<FaLinkedin fontSize="1.5rem" />}
                     // color="#0a66c2"
                     colorScheme="linkedin"
                     variant="ghost"
                     borderRadius="full"
                  />
                  <IconButton
                     as="a"
                     href="https://twitter.com/ish_thumber"
                     aria-label="Twitter"
                     icon={<FaTwitter fontSize="1.5rem" />}
                     // color="#1da1f2"
                     colorScheme="twitter"
                     variant="ghost"
                     borderRadius="full"
                  /> */}
               </Stack>
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
