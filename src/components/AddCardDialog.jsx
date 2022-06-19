import {useState, useEffect} from "react";
import {DialogContent, DialogTitle} from "@mui/material";
import clear from "../assets/clear.svg";
import back from "../assets/back.svg";
import Dialog from "@mui/material/Dialog";

const AddCardDialog = ({isOpen, onClose, onAddCard}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  const handleCardNumber = (value) => {
    if (value.length > 19) return;

    let val = value.split('-').join('');

    if (val.length > 1) {
      val = val.match(new RegExp('.{1,4}', 'g')).join("-");
    }

    setCardNumber(val);
  }

  const handleExprDate = (value) => {
    if (value.length > 5) return;

    let val = value.split('/').join('');

    if (val.length > 1) {
      val = val.match(new RegExp('.{1,2}', 'g')).join("/");
    }

    setCardExpiration(val);
  }

  const handleOnAddCard = () => {
    /* I couldn't figure how to convert MM/YY to timezone string */
    let expiration = cardExpiration.split('/');
    expiration = `20${expiration[1]}-${expiration[0]-0}-01T00:00:00.000Z`;

    onAddCard({
      name,
      cardNumber,
      cardExpiration: expiration,
      cardCvv
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <Dialog open={isOpen} fullScreen={isMobile} onClose={onClose}>
      {!isMobile && (
        <div className="dialog-close" onClick={onClose}>
          <img src={clear} alt="clear"/>
        </div>
      )}

      <DialogTitle sx={{paddingTop: isMobile ? 2 : 0}} className="dialog-title">
        {isMobile && <img src={back} alt="Back" className="back-icon" onClick={onClose}/>}
        <span className="text">
            Add Card
          </span>
      </DialogTitle>

      <DialogContent sx={{padding: 0}} className="dialog-content">
        <div className="top">
          <div>
            <label className="label">Cardholder Name</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Enter your name as written on card"
              className="input"
            />
          </div>

          <div>
            <label className="label">Card Number</label>
            <input
              value={cardNumber}
              onChange={e => handleCardNumber(e.target.value)}
              type="text"
              placeholder="Enter your card number"
              className="input"
            />
          </div>

          <div className="half-row">
            <div>
              <label className="label">cvv/cvc</label>
              <input
                maxLength={3}
                value={cardCvv}
                onChange={e => setCardCvv(e.target.value)}
                type="text"
                placeholder="123"
                className="input"
              />
            </div>

            <div>
              <label className="label">Exp. Date</label>
              <input
                value={cardExpiration}
                onChange={e => handleExprDate(e.target.value)}
                type="text"
                placeholder="123"
                className="input"
              />
            </div>
          </div>
        </div>

        <div className="bottom">
          <button onClick={() => handleOnAddCard()} className="pointer">
            Add Card
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddCardDialog;
