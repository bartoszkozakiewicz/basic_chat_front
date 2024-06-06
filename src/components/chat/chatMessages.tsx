import React, { useEffect, useRef } from "react";
import ChatSingle from "./chatSingle";
//----------------------------------

type Props = {
  messages: { name: string; message: string }[];
};

const ChatMessages = ({ messages }: Props) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col gap-4 h-[100%] max-h-[100%] overflow-auto ">
      {messages &&
        messages.map((message, index) => (
          <ChatSingle
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
