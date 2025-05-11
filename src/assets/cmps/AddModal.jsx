import { useState } from 'react'

export function AddModal({ onAdd, onClose }) {
    const [text, setText] = useState('')

    function handleAdd() {
        if (!text.trim()) return
        const today = new Date().toLocaleDateString('he-IL')
        const newEntry = {
            id: Date.now(),
            date: today,
            text,
        }
        onAdd(newEntry)
        onClose()
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>הוספת רשומה</h3>
                <textarea
                    placeholder="מה עבר עליך היום..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="modal-actions">
                    <button onClick={handleAdd}>✔️ אישור</button>
                    <button onClick={onClose}>❌ ביטול</button>
                </div>
            </div>
        </div>
    )
}