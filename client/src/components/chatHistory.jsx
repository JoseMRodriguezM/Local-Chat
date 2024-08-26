import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollArea from "./ui/scroll-area.jsx";
import {Button } from "./ui/button.jsx";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";

export default function Historial({ onSelectChat }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/history")
      .then((response) => {
        setChatHistory(response.data.conversations);
      })
      .catch((error) => {
        console.error("Error al cargar el historial de chat:", error);
      });
  }, []);

  const getDayLabel = (dateStr) => {
    const date = new Date(dateStr);

    if (isNaN(date)) {
      console.error("Fecha inválida: ", dateStr);
      return "Fecha Inválida";
    }

    const today = new Date();
    const diffTime = today.getTime() - date.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Hoy";
    if (diffDays === 1) return "Ayer";
    return date.toLocaleDateString();
  };

  const groupedChats = chatHistory.reduce((acc, chat, index) => {
    const dayLabel = getDayLabel(chat.date || new Date());
    if (!acc[dayLabel]) {
      acc[dayLabel] = [];
    }
    acc[dayLabel].push({ id: index, ...chat });
    return acc;
  }, {});

  return (
    <div className="h-full bg-zinc-800 p-4">
      <ScrollArea className="h-full pr-4">
        {Object.entries(groupedChats).map(([dayLabel, chats]) => (
          <div key={dayLabel} className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-400 mb-3">
              {dayLabel}
            </h3>
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="py-1.5 px-4 rounded-lg hover:bg-zinc-700 transition-colors duration-200 cursor-pointer text-white"
                onClick={() => onSelectChat(chat)}
              >
                <p className="text-sm text-zinc-300">{chat.question}</p>
              </div>
            ))}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}
