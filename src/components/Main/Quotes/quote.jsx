import { Box, Card, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

// import "./quote.css";
// import Skeleton from "@mui/material/Skeleton";

function Quote() {
   const [quote, setQuote] = useState("");
   const [author, setAuthor] = useState("");
   // const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchQuote = async () => {
         try {
            // const response = await fetch("https://api.quotable.io/random");
            const response = await fetch(
               "https://quotes15.p.rapidapi.com/quotes/random/",
               {
                  method: "GET",
                  headers: {
                     "X-RapidAPI-Key":
                        "f80d8bf742mshfc2de04cfe6451bp1c8969jsn01b6259f2f3f",
                     "X-RapidAPI-Host": "quotes15.p.rapidapi.com"
                  }
               }
            );

            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.originator.name);
            // setIsLoading(false);
         } catch (error) {
            console.error(error);
         }
      };

      fetchQuote();

      const interval = setInterval(() => {
         fetchQuote();
      }, 5 * 60 * 1000); // refresh every 5 minutes

      return () => clearInterval(interval);
   }, []);

   return (
      <>
         <Card
            // className="Quote_container"
            w="60%"
            margin="auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            // alignItems="center"
            // textAlign="center"
            padding={5}
            borderRadius="1rem"
         >
            <Box textAlign="center">
               <Text>{quote}</Text>
            </Box>

            <Box textAlign="right">
               <Text
                  // className="Quote_author"
                  fontWeight={600}
                  textAlign="right"
               >
                  - {author}
               </Text>
            </Box>
         </Card>
      </>
   );
}

export default Quote;
