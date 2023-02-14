import React, { useState } from "react";
import styles from "./ActiveUsers.module.css";

const ActiveUsers: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState<string[]>([]);

  return (
    <div className={styles.activeUsers}>
      <h3>Active Users:</h3>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  );
};

export default ActiveUsers;
