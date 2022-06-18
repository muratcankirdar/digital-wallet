import plus from "../assets/plus.svg";

const AddCardButton = () => {
  return (
    <button className="add-card-button">
      <img src={plus} alt="Plus" className="add-card-button__plus" />
      Add Card
    </button>
  )
};

export default AddCardButton;
