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
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}


export default App;
