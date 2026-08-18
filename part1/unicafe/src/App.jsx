import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

// a proper place to define a component
const Statistics = ({good, neutral, bad, all, average, positive}) =>{
  if(all===0)
    return <><h2>statistics</h2><p>No feedback given</p></>
  else {
    return <>
    <h2>statistics</h2>

    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="all" value={all} />
    <StatisticLine text="average" value={average} />
    <StatisticLine text="positive" value={positive+" %"} />
  </>}
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = ()=>{
    const updatedGood = good+1
    setGood(updatedGood)
    const updatedSum = all+1
    setAll(updatedSum)
    const updatedAverage = (updatedGood-bad)/updatedSum
    setAverage(updatedAverage)
    setPositive(updatedGood/updatedSum*100)
  }
  const handleNeutral = ()=>{
    const updatedNeutral = neutral+1
    setNeutral(updatedNeutral)
    const updatedSum = all+1
    setAll(updatedSum)
    const updatedAverage = (good-bad)/updatedSum
    setAverage(updatedAverage)
    setPositive(good/updatedSum*100)
  }
  const handleBad = ()=>{
    const updatedBad = bad+1
    setBad(updatedBad)
    const updatedSum = all+1
    setAll(updatedSum)
    const updatedAverage = (good-updatedBad)/updatedSum
    setAverage(updatedAverage)
    setPositive(good/updatedSum*100)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />

      <Statistics good={good} neutral={neutral}
        bad={bad} all={all}
        average={average} positive={positive}
      />
    </div>
  )
}

export default App