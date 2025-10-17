// import { Plus } from "lucide-react";
// import React, { useState } from "react";
// import contestImg from "../assets/contest.jpg";
// import { useNavigate } from "react-router-dom";

// const Contests = () => {
//   const [activeTab, setActiveTab] = useState("ongoing");
//   const [activeItem, setActiveItem] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   // Separate Data
//   const ongoingContests = [
//     {
//       id: 1,
//       title: "Summer Fantasy League",
//       date: "01.06.25",
//       description:
//         "Join the ultimate summer fantasy contest and showcase your skills. Exciting rewards await the top performers!",
//       src: contestImg,
//     },
//     {
//       id: 2,
//       title: "Cricket Challenge Cup",
//       date: "12.06.25",
//       description:
//         "Put your cricket knowledge to the test in our exclusive Challenge Cup! Compete against other players for big prizes.",
//       src: contestImg,
//     },
//   ];

//   const archivedContests = [
//     {
//       id: 3,
//       title: "Winter Fantasy Battle",
//       date: "15.12.24",
//       description:
//         "Our most thrilling winter contest is now concluded. See who dominated the leaderboard!",
//       src: contestImg,
//     },
//     {
//       id: 4,
//       title: "Champions League Predictor",
//       date: "22.03.25",
//       description:
//         "This contest tested users’ football instincts! Check out archived results and stats.",
//       src: contestImg,
//     },
//     {
//       id: 4,
//       title: "Champions League Predictor",
//       date: "22.03.25",
//       description:
//         "This contest tested users’ football instincts! Check out archived results and stats.",
//       src: contestImg,
//     },
//     {
//       id: 4,
//       title: "Champions League Predictor",
//       date: "22.03.25",
//       description:
//         "This contest tested users’ football instincts! Check out archived results and stats.",
//       src: contestImg,
//     },
//     {
//       id: 4,
//       title: "Champions League Predictor",
//       date: "22.03.25",
//       description:
//         "This contest tested users’ football instincts! Check out archived results and stats.",
//       src: contestImg,
//     },
//     {
//       id: 4,
//       title: "Champions League Predictor",
//       date: "22.03.25",
//       description:
//         "This contest tested users’ football instincts! Check out archived results and stats.",
//       src: contestImg,
//     },
//     {
//       id: 4,
//       title: "Champions League Predictor",
//       date: "22.03.25",
//       description:
//         "This contest tested users’ football instincts! Check out archived results and stats.",
//       src: contestImg,
//     },
//   ];

//   const handleNavigate = (path) => {
//     setActiveItem(path);
//     navigate(path);
//     setIsOpen(false); // Close sidebar when a menu item is clicked (on mobile)
//   };

//   // Choose dataset based on tab
//   const displayedContests =
//     activeTab === "ongoing" ? ongoingContests : archivedContests;

//   return (
//     <div className=" sm:p-8">
//       {/* Header Section */}
//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl sm:text-4xl font-bold text-darkBlue ">
//             Contests
//           </h1>

//           <button
//             onClick={() => handleNavigate("/dashboard/create")}
//             className="flex gap-1 items-center mx-6 w-fit bg-green text-white py-2 px-4 rounded-full font-medium mb-8 hover:bg-greenHover transition-colors duration-200 shadow-md hover:shadow-lg"
//           >
//             <Plus className="w-5" />
//             <span className="text-xs ">Create New Contest</span>
//           </button>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex space-x-6 border-gray-200">
//           <button
//             className={`pb-3 px-1 text-xl ${
//               activeTab === "ongoing"
//                 ? "text-black/70 border-b-2 border-black font-bold"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//             onClick={() => setActiveTab("ongoing")}
//           >
//             Ongoing
//           </button>
//           <button
//             className={`pb-3 px-1 text-xl ${
//               activeTab === "archived"
//                 ? "text-black/70 border-b-2 border-black font-bold"
//                 : "text-gray-500 hover:text-gray-700"
//             }`}
//             onClick={() => setActiveTab("archived")}
//           >
//             Archived
//           </button>
//         </div>
//       </div>

