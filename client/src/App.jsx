import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Question from "./components/question.jsx";
import ChatBubble from "./components/chatBubble.jsx";
import Historial from "./components/chatHistory.jsx";
import NewChatButton from "./components/newChat.jsx";

const API_ROUTE = "http://localhost:8080/";

function App() {
  const [result, setResult] = useState(null);
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNewChat = () => {
    setConversation([]);
    setSelectedChat(null);
    setQuestion("");
    setResult(null);
  };

  const handleQuestionSubmit = async (event) => {
    event.preventDefault();

    if (question) {
      setConversation((prevConversation) => [
        ...prevConversation,
        { text: question, isUser: true },
      ]);

      const formData = new FormData();
      formData.append("question", question);

      try {
        const response = await axios.post(API_ROUTE, formData);
        setResult(response.data.result);

        setConversation((prevConversation) => [
          ...prevConversation,
          { text: response.data.result, isUser: false },
        ]);

        setQuestion("");
      } catch (error) {
        console.error("Error submitting question:", error);
      }
    } else {
      console.log("Question is empty");
    }
  };

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-zinc-900">
      <div className="fixed top-0 left-0 w-full h-14 shadow-md z-20 bg-zinc-800 flex items-center justify-between px-4">
        <NewChatButton onNewChat={handleNewChat} />
        <button
          className="md:hidden text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="flex flex-grow pt-14">
        <div
          className={`fixed md:relative w-64 h-full transition-all duration-300 z-10 bg-zinc-800 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <Historial onSelectChat={handleSelectChat} />
        </div>

        <div className="flex-grow overflow-auto p-4 md:ml-64">
          <div className="max-w-3xl mx-auto">
            {selectedChat ? (
              <div className="mb-4">
                <ChatBubble
                  text={selectedChat.question}
                  isUser={true}
                  animate={false}
                />
                <ChatBubble
                  text={selectedChat.response}
                  isUser={false}
                  animate={false}
                />
              </div>
            ) : (
              conversation.map((message, index) => (
                <ChatBubble
                  key={index}
                  text={message.text}
                  isUser={message.isUser}
                  animate={false}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20">
        <Question onSubmit={handleQuestionSubmit} setQuestion={setQuestion} />
      </div>
    </div>
  );
}

export default App;
