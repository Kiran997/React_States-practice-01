// Write your code here.
import {useState} from 'react'
import './index.css'

const LettersCalculator = () => {
  const [text, setText] = useState('')
  const [letterCount, setLetterCount] = useState(0)

  const handleInputChange = event => {
    const inputText = event.target.value
    setText(inputText)
    const count = inputText.replace(/[^a-zA-Z]/g, '').length
    setLetterCount(count)
  }

  return (
    <div className="calculator-container">
      <div className="input-container">
        <h1 className="h1">Calculate the Letters you enter</h1>
        <label htmlFor="textInput" className="input-label">
          Enter the phrase
        </label>
        <input
          type="text"
          className="text-input"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter the phrase"
        />
        <p className="count-display">No.of letters: {letterCount}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
        alt="letters calculator"
        className="calculator-image"
      />
    </div>
  )
}

export default LettersCalculator
