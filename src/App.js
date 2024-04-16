import logo from './logo.svg';
import './App.css';
import CreateArea from './Components/CreateArea';
import Notes from './Components/Notes';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import About from './Components/About';
import { useState } from 'react';
import './Components/External.css';
import Login from './Components/Login';
import './Components/Login.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes) {
    setNotes(prevNotes => {
      return [
        ...prevNotes,
        newNotes
      ]
    })
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((each, index) => {
        return index != id;
      })
    })
  }
  return (
    <div className="App my-app">
      {/* <Header /> */}
      <CreateArea onAdd={addNote} />
      {notes.map((eachNote, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteNote} />
        )
      })}
      {/* <About/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
