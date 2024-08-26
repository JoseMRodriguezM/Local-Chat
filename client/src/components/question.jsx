import React, { useState } from "react";

const Question = ({ onSubmit, setQuestion }) => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    setQuestion(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setLoading(true);

    try {
      await onSubmit(event);
      setInputValue("");
      setQuestion("");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  return (
    <div className="max-w-3xl mb-2 mx-auto w-full">
      <div className="flex items-center rounded-full bg-zinc-700 p-2">
        <input
          type="text"
          placeholder="Envía un mensaje a ChatGPT"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="flex-grow bg-transparent text-white placeholder-zinc-400 p-2 focus:outline-none"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className={` text-white rounded-lg p-2 ml-2 ${
            loading ? "cursor-not-allowed opacity-50" : "hover:bg-zinc-500"
          }`}
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Question;
