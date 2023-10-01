import React from 'react'

const Block = ({ children, className, onclick }) => {
    return (
        <div className={className} onClick={onclick}>
            {children}
        </div>
    )
}

Block.prototype = {
    children: Element,
    className: String,
    onclick: Function || null,
}

export default Block