import React from "react";
import "./Message.module.css";

interface MessageProps {
  author: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ author, text }) => {
  return (
    <div className='message'>
      <p className='message-author'>{author}:</p>
      <p className='message-text'>{text}</p>
    </div>
  );
};

export default Message;
