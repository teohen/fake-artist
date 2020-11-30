import { useState } from "react";
import { useHistory } from "react-router-dom";
import GameService from "../services/game.service";

const CreateGame = () => {

    const [code, setCode] = useState("")

    const history = useHistory();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const game = await GameService.createGame(code)
        console.log('game', game)
        const path = "/game/" + game.code
        
        history.push(path)
    }
    return (
        <div id="page-create-game">
        <main>
          <form onSubmit={handleSubmit}>
              <div className="input-block">
                <label htmlFor="code">Code</label>
                <input id="code" value={code} onChange={e => setCode(e.target.value)}/>
              </div>
            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </form>
        </main>
      </div>
    )
}

export default CreateGame;