import { Box, Heading, HStack, Text } from "@chakra-ui/react";
// import "./contact.css";
const Contact = () => {
   return (
      <>
         <Box
            width="60%"
            margin="auto"
            alignItems="center"
            // bg="brown"
            // padding={10}
            marginTop={10}
         >
            <Box
               // bg="cyan.100"
               paddingBottom={10}
            >
               <Heading
                  as="h1"
                  size="2xl"
                  textAlign="center"
                  className="about__heading"
               >
                  Contact Me
               </Heading>
            </Box>

            <Box
               // bg="yellow.100"
               padding={10}
               display="flex"
               flexDirection="row"
               justifyContent="space-between"
            >
               <HStack w="100%">
                  <Box display="flex" >
                     <Box>
                        <Box justifyContent={"space-between"} h="100%">
                           <Heading
                              as="h1"
                              size="md"
                              fontFamily="Josefin Slab"
                              padding={5}
                           >
                              Email
                           </Heading>
                           <Heading
                              as="h1"
                              size="md"
                              fontFamily="Josefin Slab"
                              padding={5}
                           >
                              Phone
                           </Heading>
                           <Heading
                              as="h1"
                              size="md"
                              fontFamily="Josefin Slab"
                              padding={5}
                           >
                              Address
                           </Heading>
                        </Box>
                     </Box>
                     <Box>
                        <Box justifyContent={"space-between"} h="100%">
                           <Text
                              size="sm"
                              fontFamily="Josefin Slab"
                              padding={5}
                              onClick={() => {
                                 window.open("mailto:ishthumber343@gmail.com");
                              }}
                              cursor="pointer"
                           >
                              ishthumber343@gmail.com
                           </Text>
                           <Text
                              size="sm"
                              fontFamily="Josefin Slab"
                              padding={5}
                              onClick={() => {
                                 window.open("tel:+919909919803");
                              }}
                              cursor="pointer"
                           >
                              +91 9909919803
                           </Text>
                           <Text
                              size="sm"
                              fontFamily="Josefin Slab"
                              padding={5}
                           >
                              Una, Gujarat, India
                           </Text>
                        </Box>
                     </Box>
                  </Box>
               </HStack>
            </Box>
         </Box>
      </>
   );
};

export default Contact;
