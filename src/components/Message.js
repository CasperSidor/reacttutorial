import React, {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state ={
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Eyyy you did it'
        })
    }

    render() {
    return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Press this</button>
            </div>
        )
    }
}

export default Message