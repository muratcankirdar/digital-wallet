import {useState} from 'react';
import {ExpenseItem} from './index';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {calculateAmount} from '../utils/numberFormat';

const Transactions = ({selectedCard, currencyExchangeRates}) => {
  const [currency, setCurrency] = useState('Usd');

  const totalAmount =
    calculateAmount({
      amount: selectedCard.amount,
      currency,
      currencyExchangeRates
    });

  return (
    <div className="transactions">
      <div className="transactions__top">
        <div>
          <span className="title">
            Your Balance
          </span>

          <div>
            <span className="amount">
              {totalAmount} {/* Use INTL.number format currency here */}
            </span>
          </div>
        </div>

        <div className="currency-selection">
          <FormControl sx={{m: 0, width: 110}} size="small">
            <Select
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <MenuItem value="Try">TL</MenuItem>
              <MenuItem value="Usd">USD</MenuItem>
              <MenuItem value="Eur">EUR</MenuItem>
              <MenuItem value="Chf">CHF</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="transactions__bottom">
        <div className="title">
          Transactions
        </div>

        <div className="expenses">
          {selectedCard.transactions &&
            selectedCard.transactions.map((item, index) => (
              <ExpenseItem
                item={item}
                key={index}
                currency={currency}
                currencyExchangeRates={currencyExchangeRates}
                index={index}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Transactions;
