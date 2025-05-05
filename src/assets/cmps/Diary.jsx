import { useState, useEffect } from 'react'

const STORAGE_KEY = 'diaryEntries'

export function Diary() {
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

    return (
        <div className="diary-container">
            <div className="diary-header">
                <h1>היומן שלי 📖</h1>
                <button className="add-button" onClick={addEntry}>+ הוספת רשומה</button>
            </div>

            {entries.map(entry => (
                <div className="entry-card" key={entry.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>{entry.date}</h4>
                        <button onClick={() => deleteEntry(entry.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>❌</button>
                    </div>
                    <p>{entry.text}</p>
                </div>
            ))}
        </div>
    )
}