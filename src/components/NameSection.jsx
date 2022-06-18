const NameSection = ({ name, gender }) => {
  const genderText = gender === 'male' ? 'Mr.' : 'Mrs.';

  return (
    <div className="name-section">
      <p className="greeting-title">
        Good Morning
      </p>

      <p className="greeting-name">
        {genderText} {name}
      </p>
    </div>
  );
};

export default NameSection;
