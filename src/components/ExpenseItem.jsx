import buy from '../assets/Buy.svg';
import camera from '../assets/camera.svg';
import game from '../assets/game.svg';
import work from '../assets/work.svg';
import {formatDate, calculateAmount} from "../utils/numberFormat";

const ExpenseItem = ({item = {}, currency, currencyExchangeRates}) => {
  const icons = [
    {
      category: 'grocery',
      icon: buy
    },
    {
      category: 'entertainment',
      icon: game
    },
    {
      category: 'equipment',
      icon: camera
    },
    {
      category: 'work',
      icon: work
    }
  ];

  const icon = icons.find(i => i.category === item.category).icon;
  const dateOptions = {month: 'short', day: 'numeric'};
  const totalAmount = calculateAmount({
    amount: item.amount,
    currency,
    currencyExchangeRates,
  });

  return (
    <div className="expense-item">
      <div className={'icon ' + item.category}>
        <img src={icon} alt="buy"/>
      </div>

      <div className="info">
        <div className="top">
          <span className="title">{item.category}</span>
          <span className="title">{totalAmount}</span>
        </div>

        <div className="bottom">
          <span>{formatDate(item.date, dateOptions)}</span>
          <span>{item.company}</span>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem;
