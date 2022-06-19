const GreetingMessage = () => {
  const date = new Date();
  const currentHour = date.getHours();
  let message = 'Good Morning';

  if (currentHour >= 12 && currentHour <= 18) {
    message = 'Good Afternoon';
  } else if (currentHour >= 18 && currentHour < 6) {
    message = 'Good Evening';
  }

  return <span className="title">{message}</span>;
};

const NameSection = (
  {
    name = '',
    surname = '',
    gender = '',
  }) => {
  const genderText = gender === 'male' ? 'Mr.' : gender === 'female' ? 'Mrs.' : '';

  return (
    <div className="name-section">
      <GreetingMessage/>
      <br/>
      <span className="name">
        {genderText} {name} {surname}
      </span>
    </div>
  );
};

export default NameSection;
