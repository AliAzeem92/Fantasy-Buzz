import { Plus } from "lucide-react";
import React, { useState } from "react";
import contestImg from "../assets/contest.jpg";

const Contests = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  // Separate Data
  const ongoingContests = [
    {
      id: 1,
      title: "Summer Fantasy League",
      date: "01.06.25",
      description:
        "Join the ultimate summer fantasy contest and showcase your skills. Exciting rewards await the top performers!",
      src: contestImg,
    },
    {
      id: 2,
      title: "Cricket Challenge Cup",
      date: "12.06.25",
      description:
        "Put your cricket knowledge to the test in our exclusive Challenge Cup! Compete against other players for big prizes.",
      src: contestImg,
    },
  ];

  const archivedContests = [
    {
      id: 3,
      title: "Winter Fantasy Battle",
      date: "15.12.24",
      description:
        "Our most thrilling winter contest is now concluded. See who dominated the leaderboard!",
      src: contestImg,
    },
    {
      id: 4,
      title: "Champions League Predictor",
      date: "22.03.25",
      description:
        "This contest tested users’ football instincts! Check out archived results and stats.",
      src: contestImg,
    },
    {
      id: 4,
      title: "Champions League Predictor",
      date: "22.03.25",
      description:
        "This contest tested users’ football instincts! Check out archived results and stats.",
      src: contestImg,
    },
    {
      id: 4,
      title: "Champions League Predictor",
      date: "22.03.25",
      description:
        "This contest tested users’ football instincts! Check out archived results and stats.",
      src: contestImg,
    },
    {
      id: 4,
      title: "Champions League Predictor",
      date: "22.03.25",
      description:
        "This contest tested users’ football instincts! Check out archived results and stats.",
      src: contestImg,
    },
    {
      id: 4,
      title: "Champions League Predictor",
      date: "22.03.25",
      description:
        "This contest tested users’ football instincts! Check out archived results and stats.",
      src: contestImg,
    },
    {
      id: 4,
      title: "Champions League Predictor",
      date: "22.03.25",
      description:
        "This contest tested users’ football instincts! Check out archived results and stats.",
      src: contestImg,
    },
  ];

  // Choose dataset based on tab
  const displayedContests =
    activeTab === "ongoing" ? ongoingContests : archivedContests;

  return (
    <div className=" sm:p-8">
      {/* Header Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Contests
          </h1>

          <button className="flex gap-1 items-center bg-green text-white py-1 px-3 sm:py-2 sm:px-4 rounded-full font-medium hover:bg-greenHover transition-colors duration-200 shadow-md hover:shadow-lg">
            <Plus className="w-5" />
            <span className="text-xs sm:text-sm">Create New Contest</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-6 border-gray-200">
          <button
            className={`pb-3 px-1 text-xl ${
              activeTab === "ongoing"
                ? "text-black/70 border-b-2 border-black font-bold"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("ongoing")}
          >
            Ongoing
          </button>
          <button
            className={`pb-3 px-1 text-xl ${
              activeTab === "archived"
                ? "text-black/70 border-b-2 border-black font-bold"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("archived")}
          >
            Archived
          </button>
        </div>
      </div>

      {/* Contests Grid */}
      <div className="space-y-6">
        {displayedContests.length > 0 ? (
          displayedContests.map((contest) => (
            <div
              key={contest.id}
              className="flex flex-col sm:flex-row justify-between items-center bg-[#f0f0f3] rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6 w-full ">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 ">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {contest.title} |
                    </h3>
                    <h3 className="text-lg text-gray-900">{contest.date}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {contest.description}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 text-sm underline">
                  See Details →
                </button>
              </div>

              {/* Contest Image */}
              <div className="overflow-hidden rounded-b-lg sm:rounded-r-lg ">
                <img
                  src={contest.src}
                  alt={contest.title}
                  className="w-full h-48 object-cover  border border-gray-300"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="bg-[#f0f0f3] rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <p className="text-gray-500 text-lg">
              No {activeTab} contests found.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              {activeTab === "ongoing"
                ? "There are currently no ongoing contests."
                : "No archived contests available."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;
