import { useState, useEffect } from 'react'
import { Login } from './assets/cmps/Login.jsx'
import { Diary } from './assets/cmps/Diary.jsx'
import './assets/styles/main.scss'

export function RootCmp() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode')
        return savedMode === 'true'
    })

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('isLoggedIn') === 'true'
    })

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode)
        localStorage.setItem('darkMode', isDarkMode)
    }, [isDarkMode])

    function handleLogin(password) {
        if (password === '1234') {
            setIsLoggedIn(true)
            localStorage.setItem('isLoggedIn', 'true')
        } else {
            alert('סיסמה שגויה')
        }
    }

    function handleLogout() {
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
    }

    return (
        <div className="App">
            <header className="app-header">
                <button onClick={() => setIsDarkMode(prev => !prev)}>
                    {isDarkMode ? '☀️ מצב בהיר' : '🌙 מצב כהה'}
                </button>
            </header>

            {isLoggedIn ? (
                <Diary onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    )
}
