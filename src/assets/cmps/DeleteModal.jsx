export function DeleteModal({ entry, onDelete, onClose }) {
    function handleDelete() {
        onDelete(entry.id)
        onClose()
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>מחק רשומה</h3>
                <p style={{ textAlign: 'center' }}>
                    האם אתה בטוח שברצונך למחוק את הרשומה <strong>{entry.date}</strong>?
                </p>
                <div className="modal-actions">
                    <button onClick={handleDelete}>מחק</button>
                    <button onClick={onClose}>ביטול</button>
                </div>
            </div>
        </div>
    )
}