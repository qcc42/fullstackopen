import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Person from './components/Person'

const App = () => {
  const [personsarr, setPersons] = useState([
   ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterKey, setFilterKey] = useState('')
  
  const addNumber = (event) => {
    event.preventDefault()
    personService
    .create({name: newName, number: newNumber})
    .then(person => {
      setPersons(personsarr.concat(<Person name = {person.name} number = {person.number} id = {person.id}/>))
 
  })
  setNewName('')
  setNewNumber('') 
  }

  const removeNumber = (id, event) => {
    personService.remove(id).then((note) => setPersons(note.map(person =><Person name = {person.name} number = {person.number} id = {person.id}/>)))
    
    
}
  
  useEffect(() =>
    {
      personService.getAll()
      .then(initialNotes => {
        setPersons(initialNotes.map(person => <Person name = {person.name} number = {person.number} id = {person.id}/>))
        }     
      )
  
    }, [])

  const handleInputChange1 = (event) => {
    setNewName(event.target.value)
  }
  const handleInputChange2 = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setFilterKey(event.target.value)
  }
 
    return (
      <div>
        <h2>Phonebook</h2>
  
        <Filter onChange = {handleFilterChange}/>

        <h3>Add a new</h3>
  
        <PersonForm handleInputChange1 = {handleInputChange1} handleInputChange2 = {handleInputChange2} handleFilterChange = {handleFilterChange} persons = {personsarr} newNumber = {newNumber} newName = {newName} filterKey = {filterKey} addNumber = {addNumber} />
  
        <h3>Numbers</h3>
        <Persons personsarr = {personsarr} filterKey = {filterKey} removeNumber = {removeNumber}/>
      </div>
    )
}

export default App