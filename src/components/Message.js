import React, { Component } from 'react'


class Message extends Component{

    constructor(){
        super()
        this.state = {
            message:'Welcome Vistor!'
        }
    }

    setLoginStatus(){
        this.setState({
            message:'Welcome MAO!'
        })
    }
    setLogOutStatus(){
        this.setState({
            message:'Thanks, We will see you soon Mao!'
        })
    }

    render(){
        return(
            <div>     
              <h1>{this.state.message}</h1>                 
              <button onClick={() => this.setLoginStatus()}>LogIn</button>
              <button onClick={() => this.setLogOutStatus()}>LogOut</button>
            </div>
        )
    }
}

export default Message 