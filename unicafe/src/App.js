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

const Stat = (props) => {
  const {goodnum, badnum, neutralnum, averagenum, pourcnum, value} = props
  if (value == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <p>Good : {goodnum}</p>
      <p>Bad : {badnum}</p>
      <p>Neutral :{neutralnum}</p>
      <p>Average : {averagenum}</p>
      <p>Positive : {pourcnum}</p>
    </>
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
  let average;
  let pourc;

  function calcAverage() {
    average =  Math.abs((good - bad) / 9)
  }
  calcAverage()

  function pourcentage() {
    pourc = (good * 100 / all) + "%"
  }
  pourcentage()

  return (
    <div>
      <Header title={"Give feedback"}/>
      <Button func={incrementGood} name={'Good'}/>
      <Button func={incrementBad} name={'Bad'}/>
      <Button func={incrementNeutral} name={'Neutral'}/>
      <Header title={"Statistics"} />
      <Stat goodnum={good} badnum={bad} neutralnum={neutral} averagenum={average} pourcnum={pourc} value={all}/>
    </div>
  )
}

export default App