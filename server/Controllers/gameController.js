let games = [
    {
        id: 0,
        title: 'Example',
        hours: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TW9qdczZ4HalPD4lDMxIH8zjdQbiO2LPljfwAbVTw113a3YCl7E7bHrbCrtQvKdZ03I&usqp=CAU'

    }
]
let id = 1

module.exports = {
    getGames: (req,res) => {
        res.status(200).send(games)
   },
   addGame: (req,res) => {
    const {title,hours, image} = req.body
    const game = {
        id: id,
        title,
        hours,
        image
    }
    id++
    games.push(game)
    res.status(200).send(games)
   },
   deleteGame: (req,res) => {
       const {id} = req.params
       const index = games.findIndex((e) => {
           return e.id === +id
       })
       if(index === -1){
           return res.status(500).send("Game not found")
       }
       games.splice(index, 1)
       res.status(200).send(games)
   },
  updateHours: (req,res) => {
       const {id} = req.params
       const {hours} = req.body
       const index = games.findIndex((e)=> {
           return e.id === +id
     })
     games[index] = {
         ...games[index],
         hours: hours
     }
     res.status(200).send(games)
   }
}