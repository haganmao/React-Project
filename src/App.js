import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hr1 from './components/helloReact'
import Message from './components/Message'
import Counter from './components/Counter'
import FirstReact from './components/FirstReact'
import LoginP from './components/LoginPage'
import Cart from './components/cart'

function App() {
  return (
    <div className="App">
      
     
      <FirstReact name='Mao' age='18' work='student' id='001'>
        <button>Delete</button>
      </FirstReact>
      <FirstReact name='Gao' age='20' work='teacher' id='002'/>
      <FirstReact name='Wang' age='29' work='programmer' id='003'/>


      <LoginP />
      <hr/>
      <Cart  />
      <hr/>
    
      

      {/* <hr/>
      <Greet />
      <hr />  
      <Welcome name='MAO' age='18' id='001' />
      <Welcome name='GAO' age='16' id='002' />
      <Welcome name='WANG' age='22' id='003' />

      <Hr name='MAO' age='18' id='001'>
        <p>This is children props</p>
      </Hr>
      <Hr name='GAO' age='16' id='002' />
      <Hr name='WANG' age='22' id='003' />

      <hr /> */}

    </div>
  );
}

export default App;
