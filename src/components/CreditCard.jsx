import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';

const formatDate = (date) => {
  const options = {month: '2-digit', year: '2-digit'};

  return new Date(date).toLocaleDateString('default', options);
}

const CreditCard = (
  {
    name = '',
    cardNumber = '',
    expirationDate,
    index = 1,
  }) => {
  const logo = cardNumber.startsWith('4') ? visa : mastercard;
  const classes = `credit-card gradient-${(index % 4).toString()}`;

  return (
    <div className={classes}>
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
              {formatDate(expirationDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreditCard;
