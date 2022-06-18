import './App.scss';
import {NameSection, CreditCard, AddCardButton, Transactions, BottomNavigation} from "./components";
import plus from './assets/plus.svg';

function App() {
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
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z"/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z"/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z"/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z"/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z"/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z"/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z"/>
            <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z"/>
          </div>

          <button className="circle-add-button">
            <img src={plus} alt="plus"/>
          </button>
        </div>

        <AddCardButton/>

        <Transactions/>
        {/* Bottom Bar */}
        <BottomNavigation/>
      </div>
    </div>
  );
}

export default App;
