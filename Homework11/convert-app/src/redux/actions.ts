import { Note } from "./reducers";

export const saveNote = (payload: Note) => ({
  type: "SAVE_NOTE",
  payload: payload,
});
