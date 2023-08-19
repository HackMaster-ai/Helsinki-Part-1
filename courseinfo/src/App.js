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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data',
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header header={course} />
      <Content name={parts[0].name} number={parts[0].exercises} />
      <Content name={parts[1].name} number={parts[1].exercises} />
      <Content name={parts[2].name} number={parts[2].exercises} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App