import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// function App() {
class App extends React.Component{
  
  render(){
  return (

    <div className="App">
            <header className="App-header">
   <div><counter /></div>
   </header>
   </div>


    
  ); //return
  } //render
} //class App 

export default App;


class counter extends React.Component{
  constructor()
  {
    super();
    this.state={
      count:0
  }
}
  incease=()=>{

    this.setState({count:this.state.count+1})
  }
  decease=()=>{

    this.setState({count:this.state.count-1})
  }
  
  render(){
    return (
      <div className="container">
      <div>{this.state.count}</div>
      <button onClick={this.increase}> Increase</button>
      <button onClick={this.decrease}> Decrease</button>
      </div>
    ); //return
    } //render
  }

