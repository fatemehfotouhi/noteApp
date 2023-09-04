
function NoteHeader({ notes, sortBy, onSortBy }) {
    return (
        <div className="note-header">
            <h1>My Notes ({notes.length})</h1>
            <select name="" id="" value={sortBy} onChange={onSortBy}>
                <option value="latest">Sort based on latest notes</option>
                <option value="earliest">Sort based on earliest notes</option>
                <option value="completed">Sort based on completed notes</option>
            </select>
        </div>
    )
}

export default NoteHeader