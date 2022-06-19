import {useState} from 'react';
import {ExpenseItem} from './index';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const Transactions = ({selectedCard}) => {
  const [currency, setCurrency] = useState('USD');

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
          <FormControl sx={{m: 0, width: 110}} size="small">
            <Select
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <MenuItem value="TRY">TL</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="CHF">CHF</MenuItem>
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
              <ExpenseItem index={index} key={index} item={item}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Transactions;