//       {/* Contests Grid */}
//       <div className="space-y-6">
//         {displayedContests.length > 0 ? (
//           displayedContests.map((contest) => (
//             <div
//               key={contest.id}
//               className="flex flex-col sm:flex-row justify-between items-center bg-[#f0f0f3] rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
//             >
//               <div className="p-6 w-full ">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="flex items-center gap-2 ">
//                     <h3 className="text-xl font-semibold text-gray-900">
//                       {contest.title} |
//                     </h3>
//                     <h3 className="text-lg text-gray-900">{contest.date}</h3>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed mb-4">
//                   {contest.description}
//                 </p>
//                 <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 text-sm underline">
//                   See Details →
//                 </button>
//               </div>

//               {/* Contest Image */}
//               <div className="overflow-hidden rounded-b-lg sm:rounded-r-lg ">
//                 <img
//                   src={contest.src}
//                   alt={contest.title}
//                   className="w-full h-48 object-cover  border border-gray-300"
//                 />
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="bg-[#f0f0f3] rounded-lg shadow-sm border border-gray-200 p-8 text-center">
//             <p className="text-gray-500 text-lg">
//               No {activeTab} contests found.
//             </p>
//             <p className="text-gray-400 text-sm mt-2">
//               {activeTab === "ongoing"
//                 ? "There are currently no ongoing contests."
//                 : "No archived contests available."}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contests;
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contests = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const [contests, setContests] = useState([]);

  const navigate = useNavigate();

  // ✅ Load contests from localStorage
  useEffect(() => {
    const data = localStorage.getItem("contestData");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setContests(Array.isArray(parsed) ? parsed : [parsed]);
      } catch (error) {
        console.error("Error parsing contest data:", error);
      }
    }
  }, []);

  // Filter data by tab
  const displayedContests =
    activeTab === "ongoing"
      ? contests.filter((c) => !c.isArchived)
      : contests.filter((c) => c.isArchived);

  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="sm:p-8">
      {/* Header Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-darkBlue">
            Contests
          </h1>

          <button
            onClick={() => navigate("/dashboard/create")}
            className="flex gap-1 items-center bg-green text-white py-2 px-4 rounded-full font-medium hover:bg-greenHover transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Plus className="w-5" />
            <span className="text-xs">Create New Contest</span>
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
          displayedContests.map((contest, index) => (
            <div key={index}>
              {/* Contest Header — shown in both tabs */}
              <div className="bg-[#f0f0f3] flex flex-col sm:flex-row justify-between rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col p-6 gap-2 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    {contest.name || "Untitled Contest"} |
                    <span className="text-gray-700 text-base font-normal">
                      {formatDate(contest.activeTill)}
                    </span>
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {contest.description || "No description available."}
                  </p>
                </div>
                {contest.image && (
                  <img
                    src={contest.image}
                    alt={contest.name}
                    className="sm:w-64 h-40 object-cover rounded-b-lg sm:rounded-r-lg border border-gray-300"
                  />
                )}
              </div>

              {/* ✅ Only show questions if tab is "ongoing" */}
              {activeTab === "ongoing" && contest.questions?.length > 0 && (
                <div className="space-y-4 mt-5 sm:w-[60%] hover:shadow-md transition-shadow duration-200">
                  {contest.questions.map((question, qIndex) => (
                    <div
                      key={qIndex}
                      className="border-2 hover:border-[#8394d0] rounded-md p-4 bg-[#f0f0f3]"
                    >
                      <div className="flex justify-between items-center mb-3 border-b-2 pb-2 sm:pb-0 sm:py-4">
                        <h4 className="text-base font-semibold text-gray-800">
                          QUESTION {qIndex + 1}/{contest.questions.length}
                        </h4>
                        <span className="text-xs font-semibold text-green px-4 py-1 rounded-full bg-white border border-green">
                          Active <span className="text-[blue]">until</span>:{" "}
                          {question.activeTill
                            ? formatDate(question.activeTill)
                            : "N/A"}
                        </span>
                      </div>

                      <p className="text-gray-800 font-medium mb-3">
                        {question.question}
                      </p>

                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => (
                          <label
                            key={oIndex}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <input
                              type="radio"
                              name={`question-${index}-${qIndex}`}
                              className="accent-blue-600 bg-transparent"
                            />
                            {typeof option === "string" ? option : option.text}
                          </label>
                        ))}
                      </div>

                      {question.source && (
                        <button
                          onClick={() => window.open(question.source, "_blank")}
                          className="text-sm text-blue-600 mt-3 underline cursor-pointer"
                        >
                          Verified by Source
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="bg-[#f0f0f3] rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <p className="text-gray-500 text-lg">
              No {activeTab} contests found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contests;
