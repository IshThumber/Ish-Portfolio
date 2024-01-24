import { useEffect, useState } from "react";
import "./general.css";
// import { RotateCcw } from "lucide-react";

function Quote() {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [setup, setSetUp] = useState("");
  const [delivery, setDelivery] = useState("");
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          // "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2",
          // {
          //   method: "GET",
          //   headers: {
          //     "X-RapidAPI-Key":
          //       "f80d8bf742mshfc2de04cfe6451bp1c8969jsn01b6259f2f3f",
          //     "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com"
          //   }
          // }
          "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
        );

        // console.log(response);
        const data = await response.json();
        // console.log(data);
        // console.log(data.type);
        setCategory(data.category);
        setType(data.type);
        setSetUp(data.setup);
        setDelivery(data.delivery);
        setJoke(data.joke);
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
      <div className="flex justify-center items-center w-full mt-14">
        <div className="bigShadowButton md:w-2/3 w-11/12 bg-teal-50 p-5 rounded-3xl border-2 border-blue-gray-800 dark:border-bunker-50 dark:text-wild-sand-50 dark:bg-teal-700">
          <div>
            <>
              <div className="flex justify-between items-start">
                <div className="w-fit text-[12px] rounded-full p-1 px-4 bg-genoa-100 dark:bg-green-500">
                  Category: {category}
                </div>
                <div className="rounded-full p-1"></div>
              </div>
              <div className="text-right w-11/12 float-right p-3">
                {type === "single" ? (
                  <div className="text-xl text-genoa-900 dark:text-wild-sand-100">
                    {joke}
                  </div>
                ) : (
                  <>
                    <div className="text-lg">{setup}</div>
                    <div className="text-xl text-genoa-900 dark:text-wild-sand-300">
                      {delivery}
                    </div>
                  </>
                )}
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
