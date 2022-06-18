import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';

const CreditCard = ({name, number, expirationDate}) => {
  const logo = number.startsWith('4') ? visa : mastercard;

  return (
    <div className="credit-card">
      <div className="credit-card__body">
        {logo && <img src={logo} alt="logo" className="credit-card__logo" />}

        <div className="credit-card__number">
          {number}
        </div>

        <div className="credit-card__bottom">
          <div className="credit-card__name">
            <span className="credit-card__name-title">
              NAME
            </span>

            <span className="credit-card__name-text">
              ZAYN MALIK
            </span>
          </div>

          <div className="credit-card__expiration-date">
            <span className="credit-card__expiration-date-title">
              VALID TILL
            </span>

            <span className="credit-card__expiration-date-text">
              05/34
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreditCard;
