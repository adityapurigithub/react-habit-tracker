import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcomeWrapper}>
      <div className={styles.bgWrapper}>
        <div className={styles.welcomeLogo}>
          <h1>Welcome</h1>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardAddHabit}>
            <Link className={styles.link} to="/add-habit">
              <h2>Add A New Habit</h2>
            </Link>
            <span>
              A habit cannot be tossed out the window; it must be coaxed down
              the stairs a step at a time.
              <br />- Mark Twain
            </span>
          </div>
          <div className={styles.cardHabitList}>
            <Link className={styles.link} to="/habit-list">
              <h2>Your Habits List</h2>
            </Link>
            <span>
              Feeling sorry for yourself, and your present condition is not only
              a waste of energy but the worst habit you could possibly have.
              <br />- Dale Carnegie
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
