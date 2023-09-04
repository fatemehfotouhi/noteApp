
function NoteList({ notes, onDeleteNote, onCompleteNote, sortBy }) {
    let sortedNotes = notes;
    if (sortBy === "earliest") sortedNotes = notes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); if (sortBy === "latest") sortedNotes = notes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sortBy === "latest") sortedNotes = notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (sortBy === "completed") sortedNotes = notes.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))


    return (
        <div className="note-list">
            {sortedNotes.map((note) => <NoteItem note={note} key={note.id} onDeleteNote={onDeleteNote} onCompleteNote={onCompleteNote} />)}
        </div>
    )
}

export default NoteList;

function NoteItem({ note, onDeleteNote, onCompleteNote }) {
    const options = {
        month: "short",
        year: "numeric",
        day: "numeric",
    }
    return (
        <div className={`note-item ${note.isCompleted ? "completed" : ""}`}>
            <div className="note-item__body">
                <div>
                    <p className="note-item__title">{note.title}</p>
                    <p className="note-item__desc">{note.description}</p>
                </div>
                <div className="note-item__actions">
                    <button onClick={() => onDeleteNote(note.id)} className="delete-note" >❌</button>
                    <input
                        type="checkbox"
                        value={note.id}
                        checked={note.isCompleted}
                        onChange={onCompleteNote}
                    />
                </div>
            </div>
            <div className="note-item__footer">
                <span className="note-item__date">{new Date(note.createdAt).toLocaleDateString("en-US", options)}</span>
            </div>
        </div>
    )

}