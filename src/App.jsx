import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest")

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote])
  }
  const handleDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== Number(id))
    setNotes(filterNotes);
  }
  const handleCompleteNote = (e) => {
    const id = e.target.value;
    const newNotes = notes.map((n) => n.id === Number(id) ? { ...n, isCompleted: !n.isCompleted } : n
    )
    setNotes(newNotes)
  }


  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        onSortBy={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-content">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDeleteNote={handleDeleteNote}
            onCompleteNote={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  )
}

export default App;