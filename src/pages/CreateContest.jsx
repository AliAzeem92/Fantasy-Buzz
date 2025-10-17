import React, { useState } from "react";
import { Plus, Minus, Trash2, CloudUpload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateContest = () => {
  const [contest, setContest] = useState({
    name: "",
    description: "",
    activeTill: "",
    image: null,
    questions: [
      {
        id: 1,
        question: "",
        options: [
          { id: 1, text: "" },
          { id: 2, text: "" },
        ],
        activeTill: "",
        source: "",
      },
    ],
  });

  const navigate = useNavigate();

  // Image upload (convert to base64)
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setContest({ ...contest, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Add new question
  const addQuestion = () => {
    const newQ = {
      id: Date.now(),
      question: "",
      options: [
        { id: 1, text: "" },
        { id: 2, text: "" },
      ],
      activeTill: "",
      source: "",
    };
    setContest({ ...contest, questions: [...contest.questions, newQ] });
  };

  // Delete question
  const deleteQuestion = (id) => {
    setContest({
      ...contest,
      questions: contest.questions.filter((q) => q.id !== id),
    });
  };

  // Add/remove options
  const addOption = (qid) => {
    setContest({
      ...contest,
      questions: contest.questions.map((q) =>
        q.id === qid
          ? { ...q, options: [...q.options, { id: Date.now(), text: "" }] }
          : q
      ),
    });
  };

  const removeOption = (qid, oid) => {
    setContest({
      ...contest,
      questions: contest.questions.map((q) =>
        q.id === qid
          ? { ...q, options: q.options.filter((o) => o.id !== oid) }
          : q
      ),
    });
  };

  // Change handlers
  const handleQuestionChange = (qid, field, value) => {
    setContest({
      ...contest,
      questions: contest.questions.map((q) =>
        q.id === qid ? { ...q, [field]: value } : q
      ),
    });
  };

  const handleOptionChange = (qid, oid, value) => {
    setContest({
      ...contest,
      questions: contest.questions.map((q) =>
        q.id === qid
          ? {
              ...q,
              options: q.options.map((o) =>
                o.id === oid ? { ...o, text: value } : o
              ),
            }
          : q
      ),
    });
  };

  // Submit
  const handleSubmit = () => {
    localStorage.setItem("contestData", JSON.stringify(contest));
    navigate("/dashboard/contests");
  };

  return (
    <div className="">
      <h1 className="text-3xl font-semibold mb-4 text-darkBlue  ">
        Create New Contest
      </h1>

      {/* Contest Details */}
      <div className="bg-white mb-6 max-w-3xl ">
        <div className="flex gap-4 mb-6 flex-col md:flex-row w-[100%] ">
          <div className="bg-[#eff0f3] w-[30%] flex flex-col text-gray-500 items-center justify-center p-4 rounded-md relative">
            <CloudUpload />
            <label className="block mb-1 font-medium underline cursor-pointer">
              Upload the Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
            {contest.image && (
              <img
                src={contest.image}
                alt="Preview"
                className="w-32 h-32 mt-2 object-cover rounded-md"
              />
            )}
          </div>

          <div className="w-[70%] ">
            <div>
              <label className="block mb-1 font-medium">Contest Name</label>
              <input
                type="text"
                className="border p-2 w-full rounded-md"
                value={contest.name}
                onChange={(e) =>
                  setContest({ ...contest, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                rows="2"
                className="border p-2 w-full rounded-md"
                value={contest.description}
                onChange={(e) =>
                  setContest({ ...contest, description: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Contest Active Till
              </label>
              <input
                type="datetime-local"
                className="border p-2 w-full rounded-md"
                value={contest.activeTill}
                onChange={(e) =>
                  setContest({ ...contest, activeTill: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Line */}

      <div className="border-b-2 "></div>

      {/* Questions */}
      {contest.questions.map((q, idx) => (
        <div
          key={q.id}
          className="bg-[#eff0f3] border-l-8 border-darkBlue max-w-3xl p-6 rounded-2xl my-6"
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg text-[#65c2be] ">
              Question {idx + 1}
            </h2>
            <Trash2
              className="text-red-500 cursor-pointer"
              onClick={() => deleteQuestion(q.id)}
            />
          </div>

          <label className="block mb-1 font-medium ">Type the question:</label>
          <textarea
            placeholder="Type the question..."
            rows="2"
            className="border-2 border-[#65c2b] p-2 w-full bg-transparent rounded-md mb-3 h-32 "
            value={q.question}
            onChange={(e) =>
              handleQuestionChange(q.id, "question", e.target.value)
            }
          />

          <div className="border-2 border-[#65c2b] p-2 rounded-md mb-4 ">
            {q.options.map((opt, idx) => (
              <div key={opt.id} className="flex items-center gap-2 mb-2  ">
                <input
                  type="text"
                  placeholder={`Option ${idx + 1}`}
                  className="p-2 flex-1 bg-transparent border-b-2 border-gray-300 "
                  value={opt.text}
                  onChange={(e) =>
                    handleOptionChange(q.id, opt.id, e.target.value)
                  }
                />
                <Minus
                  className="cursor-pointer text-gray-400"
                  onClick={() => removeOption(q.id, opt.id)}
                />
              </div>
            ))}

            <button
              onClick={() => addOption(q.id)}
              className="cursor-pointer text-gray-600 text-end items-end w-full flex justify-end  "
            >
              <Plus />
            </button>
          </div>

          <div className="flex flex-row gap-5 items-center ">
            <span className="flex flex-col gap-8 ">
              <label className="block mb-1 font-medium ">
                Question Active Till:
              </label>
              <label className="block mb-1 font-medium ">Source:</label>
            </span>
            <span className="flex flex-col gap-6 ">
              <input
                type="datetime-local"
                className="border-2 p-2 rounded-full w-[100%] bg-transparent "
                value={q.activeTill}
                onChange={(e) =>
                  handleQuestionChange(q.id, "activeTill", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Source link"
                className="border-b-2 bg-transparent "
                value={q.source}
                onChange={(e) =>
                  handleQuestionChange(q.id, "source", e.target.value)
                }
              />
            </span>
          </div>
        </div>
      ))}

      <div className="flex flex-row items-center justify-between max-w-3xl mb-10 ">
        <button
          onClick={addQuestion}
          className="text-green text-xl flex items-center gap-1"
        >
          <span className="underline ">New Question</span>
          <Plus />
        </button>

        <button
          onClick={handleSubmit}
          className="bg-green text-white text-xl px-10 rounded-full py-2 hover:bg-greenHover transition-colors duration-200 shadow-md hover:shadow-lg flex items-center gap-2 "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateContest;
