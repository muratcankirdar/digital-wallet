import home from '../assets/Home.svg';
import category from '../assets/Category.svg';
import graph from '../assets/Graph.svg';
import setting from '../assets/Setting.svg';

const BottomNavigation = () => {
  return (
    <div className="bottom-navigation">
      <img src={home} alt="home" />
      <img src={category} alt="category" />
      <img src={graph} alt="graph" />
      <img src={setting} alt="settings" />
    </div>
  );
}

export default BottomNavigation;
