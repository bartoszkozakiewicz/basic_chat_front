"use client";

import React from "react";
import ChatMessages from "./chatMessages";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
//----------------------------------

type Message = {
  name: string;
  message: string;
};

const ChatWindow = () => {
  const [currentMessage, setCurrentMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<Message[]>([]);

  const handleSendMessage = async () => {
    const prevMessages = messages;
    const prevCurrentMessage = currentMessage;

    setMessages((prev) => [...prev, { name: "You", message: currentMessage }]);
    setCurrentMessage("");

    try {
      const response = await axios
        .post(`http://127.0.0.1:8000/chat`, {
          message: currentMessage,
        })
        .then((response) => {
          // console.log("Response:", response.data.message);
          setMessages((prev) => [
            ...prev,
            { name: "Assistant", message: response.data.message },
          ]);
        })
        .catch((error) => {
          console.log("Error:", error);
          setCurrentMessage(prevCurrentMessage);
          setMessages(prevMessages);
        })
        .finally(() => {});
    } catch (err) {
      console.log("gowno");
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-100vh w-[60%] bg-gray-100 p-16">
      <div className="flex flex-col h-[100%] justify-between ">
        <ChatMessages messages={messages} />
        <TextField
          value={currentMessage}
          multiline
          maxRows={4}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="bg-[#2c9f56] text-white py-2 px-4 mt-2 border-0 rounded-md"
        >
          Send message
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
