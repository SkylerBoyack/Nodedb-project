import {Component} from 'react'

class AddGame extends Component{
    constructor(){
        super()
        this.state = {
            title: "",
            hours: "",
            image: ""
        }
    };
    
    handleTitle = (value) => {
        this.setState({title: value})
    };

    handleHours = (value) => {
        this.setState({hours: value})
    };

    handleImage = (value) => {
        this.setState({image: value})
    };

    handleAdd = () => {
        this.props.addGame(
            this.state.title,
            this.state.hours,
            this.state.image
        )
        this.setState({
            title: "",
            hours: "",
            image: ""
        });
    };



    render() {
        return(<div className="addgame">
            <h2>Add Game </h2>
            <input value={this.state.image} onChange={(e) => this.handleImage(e.target.value)} placeholder='Enter Image URL'/>
            <input value={this.state.title} onChange={(e) => this.handleTitle(e.target.value)} placeholder="Enter Title"/>
            <input value={this.state.hours} onChange={(e) => this.handleHours(e.target.value)} placeholder='Enter Hours'/>
            <button id="addButton" onClick={this.handleAdd}>Add Game</button>
        </div>)
    }
}

export default AddGame