import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  addHabit,
  deleteHabit,
  habitDone,
  habitNoAction,
  habitNotDone,
} from "../redux/slice/habitSlice";
import Welcome from "./WelcomePage/Welcome";
import AddHabit from "./AddHabit/AddHabit";
import HabitList from "./HabitLists/HabitList";
import WeekView from "./WeekView/WeekView";
function App() {
  const [input, setInput] = useState("");
  const date = new Date();
  let d = date.getDay();

  let habitState = useSelector((state) => state.habits);
  console.log(habitState);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteHabit = (e) => {
    console.log(e.target.id);
    dispatch(deleteHabit(e.target.id));
  };
  const handleStatusChange = (e) => {
    console.log(e);
    const status = e.target.alt;
    const id = e.target.id;
    const i = e.target.name;
    // console.log(id);
    // console.log(i);
    if (i > d) {
      return alert("Cant Change status of upcoming dates ");
    }
    if (status === "done") {
      dispatch(habitDone({ id, i })); //sending id and i -params as a payload object
    } else if (status === "not-done") {
      dispatch(habitNotDone({ id, i }));
    } else {
      dispatch(habitNoAction({ id, i }));
    }
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/add-habit"
            element={
              <AddHabit
                handleChangeInput={handleChangeInput}
                input={input}
                setInput={setInput}
                habitState={habitState}
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/habit-list"
            element={
              <HabitList
                habitState={habitState}
                handleDeleteHabit={handleDeleteHabit}
                handleStatusChange={handleStatusChange}
              />
            }
          />
          <Route
            path="/week-view"
            element={
              <WeekView
                habitState={habitState}
                handleStatusChange={handleStatusChange}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
