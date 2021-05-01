import  {Component} from 'react'
import axios from 'axios'
import AddGame from './AddGame'
import Game from './Game'

class GameList extends Component{
    constructor(){
        super()
         this.state = {
             gamesArray: []
         }
    }

    componentDidMount = (req,res) => {
        axios.get('/api/games')
        .then((res)=>{
            this.setState({gamesArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
     };
     deleteGame = (id) => {
         axios.delete(`/api/games/${id}`)
         .then((res)=> {
             this.setState({gamesArray: res.data})
         })
         .catch((err)=> {
             console.log(err)
         })
     };
     addGame = (title,hours,image) => {
         axios.post('/api/games', {title,hours,image})
        .then((res) => {
            this.setState({gamesArray: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
     };
     editHours = (id,hours) => {
         axios.put(`/api/games/${id}`, {hours})
         .then((res) => {
             this.setState({gamesArray: res.data})
         })
         .catch((err) => {
             console.log(err)
         })
     }
    
     render(){
        return (
            <div>
                <AddGame
                addGame={this.addGame}/>
                {this.state.gamesArray.map((game) => {
                    return( 
                    <Game 
                    game={game} 
                    deleteGame={this.deleteGame} 
                    editHours={this.editHours}/>)
                })}
            </div>
        )
    }
}

export default GameList