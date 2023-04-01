import { Box, Card, CardBody, CardHeader, Heading, Stack, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
   return (
      <>
         <Box
            pt={{ base: 10, md: 20 }}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            w="100%"
            alignItems={{ base: "center", md: "start" }}
         >
            <Box bg="blue.100" w="100%">
               <Heading as="h1" size={{ base: "xl", md: "2xl" }} textAlign="center" className="about__heading">
                  Skills
               </Heading>
               <Stack direction={{ base: "column", md: "row" }} spacing={4} padding={10}>
                  <Card
                     bg="red.500"
                     w={{ md: "30%", lg: "20%" }}
                     borderRadius={{
                        md: "10px",
                        base: "10px",
                        lg: "10px",
                        sm: "10px"
                     }}
                  >
                     <CardHeader>
                        <Text
                           fontSize={{
                              md: "xl"
                           }}
                        >
                           {" "}
                           HTML{" "}
                        </Text>
                     </CardHeader>
                     <CardBody>
                        <Slider value={20}>
                           <SliderTrack bg="green">
                              <SliderFilledTrack />
                           </SliderTrack>
                           <SliderThumb />
                        </Slider>
                     </CardBody>
                  </Card>
                  <Card>
                     <CardHeader>
                        <Text> HTML </Text>
                     </CardHeader>
                     <CardBody>ksdfjgbs</CardBody>
                  </Card>
                  <Card>
                     <CardHeader>
                        <Text> HTML </Text>
                     </CardHeader>
                     <CardBody>ksdfjgbs</CardBody>
                  </Card>
               </Stack>
            </Box>
         </Box>
      </>
   );
};

export default Skills;
