import { useState } from 'react'

export function Login({ onLogin }) {
    const [password, setPassword] = useState('')

    function handleSubmit(ev) {
        ev.preventDefault()
        onLogin(password)
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>התחבר ליומן</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="הכנס סיסמה"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <button type="submit">כניסה</button>
                </form>
            </div>
        </div>
    )
}