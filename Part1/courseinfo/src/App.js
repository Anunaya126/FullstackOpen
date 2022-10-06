// import logo from './logo.svg';
// import './App.css';



function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

function Content(props) {
  console.log(props)
  return (
    <>
  <Part name='Fundamentals of React' exercise='10'/>
  <Part name='Using props to pass data' exercise='7'/>
  <Part name='State of a component' exercise='14'/>
    </>
  )
}
function Part(props) {
  return (
    <p>
      {props.name} {props.exercise}
    </p>
  )
}

function Total(props) {
  return (
    <><p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p></>
  )

}

function App() {
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
      <Header course={course} />
      <Content/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}


export default App;
