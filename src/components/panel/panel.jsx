import "../panel/panel.css";
import "@/App.css";
import { useState } from "react";

const Panel = () => {
    const titleinicial = "Titulo do painel"
    const [title, setTitle] = useState(titleinicial)

    const alternarTexto = () => {
        if (title === titleinicial)
            setTitle('Alternativo')
        // setTitle(titleinicial.toUpperCase())
        else {
            setTitle(titleinicial)
        }
    }

    return (
        <>
            <div id='center' className="panel">
                <h1 style={{ cursor: 'pointer' }} onClick={alternarTexto}>{title}</h1>
            </div>
        </>
    )
}

export default Panel;