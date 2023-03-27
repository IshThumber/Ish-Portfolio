import { Box, Heading } from "@chakra-ui/react";
// import "./contact.css";
const Contact = () => {
   return (
      <>
         <Box
            width="60%"
            margin="auto"
            alignItems="center"
            // bg="brown"
            padding={10}
            marginTop={10}
         >
            <Box
            // bg="cyan.100"
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
            <br />
            <br />
            <Box
               // bg="yellow.100"
               padding={4}
               display="flex"
               flexDirection="row"
               justifyContent="space-between"
            ></Box>
         </Box>
      </>
   );
};

export default Contact;
