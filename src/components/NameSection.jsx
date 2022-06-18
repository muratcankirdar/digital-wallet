const NameSection = ({ name, gender }) => {
  const displayedName = gender === 'male' ? 'Mr.' : 'Mrs.';

  return (
    <div className="name-section">
      <p className="greeting-title">
        Good Morning
      </p>

      <p className="greeting-name">
        {displayedName} {name}
      </p>
    </div>
  );
};

export default NameSection;
