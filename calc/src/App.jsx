import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setnum1] = useState("")
  const [num2, setnum2] = useState("")
  const [result, setresult] = useState("")

  return (
    <>
      <section id="center">
        <div>
          <h1>calculator</h1>
          <p>enter the numbers</p>
          
          <label htmlFor="num1">num1 </label>
          <input
            id="num1"
            type="number"
            className="num1"
            value={num1}
            onChange={(e) => setnum1(e.target.value)}
          />

          <label htmlFor="num2">num2 </label>
          <input
            id="num2"
            type="number"
            className="num2"
            value={num2}
            onChange={(e) => setnum2(e.target.value)}
          />
        </div>
<div className="btn">
        <button
          type="button"
          className="add"
          onClick={() => setresult(Number(num1) + Number(num2))}
        >
          add
        </button>
        <button
          type="button"
          className="min"
          onClick={() => setresult(Number(num1) - Number(num2))}
        >
          minus
        </button>
        <button
          type="button"
          className="min"
          onClick={() => setresult(Number(num1) * Number(num2))}
        >
          multiplication

        </button>
        </div>
        <p className="result"> result is {result}</p>
      </section>

      

    
    </>
  )
}

export default App