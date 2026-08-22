import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [userFilter, setUserFilter] = useState('')
  const personsToShow = userFilter ? (persons.filter( person =>
    person.name.toLowerCase().includes(userFilter.toLowerCase()) )
  ) : persons

  const handleSubmit = e => {
    e.preventDefault()
    if (persons.find( p => p.name === newName) ){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input value={userFilter} onChange={e => setUserFilter(e.target.value)} />

      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>name: <input value={newName} onChange={e => setNewName(e.target.value)}/></div>
        <div>number: <input value={newNumber} onChange={e=> setNewNumber(e.target.value)} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {
        personsToShow.map(p=> <p key={p.name}>{p.name} {p.number}</p> )
      }
    </div>
  )
}

export default App