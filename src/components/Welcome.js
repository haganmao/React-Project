import React from 'react'
import { Component } from 'react'



//use this key word to access parameters in react class
class Welcome extends Component {
    render(props) {
        return <h1 > Welcome! {this.props.name} {this.props.age} {this.props.id} </h1>
    }
}

export default Welcome