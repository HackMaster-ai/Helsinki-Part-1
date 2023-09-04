import { useState } from 'react';

const Button = (props) => {
  const {name, func} = props
  return (
    <button onClick={func}>{name}</button>
  )
}

const Display = (props) => {
  const {text} = props
  return (
    <p>{text}</p>
  )
}


function App() {

  const [selected, setSelected] = useState(() => {
    return 0
  })

  const anecdotes = [
    {
      value: 'If it hurts, do it more often.',
      id: 0,
    },
    {
      value: 'Adding manpower to a late software project makes it later!',
      id: 1
    },
    {
      value: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      id: 2
    },
    {
      value: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      id: 3
    },
    {
      value: 'Premature optimization is the root of all evil.',
      id: 4
    },
    {
      value: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      id: 5
    },
    {
      value: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      id: 6
    }
  ]

  const [vote, setVote] = useState(() => {
    let n = anecdotes.length
    return Array(n).fill(0)
  })


  function number() {
    setSelected(prevValue => Math.floor(Math.random() * anecdotes.length))
  }

  function incrementvotes() {
    const copy = [...vote]
    copy[selected] += 1
    setVote(prevValue => copy)
  }

  return (
    <>
    <p>{anecdotes[selected].value}</p>
    <p>this anecdote has : {vote[selected]}</p>
    <Button func={number} name={'new anecdote'} />
    <Button func={incrementvotes} name={'vote'} />
    <h1>the best anecdote is :</h1>
    <p>{anecdotes[vote.indexOf(Math.max(vote))].value}</p>
    </>
  );
}

export default App;
