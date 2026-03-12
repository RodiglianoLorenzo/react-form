import { useState } from "react"

function App() {

  const [articoli, setArticoli] = useState([
    "Introduzione a JavaScript",
    "Come funziona il DOM",
    "Guida base a React",
    "Le arrow functions spiegate bene",
    "Array e metodi utili in JavaScript"
  ])

  return (
    <>
      <ul>
        {
          articoli.map((articolo, index) => (
            <li key={index}>
              {articolo}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
