import React from 'react';
import CreateArea from '../components/NoteCreator';
import NoteItem from '../components/NoteItem';

const Home = ({ notes, deleteNote, addNote }) => {
  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <NoteItem
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            dueDate={noteItem.dueDate}
            teammates={noteItem.teammates}
            reminder={noteItem.reminder}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default Home;