import React, { Component } from 'react'


// class HelloReact extends Component {

//     render(){
//         return <h1>This is my react Practise</h1>
//     }
// }
// export default HelloReact


// function Hr(params) {
//     return <h1>This is another functional statement for create Component in react!</h1>
// }



//return only can references one element, so need combine into one div
const Hr = props => {
    console.log(props)
    // return react.createElement('h1', {className:'title', id:'titleID'}, 'Hello React!' )
    return (
        <div>
            <h1>Hello React! {props.name}, Age:{props.age}, ID: {props.id}</h1>
            {props.children}
        </div>
)}

export default Hr

