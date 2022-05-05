import React from "react";

const Button = ({onClick, children, outline, className}) => {
    return (<>
    <button onClick={onClick} className={`button ${className} ${outline ? 'button--outline' : ''}`}>
        {children}
    </button>
    </>);
}
export default Button;