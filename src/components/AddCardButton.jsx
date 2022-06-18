import plus from "../assets/plus.svg";

const AddCardButton = ({ onAddCard }) => {
   return (
    <>
      <button className="add-card-button" onClick={onAddCard}>
        <img src={plus} alt="Plus" className="add-card-button__plus" />
        Add Card
      </button>
    </>
  )
};

export default AddCardButton;
