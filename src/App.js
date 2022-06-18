import './App.scss';
import NameSection from "./components/NameSection";

function App() {
  return (
    <div className="App">
      <div className="name-container">
        <NameSection name="Zayn Malik" gender="male" />
      </div>
    </div>
  );
}

export default App;
