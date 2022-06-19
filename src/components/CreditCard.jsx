import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import {formatDate} from "../utils/numberFormat";

const CreditCard = (
  {
    name = '',
    cardNumber = '',
    expirationDate,
    index = 1,
    selectCard
  }) => {
  const logo = cardNumber.startsWith('4') ? visa : mastercard;
  const classes = `credit-card gradient-${(index % 4).toString()}`;
  const dateOptions = {month: '2-digit', year: '2-digit'};

  return (
    <div className={classes} onClick={selectCard}>
      <div className="credit-card__body">
        {logo && <img src={logo} alt="logo" className="credit-card__logo"/>}

        <div className="credit-card__number">
          {cardNumber}
        </div>

        <div className="credit-card__bottom">
          <div className="credit-card__name">
            <span className="credit-card__name-title">
              Name
            </span>

            <span className="credit-card__name-text">
              {name}
            </span>
          </div>

          <div className="credit-card__expiration-date">
            <span className="credit-card__expiration-date-title">
              Valid Till
            </span>

            <span className="credit-card__expiration-date-text">
              {formatDate(expirationDate, dateOptions)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreditCard;
