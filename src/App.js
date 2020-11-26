import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/create-game">Create game</Link>
    </div>
  );
}

export default App;
