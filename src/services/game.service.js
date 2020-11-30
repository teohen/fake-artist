import api from '../api/api'

const GameService = {
    async createGame(gameCode) {
        try {
            const { data } = await api.post('/game', {
                code: gameCode
            })

            return data
        } catch (err) {
            console.log('err', err)
        }
    }
}


export default GameService