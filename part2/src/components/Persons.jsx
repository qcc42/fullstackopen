

const Persons = ({personsarr, filterKey, removeNumber}) => {
    const filteredpersons = personsarr.filter(person => person.props.name.includes(filterKey))
    const mappedtohtml = filteredpersons.map(person => <tr><td>{person}</td><button onClick = {(event) => removeNumber(person.props.id, event)}>Delete</button></tr>)
    return(
    <table>
        {mappedtohtml}
    </table>
    )
}

export default Persons