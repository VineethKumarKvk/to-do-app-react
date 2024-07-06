import './Button.css'

function Button({children,onClick}) {
    return (
        <div className="button-container">
            <button className="button" onClick={onClick}>{children}</button>
        </div>
        
    )
}

export default Button;