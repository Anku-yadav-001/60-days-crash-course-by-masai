import logo from './logo.svg';
import './App.css';
import MouseEvent from './Components/MouseEvent';
import TitleChange from './Components/TitleChange';
import FetchData from './Components/FetchData';

function App() {
  return (
    <div>
      <MouseEvent/>
      <TitleChange title="new title"/>
      <FetchData/>
    </div>
  );
}

export default App;
