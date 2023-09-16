import React from "react";
import Lottie from "lottie-react";
import HistoryAnimation from "../img/history-animation.json";
import HeroAnimation from "../img/hero-animation.json";

const HeroComponent = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full" id="home">
        <div className="flex-1 flex flex-col md:items-start items-center justify-center md:h-[75%] gap-6">
          <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide md:leading-tight">
            <span className="text-lightPrimary text-[3rem] lg:text-[4rem] mb-12">
              Relief
            </span>
            DAO
          </p>

          <p className="text-center md:text-justify text-lighttextGray text-sm flex flex-wrap gap-1">
          
          At ReliefDAO, we believe that every person, no matter where they are, deserves immediate support during difficult times. Our mission is to provide a lifeline for those facing crises by leveraging the power of blockchain technology. With ReliefDAO, you can securely receive financial assistance, even in the most challenging circumstances, ensuring that help is just a transaction away. Join us in making a difference and together, let's build hope, one transaction at a time.
          
          </p>
        </div>
        <div className="flex-1 flex items-center relative md:h-[75%]  md:mt-0">
          {/* Image */}
          <Lottie animationData={HeroAnimation} />
        </div>
      </section>
    </div>
  );
};

export default HeroComponent;
