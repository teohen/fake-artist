import { useState } from "react";
import { useHistory } from "react-router-dom";

import PlayerService from '../services/player.service'

const CreatePlayer = () => {


    const [name, setName] = useState("")

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const player = await PlayerService.createPlayer(name)
        history.push('/menu/game')
    }
    return (
        <div id="page-create-player">
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="input-block">
                        <label htmlFor="name">Name</label>
                        <input id="name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <button className="confirm-button" type="submit">
                        Confirmar
            </button>
                </form>
            </main>
        </div>
    )
}

export default CreatePlayer;