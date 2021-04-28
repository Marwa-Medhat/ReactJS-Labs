import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// function App() {



class App extends React.Component{
    render(){
        return (
          <div >
              <h1>phone book</h1>
              <div><displayContacts/></div>
          <div><AddContact /></div>
         </div>
        ); //return
        } //render
}


class AddContact extends React.Component{
    render(){
        return (
          <div >
          <div ></div>
          Name:<input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/><br/>
         </div>
        ); //return
        } //render
}

class displayContacts extends React.Component{
    render(){
        return (
          <div >
          <div ></div>
         </div>
        ); //return
        } //render
}



class displayContact extends React.Component{
    render(){
        return (
          <div >
          <div ></div>
         </div>
        ); //return
        } //render
}



export default App;
