import { useState } from 'react'

const Header = (props) => {
  const {title} = props
  return (
    <h1>{title}</h1>
  )
}

const Button = (props) => {
  const {name, func} = props
  return (
    <button onClick={func}>{name}</button>
  )
}

const DisplayStat = (props) => {
  const {name, value} = props
  return (
    <p>{name} : {value}</p>
  )
}

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function incrementGood() {
    setGood(preValue => preValue + 1)
  }

  function incrementNeutral() {
    setNeutral(preValue => preValue + 1)
  }

  function incrementBad() {
    setBad(preValue => preValue + 1)
  }

  let all = good + neutral + bad

  function calcAverage() {
    return Math.abs((good - bad) / 9)
  }

  function pourcentage() {
    return (good * 100 / all) + "%"
  }

  return (
    <div>
      <Header title={"Give feedback"}/>
      <Button func={incrementGood} name={'Good'}/>
      <Button func={incrementBad} name={'Bad'}/>
      <Button func={incrementNeutral} name={'Neutral'}/>
      <Header title={"Statistics"} />
      <DisplayStat name={'Good'} value={good} />
      <DisplayStat name={'Bad'} value={bad} />
      <DisplayStat name={'Neutral'} value={neutral} />
      <DisplayStat name={'All'} value={all} />
      <DisplayStat name={'Average'} value={calcAverage()} />
      <DisplayStat name={'Positive'} value={pourcentage()} />
    </div>
  )
}

export default App