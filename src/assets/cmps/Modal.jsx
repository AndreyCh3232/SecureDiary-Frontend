export function Modal({ message, onClose }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{message}</p>
                <button onClick={onClose}>סגור</button>
            </div>
        </div>
    )
}