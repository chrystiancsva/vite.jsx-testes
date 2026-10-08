import '../App.css'

const Button = (props) => {

    const alerta = () => {
        alert(`A frase da label e: ${props.label}`)
    }

    return (
        <>
            <div id="center">
                <button
                    className="counter"
                    onClick={alerta}>

                    {props.label}
                </button>
            </div>
        </>
    )
}

export default Button