const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const Header = (props) => {
    return (
      <div>
        <p>{props}</p> 
      </div>
    )
  }

  return (
    <div>
      <Header props={course}/>
    </div>
  )
}

export default App

