import { useState } from "react";


function AddNewNote({ onAddNote }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description) return null;
        const newNote = {
            title,
            description,
            isCompleted: false,
            createdAt: new Date().toISOString(),
            id: Date.now(),
        }
        onAddNote(newNote);
        setTitle("");
        setDescription("");
    }
    return (
        <div className="add-new-note">
            <h2>Add New Note</h2>
            <form onSubmit={handleSubmit} className="note-form">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Note title..." />
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Note description..." />
                <button className="add-note" type="submit">Add New Note</button>
            </form>
        </div>
    )
}

export default AddNewNote