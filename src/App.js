import {useState, useEffect} from 'react';
import axios from "axios";
import './App.scss';
import {NameSection, CreditCard, AddCardButton, Transactions, BottomNavigation, AddCardDialog} from "./components";
import plus from './assets/plus.svg';

function App() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [user, setUser] = useState({});
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const getUserData = async () => {
    const response = await axios.get('https://628fe4ba0e69410599e4b038.mockapi.io/users/79467853');
    setUser(response.data);
  }

  const userFullName = `${user.firstName} ${user.lastName}`;

  const selectedCard = () => {
    return user.cards ? user.cards[selectedCardIndex] : {};
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <div className="name-container">
        <NameSection
          name={user.firstName}
          surname={user.lastName}
          gender={user.gender}
        />
      </div>

      <div className="wrapper">
        <div className="credit-card-container">
          {/* Todo make component with cards prop */}
          <span className="title">
            Credit Cards
          </span>

          <div className="cards">
            {user.cards && user.cards.map((card, index) => (
              <CreditCard
                name={userFullName}
                cardNumber={card.cardNumber}
                expirationDate={card.cardExpiration}
                index={index}
                key={index}
                selectCard={() => setSelectedCardIndex(index)}
              />
            ))}
          </div>

          <button className="circle-add-button" onClick={() => setIsDialogVisible(true)}>
            <img src={plus} alt="plus"/>
          </button>
        </div>

        <AddCardButton onAddCard={() => setIsDialogVisible(true)}/>

        <Transactions selectedCard={selectedCard()}/>
        {/* Bottom Bar */}
        <BottomNavigation/>
      </div>

      <AddCardDialog isOpen={isDialogVisible} onClose={() => setIsDialogVisible(false)}/>
    </div>
  );
}

export default App;
