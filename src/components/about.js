// import { Box, Heading, Text, Image } from "@chakra-ui/react";
// import sideImg from "../assets/self.png";
// import "./about.css";
// const About = () => {
//    return (
//       <>
//          <Box
//             width="60%"
//             margin="auto"
//             alignItems="center"
//             // bg="brown"
//             padding={10}
//             marginTop={10}
//          >
//             <Box
//             // bg="cyan.100"
//             >
//                <Heading as="h1" size="2xl" textAlign="center" className="about__heading">
//                   About
//                </Heading>
//             </Box>

//             <Box
//                // bg="yellow.100"
//                padding={4}
//                display="flex"
//                flexDirection="row"
//                justifyContent="space-between"
//             >
//                <Image src={sideImg} alt="self" width={300} border="2px solid black" borderRadius="full" />
//                <Text padding={7} textAlign="justify">
//                   Hello, I am Ish Thumber, an enthusiastic Charusat University B.Tech student particularly interested in technology. Interested in the
//                   most recent developments and trends in DevOps and cloud computing. I regularly maintains his abilities and has experience in HTML,
//                   CSS, and JavaScript web development. Likes to play with software and read about technology in his free time. My dedication to
//                   professional success is motivated by his passion of technology.
//                </Text>
//             </Box>
//          </Box>
//       </>
//    );
// };

// export default About;

import { Box, Heading, Text, Image } from "@chakra-ui/react";
import sideImg from "../assets/self.png";
import "./about.css";

const About = () => {
   return (
      <>
         <Box width={{ base: "90%", md: "60%" }} margin="auto" alignItems="center" padding={10} marginTop={10}>
            <Box bg="blue.100">
               <Heading as="h1" size={{ base: "xl", md: "2xl" }} textAlign="center" className="about__heading" >
                  About
               </Heading>
            </Box>

            <Box
               padding={{ base: 2, md: 4 }}
               display="flex"
               flexDirection={{ base: "column", md: "row" }}
               alignItems={{ base: "center", md: "start" }}
               justifyContent="space-between"
               bg="yellow.100"
            >
               <Image
                  src={sideImg}
                  alt="self"
                  width={{ base: "100%", md: 300 }}
                  border="2px solid black"
                  borderRadius="full"
                  mb={{ base: 4, md: 0 }}
               />
               <Text padding={{ base: 4, md: 7 }} textAlign={{ base: "center", md: "justify" }}>
                  Hello, I am Ish Thumber, an enthusiastic Charusat University B.Tech student.
                  <br />
                  Interested in the most recent developments and trends in DevOps and Cloud computing.
                  <br />
                  I regularly maintains his abilities and has experience in HTML, CSS, and JavaScript web development.
                  <br />
                  Likes to play with software and read about technology in his free time.
               </Text>
            </Box>
         </Box>
      </>
   );
};

export default About;
