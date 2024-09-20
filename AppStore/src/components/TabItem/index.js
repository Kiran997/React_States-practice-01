// Write your code here

import React from 'react'
import './index.css'

const TabItem = ({tabDetails, isActive, onClickTab}) => {
  const {tabId, displayText} = tabDetails

  const handleClick = () => {
    onClickTab(tabId)
  }

  return (
    <li
      className={`tab-item ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      {displayText}
    </li>
  )
}

export default TabItem
