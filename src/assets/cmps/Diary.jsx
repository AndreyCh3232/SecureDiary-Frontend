import { useState, useEffect } from 'react'
import { EditModal } from './EditModal.jsx'
import { DeleteModal } from './DeleteModal.jsx'

const STORAGE_KEY = 'diaryEntries'

export function Diary({ onLogout }) {
    const [entries, setEntries] = useState([])
    const [editingEntry, setEditingEntry] = useState(null)
    const [deletingEntry, setDeletingEntry] = useState(null)

    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        setEntries(savedEntries)
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    }, [entries])

    function addEntry() {
        const today = new Date().toLocaleDateString('he-IL')
        const text = prompt('מה עבר עליך היום?')
        if (!text) return

        const newEntry = {
            id: Date.now(),
            date: today,
            text,
        }

        setEntries([newEntry, ...entries])
    }

    function handleEditSave(updatedEntry) {
        const updated = entries.map(entry =>
            entry.id === updatedEntry.id ? updatedEntry : entry
        )
        setEntries(updated)
    }

    function handleDelete(entryId) {
        setEntries(prevEntries => prevEntries.filter(entry => entry.id !== entryId))
    }

    return (
        <div className="diary-container">
            <div className="diary-header">
                <h1>היומן שלי 📖</h1>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="add-button" onClick={addEntry}>+ הוספת רשומה</button>
                    <button className="logout-button" onClick={onLogout}>התנתק</button>
                </div>
            </div>

            {entries.map(entry => (
                <div className="entry-card" key={entry.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4>{entry.date}</h4>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                onClick={() => setEditingEntry(entry)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                ✏️
                            </button>
                            <button
                                onClick={() => setDeletingEntry(entry)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                ❌
                            </button>
                        </div>
                    </div>
                    <p>{entry.text}</p>
                </div>
            ))}

            {editingEntry && (
                <EditModal
                    entry={editingEntry}
                    onSave={handleEditSave}
                    onClose={() => setEditingEntry(null)}
                />
            )}

            {deletingEntry && (
                <DeleteModal
                    entry={deletingEntry}
                    onDelete={handleDelete}
                    onClose={() => setDeletingEntry(null)}
                />
            )}
        </div>
    )
}