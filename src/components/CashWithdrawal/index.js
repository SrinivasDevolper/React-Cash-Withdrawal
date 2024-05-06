import {Component} from 'react'

import Cashlist from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  userUseBalance = value => {
    const {balance} = this.state
    this.setState({balance: balance - value})
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <div className="heading-container">
            <p className="heading-para">s</p>
            <h1 className="main-heading">Sarah Williams</h1>
          </div>
          <div className="rupees-cont">
            <h1>Your Balance</h1>
            <div>
              <h1 className="cash">{balance}</h1>
              <p>In Rupees</p>
            </div>
          </div>
          <div className="Withdraw-cont">
            <h1 className="Withdraw-heading">Withdraw</h1>
            <p>Choose Sum (In Ruppes)</p>
            <ul className="ul-container">
              {denominationsList.map(eachList => (
                <Cashlist
                  denominationsList={eachList}
                  key={eachList.id}
                  userUseBalance={this.userUseBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
