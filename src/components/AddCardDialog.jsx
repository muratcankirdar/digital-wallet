import {useState, useEffect} from "react";
import {DialogContent, DialogTitle} from "@mui/material";
import clear from "../assets/clear.svg";
import back from "../assets/back.svg";
import Dialog from "@mui/material/Dialog";

const AddCardDialog = ({ isOpen, onClose }) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
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
            <input type="text" placeholder="Enter your name as written on card" className="input"/>
          </div>

          <div>
            <label className="label">Card Number</label>
            <input type="text" placeholder="Enter your card number" className="input"/>
          </div>

          <div className="half-row">
            <div>
              <label className="label">cvv/cvc</label>
              <input type="text" placeholder="123" className="input"/>
            </div>

            <div>
              <label className="label">Exp. Date</label>
              <input type="text" placeholder="123" className="input"/>
            </div>
          </div>
        </div>

        <div className="bottom">
          <button>
            Add Card
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddCardDialog;
