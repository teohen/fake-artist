import api from '../api/api'

const PlayerService = {
    async createPlayer(playerName) {
        try {
            const player = await api.post('/player', {
                playerName
            })

            return player
        } catch (err) {
            console.log('err', err)
        }
    }
}


export default PlayerService