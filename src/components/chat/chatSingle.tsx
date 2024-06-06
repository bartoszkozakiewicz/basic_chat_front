import React from "react";

type Props = {
  name: string;
  message: string;
};
const ChatSingle = ({ name, message }: Props) => {
  return (
    <div className="flex flex-col gap-1 w-[100%]">
      <p className="font-bold text-[#2c9f56]">{name}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatSingle;
