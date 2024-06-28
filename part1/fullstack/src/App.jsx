import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistics = ({good,neutral,bad}) => {
  return(
    <div>
    {good} <br/>
    {neutral} <br/>
    {bad} <br/>
    {good+neutral+bad}<br/>
    {(good-bad)/(good+neutral+bad)}<br/>
    {good/(good+neutral+bad)*100} %
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () =>
  {
    setGood(good+1)
  }
  const increaseNeutral = () =>
    {
      setNeutral(neutral+1)
    }
  const increaseBad = () =>
    {
      setBad(bad+1)
    }  

  return (
    <div>
      <Button handleClick = {increaseGood} text = 'good'/>
      <Button handleClick = {increaseNeutral} text = 'neutral'/>
      <Button handleClick = {increaseBad} text = 'bad'/>
      <br/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
 
  )
}

export default App