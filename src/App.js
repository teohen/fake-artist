import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/create-player">Create Player</Link>
    </div>
  );
}

export default App;
