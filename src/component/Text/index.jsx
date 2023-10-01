import React from 'react'

const Text = ({ children, className, onclick }) => {
    return (
        <p className={className} onClick={onclick}>
            {children}
        </p>
    )
}

Text.prototype = {
    children: Element,
    className: String,
    onclick: Function || null,
}

export default Text