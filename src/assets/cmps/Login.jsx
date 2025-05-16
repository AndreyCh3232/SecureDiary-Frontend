import { useState } from 'react'

const STORAGE_KEY = 'diaryPassword'

export function Login({ onLogin }) {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)

    function handleSubmit(ev) {
        ev.preventDefault()

        const savedPassword = localStorage.getItem(STORAGE_KEY)

        if (isRegister) {
            if (!password || password.length < 4) {
                alert('הסיסמה צריכה להיות לפחות 4 תווים')
                return
            }
            if (password !== confirmPassword) {
                alert('הסיסמאות לא תואמות')
                return
            }

            localStorage.setItem(STORAGE_KEY, password)
            alert('נרשמת בהצלחה! אפשר להתחבר כעת')
            setIsRegister(false)
            setPassword('')
            setConfirmPassword('')
            return
        }

        if (savedPassword === password) {
            onLogin(password)
        } else {
            alert('סיסמה שגויה')
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>{isRegister ? 'הרשמה' : 'התחברות ליומן'}</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="הכנס סיסמה"
                        style={{ direction: 'rtl', textAlign: 'right' }}
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    {isRegister && (
                        <input
                            type="password"
                            placeholder="אישור סיסמה"
                            style={{ direction: 'rtl', textAlign: 'right' }}
                            value={confirmPassword}
                            onChange={(ev) => setConfirmPassword(ev.target.value)}
                        />
                    )}
                    <button type="submit">{isRegister ? 'הרשם' : 'התחבר'}</button>
                </form>

                <p style={{ marginTop: '1rem' }}>
                    {isRegister ? (
                        <>
                            <button type="button" onClick={() => setIsRegister(false)}>
                                התחבר כאן
                            </button>
                            {isRegister && (
                                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    <a
                                        href="#"
                                        className="link-text"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setIsRegister(false)
                                        }}
                                    >
                                        ?כבר רשום
                                    </a>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <button type="button" onClick={() => setIsRegister(true)}>
                                צור חשבון
                            </button>
                            {!isRegister && (
                                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                                    <a
                                        href="#"
                                        className="link-text"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setIsRegister(true)
                                        }}
                                    >
                                        ?אין לך סיסמה
                                    </a>
                                </div>
                            )}
                        </>
                    )}
                </p>
            </div>
        </div>
    )
} 