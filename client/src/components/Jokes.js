import React, { useState, useEffect } from 'react';
import axios from "axios";

function Jokes() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/jokes", { headers: { Authorization: localStorage.getItem('token') }})
      .then(res => {
        console.log(res.data)
        setJokes(res.data)
      })
      .catch(err => {
        console.log(err, "No data")
      })
  }, [])

  return (
    <div className="jokesContainer">
      <h1>How About A Joke?</h1>
      {jokes.map(joke => {
        console.log(joke)
        return (
          <div className="jokesList" key={joke.id}>
            <h2>{joke.joke}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Jokes;