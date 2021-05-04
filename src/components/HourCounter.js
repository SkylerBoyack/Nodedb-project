import React, {Component} from 'react'

class HourCounter extends Component{
    constructor(){
        super()
            this.state = {}
    }

    render(){
        return (
         <dv className="sum">
           <h3>Total Hours: {this.props.gamesArray.reduce((acc,e)=>{
            acc += +e.hours 
            return  acc},0)} 
        </h3>
       </dv>
        )
    }
}
 
export default HourCounter