import React from "react";
import { MessageData } from "../../common/interfaces";
import Message from "../message/Message";
import './MessageList.module.css';

interface MessageListProps {
  messages: MessageData[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className='message-list'>
      {messages.map((message) => (
        <Message key={message.id} text={message.text} author={message.author} />
      ))}
    </div>
  );
};

export default MessageList;
