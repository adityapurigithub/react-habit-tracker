import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { addHabit } from "../../redux/slice/habitSlice";

import styles from "../../assets/css/AddHabit.module.css";

function AddHabit({
  handleChangeInput,
  input,
  habitState,
  dispatch,
  setInput,
}) {
  const navigate = useNavigate();

  const handleAddHabit = () => {
    if (input === "") {
      alert("Atleast Insert a New Habit to start with.!!!");
      return;
    }
    let present = false;
    habitState.filter((habit) => {
      if (habit.habitName === input) {
        present = true;
      }
      return;
    });
    if (present) {
      return alert("Already Present In List");
    }
    console.log(input);
    dispatch(addHabit(input));
    alert("Habit Added!!!");
    navigate("/habit-list");
    setInput("");
  };
  return (
    <div className={styles.addHabitWrapper}>
      <div className={styles.head}>
        <h2>Start With A New Habit</h2>
        <Link className={styles.link} to="/habit-list">
          Check Your Habit List
        </Link>
      </div>
      <div className={styles.field}>
        <div className={styles.inputField}>
          <input
            type="text"
            onChange={handleChangeInput}
            placeholder="Add New Habit"
          />
        </div>
        <div className={styles.btnField}>
          <button onClick={handleAddHabit}>ADD HABIT</button>
        </div>
      </div>
    </div>
  );
}

export default AddHabit;
