import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticsLine = (props) => {
  return(
    <div>
      {props.text} {props.value}
    </div>
  )
}
const Statistics = ({good,neutral,bad}) => {
  return(
    <div>
      <StatisticsLine text="good:" value ={good} />
      <StatisticsLine text="neutral:" value ={neutral} />
      <StatisticsLine text="bad:" value ={bad} />
      <StatisticsLine text="all:" value ={good+neutral+bad} />
      <StatisticsLine text="avr:" value ={(good-bad)/(good+neutral+bad)} />
      <StatisticsLine text="positive:" value ={good/(good+neutral+bad)*100}/>
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
  if(good+bad+neutral == 0){
    return (
      <div>
      <Button handleClick = {increaseGood} text = 'good'/>
      <Button handleClick = {increaseNeutral} text = 'neutral'/>
      <Button handleClick = {increaseBad} text = 'bad'/>
      </div>
    )
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