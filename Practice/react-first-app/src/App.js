import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FruitsList from './components/FruitsList';

function App() {
  return (
    <div className="App">
      <FruitsList/>
      <Counter/>
    </div>
  );
}

export default App;
