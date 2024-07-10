import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { number: 'Arto Hellas',
      id: 0,
     }
  ]) 
  const [newName, setNewName] = useState('')
  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      number: newName,
      id: persons.length +1,
    }
    setPersons(persons.concat(numberObject))
    setNewName('')
  }


  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }
  


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addNumber}>
        <div>
          name: <input value = {newName} onChange = {handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          {persons.map((person) => <li key = {person.id}> {person.number} </li>)}
      </ul>
    </div>
  )
}

export default App