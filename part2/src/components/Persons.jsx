

const Persons = ({personsarr, filterKey}) => {

    return(
    <ul>
        {personsarr.filter((person) => person.props.name.includes(filterKey))}
    </ul>
    )
}

export default Persons