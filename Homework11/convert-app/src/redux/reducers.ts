export interface Note {
  currencyId: string | undefined;
  title: string;
  body: string;
}

export interface State {
  notes: Note[];
}

export const initialState: State = {
  notes: [],
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SAVE_NOTE":
      const { currencyId, title, body } = action.payload;

      const existingNote = state.notes.find(
        (note) => note.currencyId === currencyId
      );
      if (existingNote) {
        return {
          ...state,
          notes: state.notes.map((note) =>
            note.currencyId === currencyId ? { ...note, title, body } : note
          ),
        };
      } else {
        return {
          ...state,
          notes: [...state.notes, { currencyId, title, body }],
        };
      }
    default:
      return state;
  }
};
