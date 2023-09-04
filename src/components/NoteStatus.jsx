import Message from "./Message";


function NoteStatus({ notes }) {

    const allNotes = notes.length;
    const completedNotes = notes.filter((n) => n.isCompleted).length;
    const unCompletedNotes = allNotes - completedNotes;

    if (!allNotes) return <Message>
        <span>ℹ</span>
        <span> No Notes has already been added. </span>
        <span>🧐</span>
    </Message>

    return (
        <ul className="notes-status">
            <li>All<span>{allNotes}</span></li>
            <li>Completed<span>{completedNotes}</span></li>
            <li>Open<span>{unCompletedNotes}</span></li>
        </ul>
    )
}

export default NoteStatus