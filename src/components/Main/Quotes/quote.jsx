import React, { useState, useEffect } from "react";

import "./quote.css";
import Skeleton from "@mui/material/Skeleton";

function Quote() {
   const [quote, setQuote] = useState("");
   const [author, setAuthor] = useState("");
   const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false);
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
         <div className="Quote_container">
            {isLoading ? (
               <Skeleton animation="wave" width={""} />
            ) : (
               <>
                  <p>{quote}</p>
               </>
            )}
            {isLoading ? (
               <Skeleton animation="wave" width={""} />
            ) : (
               <>
                  <p className="Quote_author">- {author}</p>
               </>
            )}
         </div>
      </>
   );
}

export default Quote;
