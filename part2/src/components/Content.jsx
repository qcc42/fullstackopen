import Part from './Part'
const sum = (arr) => {
    let sumvar = 0;
    arr.forEach((e) => sumvar += e)
    return (sumvar)
    }
const Content = ({parts}) => {
    return (
        <div>
            <ul>
                {parts.map((part) => <li> {part} </li>)}
            </ul>
            <p>Total number of exercises: {sum(parts.map(part => part.props.exercises))}</p>  
        </div>
        
    )
  }
  
  export default Content