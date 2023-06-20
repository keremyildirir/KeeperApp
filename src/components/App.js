import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Contact from '../pages/Contact';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/keremyldrr7/data/notes')
      .then(response => {
        setData(response.data);
      })
  }, []);

  useEffect(() => {
    if (data) {
      setNotes([
        {
          title: data.title,
          content: data.content,
          dueDate: data.dueDate,
          teammates: data.teammates,
          reminder: data.reminder,
        },
      ]);
    }
  }, [data]);

  function addNote(newNote) {
    setNotes(prevNotes => { return [...prevNotes, newNote]; });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <PageHeader />
      <Routes>
        <Route path="/" element={<HomePage notes={notes} deleteNote={deleteNote} addNote={addNote} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PageFooter />
    </div>
  );
}

export default App;