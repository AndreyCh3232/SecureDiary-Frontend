import { useState, useEffect } from 'react'

export function EditModal({ entry, onSave, onClose }) {
    const [text, setText] = useState(entry.text)

    useEffect(() => {
        setText(entry.text)
    }, [entry])

    function handleSave() {
        if (!text.trim()) return
        onSave({ ...entry, text })
        onClose()
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>עריכת רשומה</h3>
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
                <div className="modal-actions">
                    <button onClick={handleSave}>שמור</button>
                    <button onClick={onClose}>ביטול</button>
                </div>
            </div>
        </div>
    )
}