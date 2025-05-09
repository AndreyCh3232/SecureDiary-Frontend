import { useState, useEffect } from 'react'

const STORAGE_KEY = 'diaryEntries'

export function Diary({ onLogout }) {
    const [entries, setEntries] = useState([])

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

    function deleteEntry(entryId) {
        const shouldDelete = confirm('האם אתה בטוח שברצונך למחוק את הרשומה?')
        if (!shouldDelete) return

        setEntries(prevEntries => prevEntries.filter(entry => entry.id !== entryId))
    }

    function editEntry(entryId) {
        const entryToEdit = entries.find(entry => entry.id === entryId)
        if (!entryToEdit) return

        const updatedText = prompt('ערוך את הרשומה:', entryToEdit.text)
        if (!updatedText) return

        const updatedEntries = entries.map(entry =>
            entry.id === entryId ? { ...entry, text: updatedText } : entry
        )
        setEntries(updatedEntries)
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
                            <button onClick={() => editEntry(entry.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✏️</button>
                            <button onClick={() => deleteEntry(entry.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>❌</button>
                        </div>
                    </div>
                    <p>{entry.text}</p>
                </div>
            ))}
        </div>
    )
}