import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Lottie from "lottie-react";
import PeopleAnimation from "../img/people-animation.json";
import FundsAnimation from "../img/fundslock-animation.json";
import SecuredAnimation from "../img/secured-animaton.json"
=======
import HistoryAnimation from "../img/history-animation.json";
import Lottie from "lottie-react";

>>>>>>> 7e71a37b5d3af3297dfc047bf7b336d14eadb742

const posts = [
  {
    id: 1,
    count: 50000,
    company: "Onboarded People",
<<<<<<< HEAD
    json: PeopleAnimation,
=======
    json: HistoryAnimation,
>>>>>>> 7e71a37b5d3af3297dfc047bf7b336d14eadb742
  },
  {
    id: 2,
    count: "200k $",
    company: "Total Funds Locked",
<<<<<<< HEAD
    json: FundsAnimation,
=======
    json: HistoryAnimation,
>>>>>>> 7e71a37b5d3af3297dfc047bf7b336d14eadb742
  },
  {
    id: 3,
    count: 15000,
<<<<<<< HEAD
    company: "Total People secured",
    json: SecuredAnimation,
=======
    company: "Safed",
    json: HistoryAnimation,
>>>>>>> 7e71a37b5d3af3297dfc047bf7b336d14eadb742
  },
];

const TFLcards = () => {
  const isMediumScreen = window.innerWidth >= 768;

  const visiblePosts = isMediumScreen ? posts.slice(0, 8) : posts.slice(0, 3);

  const [currentCounts, setCurrentCounts] = useState({});

  useEffect(() => {
    const intervalIds = {};

    visiblePosts.forEach((post) => {
      let count = 0;

      if (typeof post.count === "number") {
        count = post.count;
      } else {
        const matches = post.count.match(/(\d+)/);
        if (matches) {
          count = parseInt(matches[0], 10);
        }
      }

      // Start the count animation 100 less than the original count
      const startCount = count - 100;

      intervalIds[post.id] = setInterval(() => {
        setCurrentCounts((prevCounts) => ({
          ...prevCounts,
          [post.id]: prevCounts[post.id] + 1 || startCount,
        }));

        if (currentCounts[post.id] >= count) {
          setCurrentCounts((prevCounts) => ({
            ...prevCounts,
            [post.id]: count, // Set the count to its final value
          }));
          clearInterval(intervalIds[post.id]);
        }
      }, 10); // Adjust the interval value (lower value makes it faster)
    });

    return () => {
      Object.values(intervalIds).forEach((intervalId) => {
        clearInterval(intervalId);
      });
    };
  }, [visiblePosts, currentCounts]);

  return (
    <div className="w-full">
      <div className="p-9 h-full">
        <div className="h-full w-full grid md:grid-cols-3 gap-9 my-6">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="p-8 md:h-600 h-225 min-w-260 text-lightModeTextColor border-lightModeTextColor backdrop-blur-md rounded-3xl flex items-center justify-center drop-shadow-lg gap-4 hover:scale-105 transition-all duration-300 border"
            >
              <div className="mx-3 flex flex-col items-center justify-center">
<<<<<<< HEAD
                {/* Use post.json here */}
                <Lottie animationData={post.json} />
                
                <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] md:text-[1rem] sm:text-[0.8rem] font-medium  text-lightPrimary">
                  {currentCounts[post.id] || 0}+
=======
                <p><Lottie animationData={posts.json} /></p>
                <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] md:text-[1rem] sm:text-[0.8rem] font-medium  text-lightPrimary">
                  {currentCounts[post.id] || 0}
>>>>>>> 7e71a37b5d3af3297dfc047bf7b336d14eadb742
                </p>
                <p>{post.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TFLcards;
