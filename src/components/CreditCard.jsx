const CreditCard = ({ number, expirationDate }) => {
  return (
    <div className="credit-card">
      <div className="credit-card__logo">
        {/* todo visa and mastercard logo
          5-mastercard
          4-visa
        */}
      </div>

      <div className="credit-card__number">
      </div>

      <div className="credit-card__bottom">
        <div  className="credit-card__name">

        </div>
        <div className="credit-card__expiration-date">

        </div>
      </div>
    </div>
  )
};

export default CreditCard;
