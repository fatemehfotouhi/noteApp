import { useReducer, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import "./App.css";

function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "addNote": {
      return [...notes, payload]
    }
    case "deleteNote": {
      return notes.filter((note) => note.id !== Number(payload))
    }
    case "completeNote": {
      return notes.map((n) => n.id === Number(payload) ? { ...n, isCompleted: !n.isCompleted } : n
      )
    }
    default: throw new Error("unknown Error", type);
  }
}

function App() {

  const [sortBy, setSortBy] = useState("latest");
  const [notes, dispatch] = useReducer(notesReducer, []);

  const handleAddNote = (newNote) => {
    dispatch({ type: "addNote", payload: newNote })
  }
  const handleDeleteNote = (id) => {
    dispatch({ type: "deleteNote", payload: id })
  }
  const handleCompleteNote = (e) => {
    const id = e.target.value;
    dispatch({ type: "completeNote", payload: id })
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