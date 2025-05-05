import { useState } from 'react'
import { Login } from './cmps/Login.jsx'
import { Diary } from './cmps/Diary.jsx'
import './styles/main.scss'

export function App() {
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
