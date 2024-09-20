// Write your code here

import React from 'react'
import './index.css'

const AppItem = ({appDetails}) => {
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
