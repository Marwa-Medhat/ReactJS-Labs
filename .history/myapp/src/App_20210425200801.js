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
        <div style={{ marginBottom: 30, fontWeight:'bolder',}}>{this.state.count}</div>
        <button onClick={this.increase} style={{ marginRight: 50, color:"red" ,}}> Increase</button>
        <button onClick={this.decrease} style={{ color:"red" ,}}> Decrease</button>
        </div>
      ); //return
      } //render
    }
    // backgroundColor:'green'
    class Webapp extends React.Component{


      constructor()
      {
        super();
        this.state={
          employee:{
          id:1,
          jobTitleName:"developer",
          firstname:"Marwa",
          lastname:"Medhat",
          PreferedFullName:"Marwa Medhat",
          employeeCode:"EI",
          region:"CA",
          phoneNumber:"408-1234567",
          emailAddress:"marwa@gmail.com"
          }
      }
    }

      render(){
        return (
          <div >
          <div style={{fontWeight:'bolder',}}>ID: {this.state.employee.id}</div>
          <div style={{fontWeight:'bolder',}}> jobTitleName:{this.state.employee.jobTitleName}</div>
          <div style={{fontWeight:'bolder',}}>firstname:{this.state.firstname}</div>
          <div style={{fontWeight:'bolder',}}>lastname:{this.state.lastname}</div>
          <div style={{fontWeight:'bolder',}}>PreferedFullName:{this.state.PreferedFullName}</div>
          <div style={{fontWeight:'bolder',}}>employeeCode:{this.state. employeeCode}</div>
          <div style={{fontWeight:'bolder',}}>region:{this.state.region}</div>
          <div style={{fontWeight:'bolder',}}>phoneNumber:{this.state.phoneNumber}</div>
          <div style={{fontWeight:'bolder',}}>emailAddress:{this.state.emailAddress}</div>
          </div>
        ); //return
        } //render
    }
  class App extends React.Component{
  
    render(){
    return (

      <div className="App"  >
    <div style={{ paddingTop: 110, }}>< Webapp /></div>
    <div style={{ paddingTop: 100, }}><Counter  /></div>
    </div>


      
    ); //return
    } //render
  } //class App 

export default App;



