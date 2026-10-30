import { useState, useEffect } from 'react'
import './App.css'

function App() {
// example of conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [count, setCount] = useState(0)

 useEffect(() => {
    console.log('Hi')
}, [isLoggedIn])

// useEffect is used at the start of the program and when the isLoggedIn state changes.

  console.log("Hello", isLoggedIn)
  return (
    <>
    {/* if logged in, render true otherwise render false */}
    {/* () => ...: A short inline function (arrow function) that ensures the code inside runs only when the button is clicked, rather than running immediately when the page loads.

setIsLoggedIn(...): A React state-updating function responsible for changing the current login status.

!isLoggedIn: The exclamation point means "NOT". This flips the current value of the isLoggedIn variable—turning true into false, or false into true. */}
    {isLoggedIn ? <h1>Welcome back</h1> : <h1>Please log in</h1>}
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    <button onClick={() => setCount(count + 1)}>{count}</button>

    <TodoList/>
    <FormExample/>
    </>
    // the example above is for conditional rendering
  )
}

function TodoList(){
  const todos = ['Learn React', 'Build Applications', 'Eat Breakfast'];

  return(
    <ul>
      {todos.map((item, index) => (
            <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

function FormExample(){
  // where I will save the name
  const [name, setName] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    alert("Welcome ${name}")
    // required in any form, prevents the frontend from reverting to the default functionalities
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}/>
      {/* onChange changes the value to whatever the user writes i.e tracking all the changes*/}
      <button type='submit'>Submit</button>
    </form>
  )
}

export default App
