import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [Jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  })

  return (
    <>
      <h1>Establishing Connection</h1>
      <p>Jokes : {Jokes.length}</p>
      {
        Jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
