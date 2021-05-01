let games = [
    {
        id: 0,
        title: 'Valorant',
        hours: 1800,
        image: 'https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg'

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