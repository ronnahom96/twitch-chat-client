import React, { FormEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { MessageData } from "../common/interfaces";
import MessageList from "../components/messageList/MessageList";
import { useAppSelector } from "../hooks/redux";
import { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [text, setText] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);

  const username = useAppSelector((state: RootState) => state.user.username);

  useEffect(() => {
    const socket = io("http://localhost:4000", { transports: ["websocket"] });
    setSocket(socket);

    socket.on("notifyMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const messageData: MessageData = { id: uuidv4(), author: username, text };
    socket?.emit("sendMessage", messageData);
    setText("");
  };

  return (
    <div>
      <h1>Hello {username}</h1>
      <MessageList messages={messages} />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Chat;
