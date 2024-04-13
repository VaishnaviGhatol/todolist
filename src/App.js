import logo from './logo.svg';
import './App.css';
import CreateArea from './Components/CreateArea';
import Notes from './Components/Notes';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { useState } from 'react';
import './Components/External.css';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes){
    setNotes(prevNotes =>{
      return[
        ...prevNotes,
        newNotes
      ]
    })
  }
  return (
    <div className="App">
        <Header/>
     <CreateArea onAdd = {addNote}/>
      {notes.map((eachNote, index)=>{
        return(
          <Notes
          key = {index}
          id = {index}
          title = {eachNote.title}
          content = {eachNote.content}

          />
        )
      })}
     
   
     <Footer />
    </div>
  );
}

export default App;
