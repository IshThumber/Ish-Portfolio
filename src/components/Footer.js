import { Button, ButtonGroup, Container, Divider, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { Logo } from "./Logo";

const Footer = () => {
   return (
      <>
         <Container as="footer" role="contentinfo" maxW="100%">
            <Stack
               spacing="8"
               direction={{
                  base: "column",
                  md: "row"
               }}
               justify="space-between"
               pt={{
                  base: "9"
               }}
               pb={{
                  base: "12",
                  md: "16"
               }}
            >
               <Stack
                  spacing={{
                     base: "6",
                     md: "8"
                  }}
                  align="start"
               >
                  <Text color="muted" fontWeight={600} fontSize={20}>
                     ishthumber.me
                  </Text>

                  <Text
                     color="subtle"
                     fontSize="sm"
                     pl={{
                        base: "0",
                        md: "8"
                     }}
                  >
                     <Button as="a" href="" variant="link" color="subtle">
                        ishthumber.me
                     </Button>{" "}
                     is a personal portfolio developed by <u>Ish Thumber</u>
                  </Text>
               </Stack>

               <Stack
                  direction={{
                     base: "column-reverse",
                     md: "column",
                     lg: "row"
                  }}
                  spacing={{
                     base: "15",
                     md: "10"
                  }}
               >
                  <Stack direction="row" spacing="8">
                     <Stack spacing="4" minW="36" flex="1">
                        <Text fontSize="sm" fontWeight="semibold" color="subtle">
                           Product
                        </Text>
                     </Stack>

                     <Stack spacing="4" minW="36" flex="1">
                        <Text fontSize="sm" fontWeight="semibold" color="subtle">
                           Legal
                        </Text>
                     </Stack>
                  </Stack>
               </Stack>
            </Stack>

            <Divider />

            <Stack pt="8" pb="12" justify="space-between" direction={{ base: "column-reverse", md: "row" }} align="center">
               <Text fontSize="sm" color="subtle">
                  &copy; {new Date().getFullYear()} ishthumber.me
               </Text>

               <ButtonGroup variant="ghost">
                  <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="1.25rem" />} />
                  <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
                  <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="1.25rem" />} />
               </ButtonGroup>
            </Stack>
         </Container>
      </>
   );
};

export default Footer;
