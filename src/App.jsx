import { useState } from "react"

function App() {

  const [articoli, setArticoli] = useState([
    "Introduzione a JavaScript",
    "Come funziona il DOM",
    "Guida base a React",
    "Le arrow functions spiegate bene",
    "Array e metodi utili in JavaScript"
  ])

  const [nuovoTitolo, setNuovoTitolo] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    setArticoli([nuovoTitolo, ...articoli])
  }

  function removeTitolo(indice) {
    const rimozione = articoli.filter((art, index) => index != indice)
    setArticoli(rimozione)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nuovoTitolo} onChange={(e) => setNuovoTitolo(e.target.value)} placeholder="scrivi il titolo del blog" />
        <button type="submit">Submite</button>
      </form>

      <ul>
        {
          articoli.map((articolo, index) => (
            <li key={index}>
              {articolo}
              <button onClick={() => removeTitolo(index)}>
                ❌
              </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default App
