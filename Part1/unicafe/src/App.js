import { useState } from "react"

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)
const StatisticLine = props => (
  <tbody>
    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>
  </tbody>
)

const Statistics = (props) => {
  const calcTotal = (props.good + props.bad + props.neutral)
  const calcAvg = (calcTotal / 3)
  const positive = (props.good / calcTotal) * 100 + "%"

  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <StatisticLine value={props.good} text='good' />
      <StatisticLine value={props.neutral} text='neutral' />
      <StatisticLine value={props.bad} text='bad' />
      <StatisticLine value={calcTotal} text='Total' />
      <StatisticLine value={calcAvg} text='Average' />
      <StatisticLine value={positive} text='Positive' />
    </table>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicks = () => {
    setGood(good + 1)
  }
  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClicks = () => {
    setBad(bad + 1)
  }



  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <Button handleClick={handleGoodClicks} text='good' />
      <Button handleClick={handleNeutralClicks} text='neutral' />
      <Button handleClick={handleBadClicks} text='Bad' />
      <h2>Statistics</h2>
      <br />
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  );
}

export default App;
