import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() =>{
    axios.get('/api/jokes')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (

    <>
      <h1>Chai aur full stack</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke) =>(
          <div key={jokes.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
