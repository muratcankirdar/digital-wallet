import buy from '../assets/Buy.svg';

const ExpenseItem = ({title = 'Grocery', date = 'Nov 17', amount = 326.800, description = 'Minimarket Anugrah'}) => {
  return (
    <div className="expense-item">
      <div className="icon">
        <img src={buy} alt="buy" />
      </div>

      <div className="info">
        <div className="top">
          <span className="title">{title}</span>
          <span className="title">{amount}</span>

        </div>

        <div className="bottom">
          <span>{date}</span>
          <span>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem;
