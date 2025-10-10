// ContestsLayout.jsx
import { Plus } from "lucide-react";
import React, { useState } from "react";

const Contests = () => {
  const [activeTab, setActiveTab] = useState("ongoing");

  // Sample contest data
  const contests = [
    {
      id: 1,
      title: "Contest 1",
      date: "01.06.23",
      description:
        "Lorem Ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores",
      status: "ongoing",
    },
    {
      id: 2,
      title: "Contest 2",
      date: "01.06.23",
      description:
        "Lorem Ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores",
      status: "ongoing",
    },
    {
      id: 3,
      title: "Contest 3",
      date: "01.06.23",
      description:
        "Lorem Ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores omit est Lorem ipsum dolores",
      status: "archived",
    },
  ];

  // Filter contests based on active tab
  const filteredContests = contests.filter(
    (contest) => contest.status === activeTab
  );

  return (
    <div className="min-h-screen sm:p-8">
      {/* Header Section */}
      <div className="mb-4 ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Contests
          </h1>

          <button className="flex gap-1 items-center bg-[#12bab0] text-white py-1 px-3 sm:py-2 sm:px-4 rounded-full font-medium hover:bg-[#149e94] transition-colors duration-200 shadow-md hover:shadow-lg">
            <Plus className="w-5" />
            <span className="text-xs sm:text-sm">Create New Contest</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-6 border-gray-200">
          <button
            className={`pb-3 px-1 text-xl ${
              activeTab === "ongoing"
                ? "text-black/70 border-b-2 border-black font-bold "
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("ongoing")}
          >
            Ongoing
          </button>
          <button
            className={`pb-3 px-1 text-xl ${
              activeTab === "archived"
                ? "text-black/70 border-b-2 border-black font-bold "
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
        {filteredContests.length > 0 ? (
          filteredContests.map((contest) => (
            <div
              key={contest.id}
              className="bg-[#f0f0f3] rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              {/* Contest Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {contest.title} | {contest.date}
                </h3>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    contest.status === "ongoing"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {contest.status.charAt(0).toUpperCase() +
                    contest.status.slice(1)}
                </span>
              </div>

              {/* Contest Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {contest.description}
              </p>

              {/* See Details Link */}
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 text-sm">
                See Details →
              </button>
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
