import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const ChatBubble = ({ text = "", isUser, speed = 0.5, animate = true }) => {
  const [displayedText, setDisplayedText] = useState(animate ? "" : text);

  useEffect(() => {
    if (!animate) {
      setDisplayedText(text);
      return;
    }

    let currentIndex = 0;
    let newText = "";

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        newText += text[currentIndex];
        setDisplayedText(newText);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, animate]);

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`inline-block p-2 text-white sm:max-w-sm md:max-w-md lg:max-w-lg ${
          isUser ? "bg-zinc-700 rounded-full" : "bg-transparent"
        }`}
        style={{
          wordBreak: "break-word",
          textAlign: isUser ? "right" : "left",
        }}
      >
        <ReactMarkdown
          className="prose prose-lg dark:prose-invert"
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {displayedText}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatBubble;
