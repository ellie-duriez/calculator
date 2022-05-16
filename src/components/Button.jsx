import React from "react"

function Button (props) {
    return (
        <button onClick={props.func} className={props.className}>{props.value}</button>
    )
}

export default Button;