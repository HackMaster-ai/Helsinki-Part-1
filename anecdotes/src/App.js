import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Button = (props) => {
  const {name, func} = props
  return (
    <button onClick={func}>{name}</button>
  )
}


function App() {

  const [selected, setSelected] = useState(() => {
    return 0
  })

  const [vote, setVote] = useState(() => {
    return 0
  })

  const anecdotes = [
    {
      value: 'If it hurts, do it more often.',
      votes: vote,
    },
    {
      value: 'Adding manpower to a late software project makes it later!',
      votes: vote
    },
    {
      value: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: vote
    },
    {
      value: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: vote
    },
    {
      value: 'Premature optimization is the root of all evil.',
      votes: vote
    },
    {
      value: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: vote
    },
    {
      value: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
      votes: vote
    }
  ]

  function number() {
    setSelected(prevValue => Math.floor(Math.random() * anecdotes.length))
  }

  function increaseVote() {
    setVote(prevValue => prevValue + 1)
    anecdotes[selected]['votes'] = vote
  }

  return (
    <>
    <p>{anecdotes[selected].value}</p>
    <p>this anecdote has : {anecdotes[selected].votes}</p>
    <Button func={number} name={'new anecdote'} />
    <Button func={increaseVote} name={'Vote'} />
    </>
  );
}

export default App;
