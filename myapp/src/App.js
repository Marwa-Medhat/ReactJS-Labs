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
            <h1>Display Object json</h1>
            <hr></hr>
          <div style={{fontWeight:'bolder',}}>ID: {this.state.employee.id}</div>
          <br></br>
          <div style={{fontWeight:'bolder',}}> jobTitleName:{this.state.employee.jobTitleName}</div>
          <br></br>
          <div style={{fontWeight:'bolder',}}>firstname:{this.state. employee.firstname}</div>
          <br></br>
          <div style={{fontWeight:'bolder',}}>lastname:{this.state.employee.lastname}</div>
          <br></br>
          <div style={{fontWeight:'bolder',}}>PreferedFullName:{this.state.employee.PreferedFullName}</div>
          <br></br>
          <div style={{fontWeight:'bolder',}}>employeeCode:{this.state.employee.employeeCode}</div>
          <br></br>
          <div style={{fontWeight:'bolder',}}>region:{this.state.employee.region}</div>
          <br></br>
          <div style={{fontWeight:'bolder',}}>phoneNumber:{this.state.employee.phoneNumber}</div>
          <br></br>
          <div style={{fontWeight:'bolder',}}>emailAddress:{this.state.employee.emailAddress}</div>
          <br></br>
          </div>
        ); //return
        } //render
    }
  class App extends React.Component{
  
    render(){
    return (

      <div className="App"  >
    <div style={{ paddingTop: 30, }}>< Webapp /></div>
    <div style={{ paddingTop: 100, }}><Counter  /></div>
    </div>


      
    ); //return
    } //render
  } //class App 

export default App;



