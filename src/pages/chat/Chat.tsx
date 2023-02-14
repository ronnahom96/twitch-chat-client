import React, { FormEvent, useEffect, useRef, useState } from "react";
import io, { Socket } from "socket.io-client";
import { MessageData } from "../../common/interfaces";
import MessageList from "../../components/messageList/MessageList";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "react-router-dom";
import styles from "./Chat.module.css";
import ActiveUsers from "../../components/activeUser/ActiveUsers";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [text, setText] = useState("");
  const [typingStatus, setTypingStatus] = useState("ron typing...");
  const [socket, setSocket] = useState<Socket | null>(null);
  const username = useAppSelector((state: RootState) => state.user.username);
  const lastMessageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([
      { id: uuidv4(), author: "ron", text: "ron message 1" },
      { id: uuidv4(), author: "ron", text: "another message" },
      { id: uuidv4(), author: "tal", text: "tal message" },
    ]);
    const socket = io("http://localhost:4000", { transports: ["websocket"] });
    setSocket(socket);

    socket.on("typingResponse", (data) => setTypingStatus(data));
    socket.on("notifyMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current!.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const messageData: MessageData = { id: uuidv4(), author: username, text };
    socket?.emit("sendMessage", messageData);
    setText("");
  };

  const isLoggedIn = !!username;

  if (!isLoggedIn) {
    redirect("/login");
    return null;
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatBodyContainer}>
        <h1>Welcome To Twitch Chat</h1>
        <h2>Hello {username}</h2>
        <MessageList messages={messages} lastMessageRef={lastMessageRef} />
        <div className={styles.typingStatusContainer}>
          <span className={styles.typingStatus}>{typingStatus}</span>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type='submit'>Send</button>
        </form>
      </div>
      <ActiveUsers></ActiveUsers>
    </div>
  );
};

export default Chat;
