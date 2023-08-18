const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} number of exercises : {props.number}</p>
  )
}

const Content = (props) => {
  return (
    <Part name={props.name} number={props.number} />
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises : {props.total}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header header={course} />
      <Content name={part1.name} number={part1.exercises}/>
      <Content name={part2.name} number={part2.exercises}/>
      <Content name={part3.name} number={part3.exercises}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App