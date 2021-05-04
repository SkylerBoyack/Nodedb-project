import {Component} from 'react'

class Game extends Component{
    constructor(){
        super()
        this.state = {
            editMode:false,
            hours: "",
        }
    }

    handleHours = (value) => {
        this.setState({hours: value})
    }

    toggleEdit = () => {
        this.setState({editMode: !this.state.editMode})
    }

    handleSave = () => {
        this.props.editHours(this.props.game.id, this.state.hours)
        this.toggleEdit()
        this.setState({title: ''})
    }


    render(){
        return this.state.editMode ? (
            <div className="game">
                <input value={this.state.hours}
                onChange={(e)=> this.handleHours(e.target.value)} placeholder="edit hours"/>
                <button onClick={this.handleSave}>Save</button>
            </div>
        ) : (  <div className="game"> <body>
                 <img src={this.props.game.image} alt={this.props.game.title}/>
                    <p>{this.props.game.title}</p>    
                    <p>Hours Played: {this.props.game.hours}</p>    
                    <button onClick={() => this.props.deleteGame(this.props.game.id)}>Delete Game</button>
                    <button onClick={this.toggleEdit}>Edit</button>  
                    </body>  </div>
        )
    }
}

export default Game