import buy from '../assets/Buy.svg';
import camera from '../assets/camera.svg';
import game from '../assets/game.svg';
import work from '../assets/work.svg';

const formatDate = (date) => {
  const options = { month: 'short', day: 'numeric' };

  return new Date(date).toLocaleDateString('default', options);
};

const ExpenseItem = ({item = {}, index = 0}) => {
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

  return (
    <div className="expense-item">
      <div className={'icon ' + item.category}>
        <img src={icon} alt="buy"/>
      </div>

      <div className="info">
        <div className="top">
          <span className="title">{item.category}</span>
          <span className="title">{item.amount}</span>
        </div>

        <div className="bottom">
          <span>{formatDate(item.date)}</span>
          <span>{item.company}</span>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem;
