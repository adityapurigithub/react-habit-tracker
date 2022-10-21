import React from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/css/HabitList.module.css";
function HabitList({ habitState, handleDeleteHabit, handleStatusChange }) {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.head}>
        <h2>Your Habit Tracker</h2>
        <Link className={styles.link} to="/add-habit">
          Add A New Habit
        </Link>
        <Link className={styles.link} to="/week-view">
          Week View
        </Link>
      </div>
      <div className={styles.view}>
        <h2>Daily Detailed View</h2>
      </div>
      <div className={styles.listContainer}>
        {habitState.length !== 0 ? (
          habitState.map((habit, index) => {
            let weekI = habit.weekI - 1;
            return (
              <>
                <div className={styles.list}>
                  <div className={styles.todo}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3472/3472583.png"
                      style={{
                        height: "20px",
                      }}
                    />
                    <ul class={styles.listItem}>{habit.habitName}</ul>
                  </div>
                  <div className={styles.status}>
                    {habit.weekView[weekI].done ? (
                      <abbr title="This habit is done">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                          style={{
                            height: "25px",
                            cursor: "pointer",
                          }}
                          id={index}
                          name={weekI}
                          alt="done"
                          onClick={handleStatusChange}
                        />
                      </abbr>
                    ) : null}
                    {habit.weekView[weekI].notDone ? (
                      <abbr title="This habit is not done ">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
                          style={{
                            height: "25px",
                            cursor: "pointer",
                          }}
                          id={index}
                          name={weekI}
                          alt="not-done"
                          onClick={handleStatusChange}
                        />
                      </abbr>
                    ) : null}
                    {habit.weekView[weekI].noAction ? (
                      <abbr title="You have not even started with this habit">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/2569/2569198.png"
                          style={{
                            height: "25px",
                            cursor: "pointer",
                          }}
                          id={index}
                          name={weekI}
                          alt="no-action"
                          onClick={handleStatusChange}
                        />
                      </abbr>
                    ) : null}

                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
                      id={index}
                      style={{ height: "25px", cursor: "pointer" }}
                      onClick={handleDeleteHabit}
                    />
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className={styles.empty}>
            <h1>No habits added please Start with fresh habits!!!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default HabitList;
