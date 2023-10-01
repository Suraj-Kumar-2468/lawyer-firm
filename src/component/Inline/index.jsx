import React from 'react'

const Inline = ({ children, className, onclick }) => {
    return (
        <span className={className} onClick={onclick}>{
            children
        }</span>
    )
}
Inline.prototype = {
    children: Element,
    className: String,
    onclick: Function || null,
}


export default Inline