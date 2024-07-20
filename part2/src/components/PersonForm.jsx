    const PersonForm = ({persons, newName, newNumber, addNumber, handleInputChange1, handleInputChange2, removeNumber}) => {
    return(
        <div>
        <form onSubmit = {(persons.length === 0 || !(persons.map((person) => person.props.name).includes(newName))) ? addNumber : (event) => {event.preventDefault(); alert(newName.concat(' is already in the phonebook'));} }>
            <div>
                name: <input value = {newName} onChange = {handleInputChange1} />
            </div>
            <div>
                number: <input value ={newNumber} onChange = {handleInputChange2}/>
            </div>

            <div>
                <button type="submit">add</button>
            </div>
        </form>
        </div>
    )}

    export default PersonForm