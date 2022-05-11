import React from 'react';
import Button from '../button/Button';
import './Modal.css';
import google from '../../images/google.png'

const Modal = ({ mType, setModal, setmType }) => {
    const handleSignUp = () => {
        setmType('signUp')
    }
    return (
        <div className='Modal'>
            {(mType === 'login') ? <div className="Modal__pop Modal__pop-login">
                <h1>Login</h1>
                <span className='close' onClick={() => setModal(false)}> &times;</span>
                <form>
                    <label htmlFor="email">Email-id</label>
                    <input type="email" id='email' placeholder='Email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Password' />
                    <div className="fpass">Forgot password?</div>
                    <Button text='Login' color="blue" />
                    <div className='otherLogin'>
                        <div className="gLogin">
                            <img src={google} alt="Google" />
                            <span>Login with Google</span>
                        </div>
                    </div>
                    <div>
                        Not a Eryka User? <span style={{ color: 'rgb(0, 179, 255)', cursor: 'pointer' }} onClick={() => { handleSignUp() }}>Sign Up</span>
                    </div>
                </form>
            </div> : <div className="Modal__pop Modal__pop-signUp">
                <h1>Sign Up</h1>
                <span className='close' onClick={() => setModal(false)}> &times;</span>
                <form>
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" id='firstName' placeholder='First Name' />
                    <label htmlFor="secondName">Second Name</label>
                    <input type="text" id='secondName' placeholder='Second Name' />
                    <label htmlFor="email">Email-id</label>
                    <input type="email" id='email' placeholder='Email' />
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Password' />
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" id='password' placeholder='Confirm password' />
                    <Button text='Sign up' color="blue" />
                </form>
            </div>}
        </div>
    )
}

export default Modal