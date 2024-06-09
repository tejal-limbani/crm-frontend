import React, { useState } from "react"
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

    const handleOnChange = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        switch(name) {
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            default:
                break
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if(!email || !password) {
            alert("Fill up all the form!")
        }
        console.log(email)
        console.log(password)
    }

    const handleOnResetSubmit = e => {
        e.preventDefault();

        if(!email) {
            return alert("Please enter the email!")
        }

        console.log(email)
    }

    const formSwitcher = frmType => {
        setFrmLoad(frmType)
    }

    return (
        <div className="entry-page bg-info">
            <div className="form-box mt-4 p-5 bg-white rounded">
                {frmLoad === 'login' && (
                    <LoginForm
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                        password={password}
                    />
                )}
                {frmLoad === 'reset' && (
                    <ResetPassword
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnResetSubmit}
                        formSwitcher={formSwitcher}
                        email={email}
                    />
                )}
            </div>
        </div>
    );
}