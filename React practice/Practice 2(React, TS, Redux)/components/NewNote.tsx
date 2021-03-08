import React, { ChangeEvent, useState } from 'react';

interface NewNoteProps {
    addNote(note: string): void;
}

export const NewNote: React.FC<NewNoteProps> = ({ addNote }) => {
    // const [count, setCount] = useState<number | null | undefined | string>(5);    *** useState hook usage
    // const [count, setCount] = useState<TextNode>({text: 'Hii all'});
    // setCount({text: "Bye y'all"});                                                *** useState hook usage 2
    const [note, setNote] = useState('');
    const updateNote = (e:ChangeEvent<HTMLInputElement>) => setNote(e.target.value);
    const onAddNoteClick = () => {
        addNote(note);
        setNote('');
    }
    return (
        <div>
            <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
            <button onClick={onAddNoteClick}>Add Note</button>
        </div>
    )
};