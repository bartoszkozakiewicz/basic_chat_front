import React from "react";
import ChatSingle from "./chatSingle";
//----------------------------------

type Props = {
  messages: { name: string; message: string }[];
};

const ChatMessages = ({ messages }: Props) => {
  return (
    <div className="flex flex-col gap-4 h-[100%]">
      {messages &&
        messages.map((message, index) => (
          <ChatSingle
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
    </div>
  );
};

export default ChatMessages;
