import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

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

      <h2>statistics</h2>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App