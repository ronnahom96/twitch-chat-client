import React from "react";
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1>About Twitch Chat</h1>
        <p>
          Twitch Chat is a live chat platform for Twitch streamers and viewers to
          connect and engage in real-time conversations.
        </p>
        <p>
          With Twitch Chat, you can join a live stream and participate in the chat
          alongside other viewers and the streamer. You can also send and receive
          messages, share your thoughts and opinions, and interact with others in
          real-time.
        </p>
        <p>
          Twitch Chat is designed to be fast, reliable, and easy to use, making it
          the perfect tool for anyone looking to connect with others and enhance
          their Twitch viewing experience.
        </p>
      </div>
    </div>
  );
};

export default About;
