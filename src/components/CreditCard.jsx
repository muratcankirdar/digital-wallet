import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import {formatDate} from "../utils/numberFormat";

const CreditCard = (
  {
    card,
    userFullName = '',
    index = 1,
    selectCard
  }) => {
  const logo = card.cardNumber.startsWith('4') ? visa : mastercard;
  const classes = `credit-card gradient-${(index % 4).toString()}`;
  const dateOptions = {month: '2-digit', year: '2-digit'};
  const shownName = card.name ? card.name : userFullName;
  const shownCardNumber = card.cardNumber.replace(/-/g, ' ');

  return (
    <div className={classes} onClick={selectCard}>
      <div className="credit-card__body">
        {logo && <img src={logo} alt="logo" className="credit-card__logo"/>}

        <div className="credit-card__number">
          {shownCardNumber}
        </div>

        <div className="credit-card__bottom">
          <div className="credit-card__name">
            <span className="credit-card__name-title">
              Name
            </span>

            <span className="credit-card__name-text">
              {shownName}
            </span>
          </div>

          <div className="credit-card__expiration-date">
            <span className="credit-card__expiration-date-title">
              Valid Till
            </span>

            <span className="credit-card__expiration-date-text">
              {formatDate(card.cardExpiration, dateOptions)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreditCard;
