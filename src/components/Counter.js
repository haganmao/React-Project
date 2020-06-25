import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }


    Add(count) {
        this.setState({
            count: count + 1
        },
        ()=>{
            console.log( 'call back value is: ',this.state.count) 
        }        
        )
    }


    Down(count) {
        this.setState({
            count: count - 1
        })
        console.log(count)
    }
    
    render() {
        return (
            <div>
                <h1> Welcome to M-shop!</h1>
                <p> Your current Balance: {this.state.count}</p>
                <button onClick={() => this.Add(this.state.count)}>Add</button>
                <button onClick={() => this.Down(this.state.count)}>Decrease</button>
            </div>
        )
    }
}





export default Counter
