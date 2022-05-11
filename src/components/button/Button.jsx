import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    const { text, color, fn } = props
    return (
        <div className='Button' style={{ margin: '3px' }}>
            <input className={`Button__${color}`} type="button" value={text} onClick={() => fn(true)} />
        </div>
    )
}

export default Button

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

Button.defaultProps = {
    text: "Button",
    color: "white",
    fn: function () { }
}
