// Write your code here

import React from 'react'
import './index.css'

const DenominationItem = ({denomination, withdrawAmount}) => {
  const {value} = denomination

  const onClickDenomination = () => {
    withdrawAmount(value)
  }

  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        type="button"
        onClick={onClickDenomination}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
