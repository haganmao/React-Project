import React, { Component } from 'react'

// function First_React(params) {
//     return <h2>this is my react review</h2>
// }


// const First_React = ({name,work,id}) =>{ return (
//     <div>
//     <h1>My name is {name},
//         my age is:{work}, i am a {id}
//     </h1> 
//     <button >SignIn</button>
//     <button>SignOut</button>
//     </div>)}


// class First_React extends Component{
//     render(){
//         return <h1>This is pretty much basic class Component!</h1>
//     }

// }

//basic JSX
// const First_React = props => {
// return(
//     <h1>This is basic Jsx practise</h1>

// )

//     console.log(props)
//     return React.createElement('div' ,null , React.createElement('button',{id:'h1Title', className:"h1Title" }, null, 'Confirm'))

// }

class First_React extends Component {
    render(props) {
        const {name,work,id} = this.props
        return (
            <div>
                <h1>My name is {name}, i am {work}, id is {id} </h1>
                {this.props.children}
            </div>
        )
    }
}






export default First_React