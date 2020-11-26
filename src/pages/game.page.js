import { useParams } from "react-router-dom";
import Board from "../board";

const Game = () => {
    const { code } = useParams()

    return (
        <div>
        <Board code={code} />
        </div>
    )
}
export default Game;