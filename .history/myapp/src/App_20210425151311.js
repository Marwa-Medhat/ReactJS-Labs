import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// function App() {



  class Counter extends React.Component{
    constructor()
    {
      super();
      this.state={
        count:0
    }
  }
    increase=()=>{
  
      this.setState({count:this.state.count+1})
    }
    decrease=()=>{
  
      this.setState({count:this.state.count-1})
    }
    
    render(){
      return (
        <div >
        <div style={{ marginBottom: 30, fontWeight:10,}}>{this.state.count}</div>
        <button onClick={this.increase} style={{ marginRight: 50, color:"red" ,}}> Increase</button>
        <button onClick={this.decrease}> Decrease</button>
        </div>
      ); //return
      } //render
    }
    // backgroundColor:'green'
class App extends React.Component{
 
  render(){
  return (

    <div className="App"  >
   <div style={{ paddingTop: 100, }}><Counter  /></div>
   </div>


    
  ); //return
  } //render
} //class App 

export default App;



