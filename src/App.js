import './App.scss';
import { useState } from 'react';
import {NameSection, CreditCard, AddCardButton, Transactions, BottomNavigation, AddCardDialog} from "./components";
import plus from './assets/plus.svg';

function App() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <div className="App">
      <div className="name-container">
        <NameSection name="Zayn Malik" gender="male"/>
      </div>

      <div className="wrapper">
        <div className="credit-card-container">
          <span className="title">
            Credit Cards
          </span>

          <div className="cards">
            {/* Mock data for design */}
            {/* In stage 2, cards are clickable and blur effect will change */}
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z" index={0}/>
            <CreditCard number="4142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z" index={1}/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z" index={2}/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z" index={3}/>
          </div>

          <button className="circle-add-button"  onClick={() => setIsDialogVisible(true)}>
            <img src={plus} alt="plus"/>
          </button>
        </div>

        <AddCardButton onAddCard={() => setIsDialogVisible(true)}/>

        <Transactions/>
        {/* Bottom Bar */}
        <BottomNavigation/>
      </div>

      <AddCardDialog isOpen={isDialogVisible} onClose={() => setIsDialogVisible(false)} />
    </div>
  );
}

export default App;
