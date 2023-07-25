import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState } from 'react';
import '../../css/Login.css'
import { auth } from '../../Firebase'
import { useNavigate } from 'react-router-dom';

export default function LoginBox() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            }).catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    navigate('/')
                }
            }).catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <div className="login_logo">
                <StorefrontIcon className="login_logoImage" fontSize="large" />
                <h2 className="login_logoTitle">
                    eSHOP
                </h2>
            </div>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='login_signInButton' onClick={signIn}>
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login_registerButton" onClick={register}>
                    Create your eSHOP Account
                </button>
            </div>
        </div>
    )
}