import { useState } from 'react'
import './App.css'

const App = ({ cor = 'red' }) => {
  const txt = `testecvwvr`
  const [teste01, setTeste01] = useState(txt)

  const alternarTeste01 = () => {
    if (teste01 === txt.toUpperCase()) {
      setTeste01(txt);
    } else {
      setTeste01(teste01.toUpperCase());
    }
  }


  const textooriginal = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  const [texto, setTexto] = useState(textooriginal)

  const alternarTexto = () => {
    if (texto === textooriginal.toUpperCase()) {
      setTexto(textooriginal);
    } else {
      setTexto(texto.toUpperCase());
    }
  }
  return (
    <>
      <section id="center">


        <p>{teste01}</p>
        <p style={{ color: cor }}>{texto} </p>

        <button
          type="button"
          className="counter"
          onClick={alternarTexto}

        >
          Alternar texto
        </button>


        <button
          type="button"
          className="counter"
          onClick={alternarTeste01}
          style={{ cursor: 'pointer' }}

        >
          Alternar teste01
        </button>
      </section>

      <div className="ticks"></div>


    </>
  )
}



export default App
