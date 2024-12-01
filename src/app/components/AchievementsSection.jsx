"use client";
import React from "react";
import CountUp from "react-countup";

// Define the achievements data
const achievementsList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          // Parse the numeric value of the achievement
          const parsedValue =
            Number(achievement.value.replace(/[^0-9]/g, "")) || 0;

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex items-center">
                {achievement.prefix && (
                  <span className="mr-1">{achievement.prefix}</span>
                )}
                <CountUp
                  start={0}
                  end={parsedValue}
                  duration={2.5}
                  separator=","
                  className="text-white text-4xl font-bold"
                />
                {achievement.postfix && (
                  <span className="ml-1">{achievement.postfix}</span>
                )}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
