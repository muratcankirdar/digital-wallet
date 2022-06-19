import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';

const CreditCard = ({name, number, expirationDate, index = 0, selectedCardIndex = 0}) => {
  const logo = number.startsWith('4') ? visa : mastercard;
  const classes = () => {
    let list = ['credit-card', `gradient-${(index % 4).toString()}`];

    if (selectedCardIndex !== index) {
      list.push('card-blur')
    }

    return list.join(' ');
  }

  return (
    <div className={classes()}>
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
              Zayn Malik
            </span>
          </div>

          <div className="credit-card__expiration-date">
            <span className="credit-card__expiration-date-title">
              Valid Till
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
