const express = require('express')

const app = express()
const PORT = 4222

const gameCtrl = require('./Controllers/gameController')


app.use(express.json())


app.get('/api/games', gameCtrl.getGames)
app.post('/api/games', gameCtrl.addGame)
app.delete('/api/games/:id', gameCtrl.deleteGame)
app.put('/api/games/:id', gameCtrl.updateHours)



app.listen(PORT, ()=>{console.log(`Server is vibing on port: ${PORT}`)})