import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = props=> <div>{props.text}:{props.val}</div>


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

  const calcTotal = (good+bad+neutral)
  const calcAvg = (calcTotal/3)
  const positive = (good/calcTotal)*100



  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <Button handleClick={handleGoodClicks} text='good' />
      <Button handleClick={handleNeutralClicks} text='neutral' />
      <Button handleClick={handleBadClicks} text='Bad' />
      <h2>Statistics</h2>
      <br/>
      <Display val={good} text='good'/>
      <Display val={neutral} text='neutral'/>
      <Display val={bad} text='bad'/>
      <Display val={calcTotal} text='Total'/>
      <Display val={calcAvg} text='Average'/>
      <Display val ={positive} text='Positive'/>
    </div>
  );
}

export default App;
