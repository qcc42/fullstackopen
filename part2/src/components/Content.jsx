const Content = ({parts}) => {
    return (
        <div>
            <ul>
                {parts.map((part) => <li> {part} </li>)}
            </ul>
            <p>Total number of exercises: {parts.map(part => part.props.exercises).reduce((prev, curr, i) => prev+curr, 0)}</p>  
        </div>
        
    )
  }
  
  export default Content