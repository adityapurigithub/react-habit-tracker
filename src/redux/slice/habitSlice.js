import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  habits: [],
};
//using create slice it automatically create action-creator..like addHabit and etc
const habitSlice = createSlice({
  name: "habit",
  initialState: INITIAL_STATE,
  reducers: {
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
            dd: date - 6,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 1,
            weekI: weekDayIndex + 4,
            day: week[weekDayIndex + 4],
            dd: date - 5,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 2,
            weekI: weekDayIndex + 5,
            day: week[weekDayIndex + 5],
            dd: date - 4,
            done: false,
            notDone: false,
            noAction: true,
          },
          {
            id: 3,
            weekI: weekDayIndex + 6,
            day: week[weekDayIndex + 6],
            dd: date - 3,
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
      habits[action.payload.id].weekView[action.payload.i].noAction = false;
      habits[action.payload.id].weekView[action.payload.i].done = false;
      habits[action.payload.id].weekView[action.payload.i].notDone = true;
    },
    habitNotDone: (state, action) => {
      let habits = state.habits;
      habits[action.payload.id].weekView[action.payload.i].noAction = true;
      habits[action.payload.id].weekView[action.payload.i].done = false;
      habits[action.payload.id].weekView[action.payload.i].notDone = false;
    },
    habitNoAction: (state, action) => {
      let habits = state.habits;
      // console.log(action.payload);
      habits[action.payload.id].weekView[action.payload.i].noAction = false;
      habits[action.payload.id].weekView[action.payload.i].done = true;
      habits[action.payload.id].weekView[action.payload.i].notDone = false;
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
