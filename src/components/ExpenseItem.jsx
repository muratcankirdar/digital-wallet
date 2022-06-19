import buy from '../assets/Buy.svg';
import camera from '../assets/camera.svg';
import game from '../assets/game.svg';
import work from '../assets/work.svg';

const ExpenseItem = ({ index = 0 }) => {
  // mock data
  const data = [
    {
      icon: buy,
      title: 'grocery',
      date: 'Nov 17',
      amount: '326.800',
      description: 'Minimarket Anugrah',
    },
    {
      icon: game,
      title: 'entertainment',
      date: 'Nov 17',
      amount: '326.800',
      description: 'Minimarket Anugrah',
    },
    {
      icon: camera,
      title: 'equipments',
      date: 'Nov 17',
      amount: '326.800',
      description: 'Minimarket Anugrah',
    },
    {
      icon: work,
      title: 'work',
      date: 'Nov 17',
      amount: '326.800',
      description: 'Minimarket Anugrah',
    }
  ]

  const icon = data[index % 4].icon;
  const title = data[index % 4].title;
  const date = data[index % 4].date;
  const amount = data[index % 4].amount;
  const description = data[index % 4].description;

  return (
    <div className="expense-item">
      <div className={`icon ${title.toLowerCase()}`}>
        <img src={icon} alt="buy"/>
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
