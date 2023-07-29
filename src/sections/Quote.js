import { useEffect, useState } from "react";
import "./general.css";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "f80d8bf742mshfc2de04cfe6451bp1c8969jsn01b6259f2f3f",
              "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com"
            }
          }
        );

        const data = await response.json();
        // console.log(data[0].text);
        setQuote(data[0].text);
        setAuthor(data[0].author);
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
      <div className="flex justify-center items-center w-full -mt-28 sm:-mt-20">
        <div className="bigShadowButton w-2/3 bg-teal-50 p-3 rounded-md border border-blue-gray-800">
          <div className="text-center">
            <p className="text-md font-brandonMedium">{quote}</p>
          </div>
          <div className="text-right">
            <p className="font-avertaStdBold">- {author}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
