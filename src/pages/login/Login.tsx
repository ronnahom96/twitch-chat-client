import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { setUsername } from "../../reducers/userSlice";

import styles from "./Login.module.css";

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
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit}>
        <h2>Twitch Chat Login</h2>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputUsername}
            type="text"
            placeholder="Username"
            value={userNameInput}
            onChange={event => setUserNameInput(event.target.value)}
            required
          />
        </div>
        <button className={styles.btnSubmit} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
