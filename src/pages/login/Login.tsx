import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { setUsername } from "../../reducers/userSlice";

import "./Login.module.css";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [userNameInput, setUserNameInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUsername(userNameInput));
    navigate(`/chat`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          value={userNameInput}
          onChange={(event) => setUserNameInput(event.target.value)}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
