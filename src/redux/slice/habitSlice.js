import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  habits: [],
};
const habitSlice = createSlice({
  name: "habit",
  initialState: INITIAL_STATE,
  reducers: {
    //using create slice it automatically create action-creator..like addHabit and etc
    addHabit: (state, action) => {
      const today = new Date();
      let date = today.getDate();
      let week = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
      ];
      let weekDayIndex = today.getDay();

      const habit = {
        habitName: action.payload,
        // done: false,
        // notDone: false,
        // noAction: true,
        weekI: weekDayIndex,
        weekView: [
          {
            id: 0,
            weekI: weekDayIndex + 3,
            day: week[weekDayIndex + 3],
            dd: date - 4,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 1,
            weekI: weekDayIndex + 4,
            day: week[weekDayIndex + 4],
            dd: date - 3,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 2,
            weekI: weekDayIndex + 5,
            day: week[weekDayIndex + 5],
            dd: date - 2,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 3,
            weekI: weekDayIndex + 6,
            day: week[weekDayIndex + 6],
            dd: date - 1,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 4,
            weekI: weekDayIndex,
            day: week[weekDayIndex],
            dd: date,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 5,
            weekI: weekDayIndex + 1,
            day: week[weekDayIndex + 1],
            dd: date + 1,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 6,
            weekI: weekDayIndex + 2,
            day: week[weekDayIndex + 2],
            dd: date + 2,
            done: false,
            notDone: false,
            noAction: true,
          },
        ],
      };
      state.habits.push(habit);
    },
    deleteHabit: (state, action) => {
      state.habits.splice(action.payload, 1);
    },
    habitDone: (state, action) => {
      let habits = state.habits;
      let habit = habits[action.payload.id];
      console.log(habits);
      console.log(action.payload);
      for (let index = 0; index < habit.weekView.length; index++) {
        if (action.payload.i == habit.weekView[index].weekI) {
          habit.weekView[index].noAction = false;
          habit.weekView[index].done = false;
          habit.weekView[index].notDone = true;
        }
      }
    },
    habitNotDone: (state, action) => {
      let habits = state.habits;
      let habit = habits[action.payload.id];
      console.log(habits);
      console.log(action.payload);
      for (let index = 0; index < habit.weekView.length; index++) {
        if (action.payload.i == habit.weekView[index].weekI) {
          habit.weekView[index].noAction = true;
          habit.weekView[index].done = false;
          habit.weekView[index].notDone = false;
        }
      }
    },
    habitNoAction: (state, action) => {
      let habits = state.habits;
      let habit = habits[action.payload.id];
      console.log(habits);
      console.log(action.payload);
      for (let index = 0; index < habit.weekView.length; index++) {
        console.log(habit.weekView[index].weekI);
        if (habit.weekView[index].weekI == action.payload.i) {
          habit.weekView[index].noAction = false;
          habit.weekView[index].done = true;
          habit.weekView[index].notDone = false;
        }
      }
    },
  },
});

export const { addHabit, deleteHabit, habitDone, habitNotDone, habitNoAction } =
  habitSlice.actions;
export default habitSlice;

/*.








*/

// import { ADD_HABIT } from "../actions/action";

// const initialState = "intial state";

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_HABIT:
//       return;
//     default:
//       return state;
//   }
// };
// export default rootReducer;
