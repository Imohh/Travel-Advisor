import {useState, useRef} from 'react'

const UseRef = () => {
  const inputRef = useRef(null)
  const [result, setResult] = useState(0)

  const add = (e) => {
    e.preventDefault()
    setResult((result) => result + Number(inputRef.current.value))
  }

  const minus = (e) => {
    e.preventDefault()
    setResult((result) => result - Number(inputRef.current.value))
  }

  const times = (e) => {
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value))
  }

  const divide = (e) => {
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
  }

  const resetInput = (e) => {
    e.preventDefault()
    inputRef.current.value = 0
  }

  const resetResult = (e) => {
    e.preventDefault()
    setResult((prevValue) => prevValue * 0)
  }

  return (
    <>
      <p>{result}</p>
      <input
        ref={inputRef}
        type="number"
        placeholder="Enter number ..."
      />

      <button onClick={add}>Add</button>
      <button onClick={minus}>minus</button>
      <button onClick={times}>times</button>
      <button onClick={divide}>divide</button>
      <button onClick={resetInput}>reset input</button>
      <button onClick={resetResult}>reset result</button>
    </>
  )
}

export default UseRef