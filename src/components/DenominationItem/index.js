import './index.css'

const Cashlist = props => {
  const {denominationsList, userUseBalance} = props
  const {value} = denominationsList
  const userClickBalance = () => userUseBalance(value)
  return (
    <li className="option-cont" onClick={userClickBalance}>
      <p className="option-value">{value}</p>
    </li>
  )
}

export default Cashlist
