import React from "react";
import styles from "./Message.module.css";

interface MessageProps {
  author: string;
  text: string;
}

const Message: React.FC<MessageProps> = ({ author, text }) => {
  return (
    <div className={styles.messageContainer}>
      <span className={styles.messageAuthor}>{author}:</span>
      <span className={styles.messageText}>{text}</span>
    </div>
  );
};

export default Message;
