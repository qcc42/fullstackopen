import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { number: 'Arto Hellas',
      id: 0,
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1,
    }
    setPersons(persons.concat(numberObject))
    setNewName('')
    setNewNumber('')
  }


  const handleInputChange1 = (event) => {
    setNewName(event.target.value)
  }
  const handleInputChange2 = (event) => {
    setNewNumber(event.target.value)
  }
  


  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
      <ul>
          {persons.map((person) => <li key = {person.id}> {person.name} {person.number} </li>)}
      </ul>
    </div>
  )
}

export default App