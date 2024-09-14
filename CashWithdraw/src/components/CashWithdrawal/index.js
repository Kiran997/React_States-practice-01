// Write your code here

import React, {useState} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const CashWithdrawal = ({denominationsList}) => {
  const [balance, setBalance] = useState(2000)

  // Function to handle withdrawal
  const withdrawAmount = value => {
    if (balance >= value) {
      setBalance(balance - value)
    }
  }

  return (
    <div className="app-container">
      <div className="cash-withdrawal-card">
        <div className="profile-container">
          <div className="profile-logo">S</div>
          <p className="profile-name">Sarah Williams</p>
        </div>
        <div className="balance-container">
          <p className="balance-label">Your Balance</p>
          <div className="balance-amount-container">
            <p className="balance-amount">{balance}</p>
            <p className="currency-label">In Rupees</p>
          </div>
        </div>
        <p className="withdraw-label">Withdraw</p>
        <p className="choose-amount-label">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denominations-list">
          {denominationsList.map(denomination => (
            <DenominationItem
              key={denomination.id}
              denomination={denomination}
              withdrawAmount={withdrawAmount}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CashWithdrawal
