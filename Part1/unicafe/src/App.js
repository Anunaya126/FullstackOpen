import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = props=> <div>{props.text}:{props.clicks}</div>


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    
    setGood(good +1)
  }
  const handleNeutralClicks = () => {
    
    setNeutral(neutral+1)
  }
  const handleBadClicks = () => {
    
    setBad(bad+1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <Button handleClick={handleGoodClicks} text='good' />
      <Button handleClick={handleNeutralClicks} text='neutral' />
      <Button handleClick={handleBadClicks} text='Bad' />
      <h2>Statistics</h2>
      <br/>
      <Display clicks={good} text='good'/>
      <Display clicks={neutral} text='neutral'/>
      <Display clicks={bad} text='bad'/>
    </div>
  );
}

export default App;
