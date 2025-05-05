export function Diary() {
    return (
        <div className="diary-container">
            <div className="diary-header">
                <h1>היומן שלי 📖</h1>
                <button className="add-button">+ הוספת רשומה</button>
            </div>

            <div className="entry-card">
                <h4>05.05.2025</h4>
                <p>היום היה יום נהדר! למדתי איך לבנות אפליקציה מאובטחת.</p>
            </div>
        </div>
    )
}