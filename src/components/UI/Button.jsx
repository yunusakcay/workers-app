

function Button(props) {

    return (
        <button className={`p-2 text-lg bg-blue-500 text-white ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button