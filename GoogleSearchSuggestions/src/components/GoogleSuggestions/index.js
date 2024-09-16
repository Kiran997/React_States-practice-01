// Write your code here

import {useState} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const GoogleSuggestions = ({suggestionsList}) => {
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const updateSearchInput = suggestion => {
    setSearchInput(suggestion)
  }

  // Filtering the suggestions based on search input (case-insensitive)
  const filteredSuggestions = suggestionsList.filter(suggestion =>
    suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
        alt="google logo"
        className="google-logo"
      />
      <div className="search-container">
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
          <input
            type="search"
            className="search-input"
            value={searchInput}
            onChange={onChangeSearchInput}
            placeholder="Search Google"
          />
        </div>
        <ul className="suggestions-list">
          {filteredSuggestions.map(eachSuggestion => (
            <SuggestionItem
              key={eachSuggestion.id}
              suggestionDetails={eachSuggestion}
              updateSearchInput={updateSearchInput}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GoogleSuggestions
