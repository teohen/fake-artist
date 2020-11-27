import { Link } from 'react-router-dom';

function GameMenu() {
    return (
        <div>
            <Link to="/create-game">Create Game</Link>
            <Link to="/join-game">Join Games</Link>
        </div>
    );
}

export default GameMenu
