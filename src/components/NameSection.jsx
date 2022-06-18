const NameSection = ({ name, gender }) => {
  const genderText = gender === 'male' ? 'Mr.' : 'Mrs.';

  return (
    <div className="name-section">
      <span className="title">
        Good Morning
      </span>

      <br/>

      <span className="name">
        {genderText} {name}
      </span>
    </div>
  );
};

export default NameSection;
