    const PersonForm = (props) => {
    return(
        <div>
        <form onSubmit = {!(props.persons.map((person) => person.props.number)).includes(props.newName) ? props.addNumber : (event) => {event.preventDefault(); alert(props.newName.concat(' is already in the phonebook'));} }>
            <div>
                name: <input value = {props.newName} onChange = {props.handleInputChange1} />
            </div>
            <div>
                number: <input value ={props.newNumber} onChange = {props.handleInputChange2}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </div>
    )}

    export default PersonForm