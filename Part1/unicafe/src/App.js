import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = props=> <div>{props.text}:{props.clicks}</div>


function App() {

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleGoodClicks = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClicks)
  }
  const handleNeutralClicks = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1
    }
    setClicks(newClicks)
  }
  const handleBadClicks = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
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
      <Display clicks={clicks.good} text='good'/>
      <Display clicks={clicks.neutral} text='neutral'/>
      <Display clicks={clicks.bad} text='bad'/>
    </div>
  );
}

export default App;
