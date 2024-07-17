import { CurrencyInfoForm } from "../form";
import { useDispatch, useSelector } from "react-redux";
import { saveNote } from "../../redux/actions";
import { Note, State } from "../../redux/reducers";
import { useParams } from "react-router-dom";

export const EditCurrencyInfo = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state: State) => state.notes);
  const { currencyId } = useParams<{ currencyId: string }>();
  const exitNote = notes.find((note) => note.currencyId === currencyId);

  const onSubmit = (note: Note) => {
    dispatch(saveNote(note));
  };

  return (
    <div>
      <CurrencyInfoForm
        onSubmit={onSubmit}
        initialValues={{
          title: exitNote ? exitNote.title : "",
          body: exitNote ? exitNote.body : "",
        }}
      />
    </div>
  );
};
