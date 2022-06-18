import { ExpenseItem } from './index';

const Transactions = () => {
  return (
    <div className="transactions">
      <div className="transactions__top">
        <div>
          <span className="title">
            Your Balance
          </span>

          <div>
            <span className="amount">
              8.400,12 ₺ {/* Use INTL.number format currency here */}
            </span>
          </div>
        </div>

        <div className="currency-selection">
          {/* dropdown */}
        </div>
      </div>

      <div className="transactions__bottom">
        <div className="title">
          Transactions
        </div>

        <div className="expenses">
          {/* Mock data for design */}
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
          <ExpenseItem />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
