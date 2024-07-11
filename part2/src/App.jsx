import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Person from './components/Person'
// this is assignment 2.10
const App = () => {
  const [personsarr, setPersons] = useState([
    <Person name = 'Mårten Jern' number = '040' id = {0}/>
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterKey, setFilterKey] = useState('')
  const addNumber = (event) => {
    event.preventDefault()
    const personObject = <Person name = {newName} number = {newNumber} id = {personsarr.length + 1}/>
    setPersons(personsarr.concat(personObject))
    setNewName('')
    setNewNumber('')
  }


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
  
        <PersonForm handleInputChange1 = {handleInputChange1} handleInputChange2 = {handleInputChange2} handleFilterChange = {handleFilterChange} persons = {personsarr} newNumber = {newNumber} newName = {newName} filterKey = {filterKey} addNumber = {addNumber}/>
  
        <h3>Numbers</h3>
        
        <Persons personsarr = {personsarr} filterKey = {filterKey}/>
      </div>
    )
}

export default App