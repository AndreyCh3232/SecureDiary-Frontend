import { useState, useEffect } from 'react'
import { Login } from './assets/cmps/Login.jsx'
import { Diary } from './assets/cmps/Diary.jsx'
import './assets/styles/main.scss'

export function RootCmp() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [isDarkMode, setIsDarkMode] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode')
        return savedMode === 'true'
    })

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode)
        localStorage.setItem('darkMode', isDarkMode)
    }, [isDarkMode])

    function handleLogin(password) {
        if (password === '1234') {
            setIsLoggedIn(true)
        } else {
            alert('סיסמה שגויה')
        }
    }

    return (
        <div className="App">
            <header className="app-header">
                <button onClick={() => setIsDarkMode(prev => !prev)}>
                    {isDarkMode ? '☀️ מצב בהיר' : '🌙 מצב כהה'}
                </button>
            </header>

            {isLoggedIn ? <Diary /> : <Login onLogin={handleLogin} />}
        </div>
    )
}
