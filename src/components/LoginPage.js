import React, { Component } from 'react'




function get(params) {
    var form_para = document.getElementById(
        'Login_form'
    );
    console.log(form_para);
}

get();

class LoginP extends Component {


    constructor(){
        super()
        this.state  = {
            message:'Log In Now'
        }
    }

    setStateToLogin(){
        
        this.setState({
            message:'Login success'
        })
        alert('Congradulations!')
    }
    
    setStateToLogout(){
        
        this.setState({
            message:'Logout success'
        })
        alert('Congradulations!')
    }


    

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <form id='Login_form' action="">
                <p> <label htmlFor="name_input">Name</label>
                <input id='name_input' type="text"/></p>
                <p>
                <label htmlFor="email_input">Email</label>
                <input id='email_input' type="text"/>
                </p>
                <p>
                <label htmlFor="message_input">Message</label>
                <input id='message_input' type="textarea"/>
                </p>
            </form>
            <p>
                <button onClick={() => this.setStateToLogin()} >Login</button>
                <button onClick={() => this.setStateToLogout()} >Login</button>
        
            </p>
            </div>
        )
    }
}

export default LoginP