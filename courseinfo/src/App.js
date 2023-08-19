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
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header header={course.name} />
      <Content name={course.parts[0].name} number={course.parts[0].exercises} />
      <Content name={course.parts[1].name} number={course.parts[1].exercises} />
      <Content name={course.parts[2].name} number={course.parts[2].exercises} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App