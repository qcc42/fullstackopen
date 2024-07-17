    const PersonForm = ({persons, newName, newNumber, addNumber, handleInputChange1, handleInputChange2}) => {
    return(
        <div>
        <form onSubmit = {!(persons.map((person) => person.number)).includes(newName) ? addNumber : (event) => {event.preventDefault(); alert(newName.concat(' is already in the phonebook'));} }>
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