import buy from '../assets/Buy.svg';
import camera from '../assets/camera.svg';
import game from '../assets/game.svg';

const ExpenseItem = ({ index = 0 }) => {
  // mock data
  const data = [
    {
      icon: buy,
      title: 'Grocery',
      date: 'Nov 17',
      amount: '326.800',
      description: 'Minimarket Anugrah',
    },
    {
      icon: game,
      title: 'Entertainment',
      date: 'Nov 17',
      amount: '326.800',
      description: 'Minimarket Anugrah',
    },
    {
      icon: camera,
      title: 'Equipments',
      date: 'Nov 17',
      amount: '326.800',
      description: 'Minimarket Anugrah',
    }
  ]

  return (
    <div className="expense-item">
      <div className="icon">
        <img src={data[index % 3].icon} alt="buy"/>
      </div>

      <div className="info">
        <div className="top">
          <span className="title">{data[index % 3].title}</span>
          <span className="title">{data[index % 3].amount}</span>

        </div>

        <div className="bottom">
          <span>{data[index % 3].date}</span>
          <span>{data[index % 3].description}</span>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem;
