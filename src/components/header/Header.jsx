import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/eryka space.png'
import Button from '../button/Button'
import Modal from '../modal/Modal'
import './Header.css'


const Header = () => {
    const [modal, setModal] = useState(false)
    const [mType, setmType] = useState("")
    const handleClick = (mType) => {
        setModal(true)
        setmType(mType)
    }

    return (
        <>
            <div className='Header'>
                <Link to='/'> <img className='Header__img' src={logo} alt="Eryka Kreations" /></Link >
                <input className='Header__search' type="search" placeholder='Search for Creators' />
                <div className="Header__buttons">
                    <Button text="Log in" fn={() => handleClick("login")} />
                    <Button text="Sign Up" color="blue" fn={() => handleClick("signUp")} />
                </div>
            </div >

            {modal && <Modal mType={mType} setModal={setModal} setmType={setmType} />}
        </>
    )
}

export default Header