import './App.scss';
import { NameSection, CreditCard, AddCardButton, Transactions } from "./components";

function App() {
  return (
    <div className="App">
      <div className="name-container">
        <NameSection name="Zayn Malik" gender="male" />
      </div>

      <div className="credit-card-container">
        <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z" />
        <CreditCard number="4142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z" />
        <CreditCard number="5142 8164 6526 2563" expirationDate="2022-10-08T08:59:13.055Z" />
      </div>

      <div>
        <AddCardButton />
      </div>

      <Transactions />
    </div>
  );
}

export default App;
