import React, { Component } from 'react'

class Cart extends Component {

    //constructor
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }



    setIncrement(){
        const {addValue} = this.props
        this.setState((prevState,props) => ({            
            number: prevState.number + addValue
        }))
        console.log('numbe is change to',this.state.number )
    }

    setDecrement(number_) {
        this.setState({
            number: number_ - 5
        },
        () => {console.log('call back value',this.state.number)}
        
        )
    }

    setZero(){
        this.setState({
            number: 0
        })
    }


    incrementFive(){
        this.setIncrement()
        this.setIncrement()
        this.setIncrement()
        this.setIncrement()
        this.setIncrement()
 
    }



    render() {
        return (
            <div>
                Current number of items: {this.state.number}
                <p>
                    <button onClick={() => this.incrementFive()}>Add</button>
                </p>
                <p>
                    <button onClick={() => this.setDecrement(this.state.number)}>Remove</button>
                </p>
              
                <p>
                    <button onClick={() => this.setZero(this.state.number)}>Clear</button>
                </p>
              
            </div>
        )
    }
}

export default Cart