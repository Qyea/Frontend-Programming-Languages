import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Task = string | undefined;

type initialDataState = {
  tasks: Task[];
};

const initialState = {
  tasks: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTodo: (state: initialDataState, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const dataApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dog.ceo/api/breeds/image/random",
  }),
  endpoints: (builder) => ({
    fetchRandomDog: builder.query({
      query: () => "/random",
    }),
  }),
});

export const { useFetchRandomDogQuery } = dataApi;

export const { addTodo } = dataSlice.actions;
export default dataSlice.reducer;
