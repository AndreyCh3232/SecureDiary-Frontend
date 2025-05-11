import { useState, useEffect } from 'react'
import { EditModal } from './EditModal.jsx'
import { DeleteModal } from './DeleteModal.jsx'
import { AddModal } from './AddModal.jsx'

const STORAGE_KEY = 'diaryEntries'

export function Diary({ onLogout }) {
    const [entries, setEntries] = useState([])
    const [editingEntry, setEditingEntry] = useState(null)
    const [deletingEntry, setDeletingEntry] = useState(null)
    const [isAdding, setIsAdding] = useState(false)

    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
        setEntries(savedEntries)
    }, [])

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
    }, [entries])

    function handleAddEntry(newEntry) {
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
                    <button className="add-button" onClick={() => setIsAdding(true)}>
                        + הוספת רשומה
                    </button>
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

            {isAdding && (
                <AddModal
                    onAdd={handleAddEntry}
                    onClose={() => setIsAdding(false)}
                />
            )}

        </div>
    )
}