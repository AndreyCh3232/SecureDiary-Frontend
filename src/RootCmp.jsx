import { useState } from 'react'
import { Login } from './assets/cmps/Login.jsx'
import { Diary } from './assets/cmps/Diary.jsx'
import './assets/styles/main.scss'

export function RootCmp() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function handleLogin(password) {
        if (password === '1234') {
            setIsLoggedIn(true)
        } else {
            alert('סיסמה שגויה')
        }
    }

    return (
        <div className="App">
            {isLoggedIn ? <Diary /> : <Login onLogin={handleLogin} />}
        </div>
    )
}
