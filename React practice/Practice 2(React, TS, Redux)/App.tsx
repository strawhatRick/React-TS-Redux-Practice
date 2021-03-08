import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions/actions';
import { NewNote } from './components/NewNote';
import { NotesState } from "./reducer/notesReducer";
//react functional component
const App: React.FC = () => {
  const notes = useSelector<NotesState,NotesState['notes']>((state) => state.notes)
  
  const dispatch = useDispatch();
  const onAddNote = (note:string) => { dispatch(addNote(note)) }
  
  return (
    <>
    <NewNote addNote={onAddNote}/>
    <hr />
    <ul>
      {notes.map((note) => {
        return <li key={note}>{note}</li>
      })}
    </ul>
    </>
  )
}
export default App;
