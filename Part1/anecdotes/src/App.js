import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0,0,0,0,0,0,0])

  const handleClick = () => {
    setSelected(getRandomInt(anecdotes.length - 1))
  }
  const handleVote = () => {
    const newVote =[...vote]
    newVote[selected]+=1
    setVote(newVote)
  }
  return (
    <div className="App">
      {anecdotes[selected]}
      <br />
      <p>has {vote[selected]} votes</p>
      <button onClick={handleClick}>next anecdote</button>
      <button onClick={handleVote}>vote</button>
    </div>
  );
}

export default App;
