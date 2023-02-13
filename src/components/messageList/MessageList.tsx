import React from "react";
import { MessageData } from "../../common/interfaces";
import Message from "../message/Message";
import styles from './MessageList.module.css';

interface MessageListProps {
  messages: MessageData[];
  lastMessageRef: any;
}

const MessageList: React.FC<MessageListProps> = ({ messages, lastMessageRef }) => {
  return (
    <div className={styles.messageList}>
      {messages.map((message) => (
        <Message key={message.id} text={message.text} author={message.author} />
      ))}
      <div ref={lastMessageRef} />
    </div>
  );
};

export default MessageList;
