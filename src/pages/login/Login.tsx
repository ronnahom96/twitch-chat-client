import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.module.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/chat`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
