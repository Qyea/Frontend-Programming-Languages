import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import dataSliceReducer from "./../modules/data/data.slice";
import { dataApi } from "./../modules/data/data.slice";

type Task = string | undefined;

// type TaskAction = {
//   type: string;
//   payload?: Task;
// };

export const addTodo = createAction("tasks/add", (payload: Task) => ({
  payload,
}));

type initialDataState = {
  tasks: Task[];
};

const initialState = {
  tasks: [],
};

// const dataReducer = (
//   state: initialDataState = initialState,
//   action: TaskAction
// ) => {
//   switch (action.type) {
//     case addTodo.type:
//       return { ...state, tasks: [...state.tasks, action.payload] };
//     default:
//       return state;
//   }
// };

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state: initialDataState, action) => {
    state.tasks.push(action.payload);
  });
});

// const userReducer = (state: any = {}) => {
//   return state;
// };

// const configReducer = (state: any = {}) => {
//   return state;
// };

export const store = configureStore({
  reducer: {
    data: dataSliceReducer,
    [dataApi.reducerPath]: dataApi.reducer,
    //data: dataReducer,
    // user: userReducer,
    // config: configReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});
