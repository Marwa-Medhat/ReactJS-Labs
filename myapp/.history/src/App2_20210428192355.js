// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'

// class App extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             contents:[]
//         }
//     }

    
//     addContent=(content)=>{
//         this.state.contents.push(content);
//         this.setState({contents:this.state.contents});
//         // this.saveToLocalStorage();
//     }


//     // componentDidMount(){
//     //     if(localStorage["contents"]){
//     //     let contents = JSON.parse(localStorage["contents"]);
        
//     //     this.setState({contents:contents})
//     //     }
//     // } 
//     // saveToLocalStorage=()=>{
//     //     localStorage["contents"] = JSON.stringify(this.state.contents);
//     // }

//     render(){
//         return <div>
//             <h1>To Do List</h1>
//             <DisplayTasks contents={this.state.contents} />
//             <AddTask addContent={this.addContent} />
//         </div>
//     }

// }


// class AddTask extends React.Component{

//     constructor(props){
//         super();
//         this.state={
//             content:"",
           
//         }
//     }

//     addContent=()=>{
//         let content = {
//             content:this.state.content, 
//         }

//         this.props.addContent(content);
//     }


//     render(){
//         return <div>
//             content : <input type="text" value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})} />
//             <button onClick={this.addContent} >Add</button>
//         </div>
//     }
// }


// class DisplayTasks extends React.Component{
//     render(){
//         return <div class="container list-group">          
//             {this.props.contents.length > 0 ?this.props.contents.map((item)=>{
//                 return <DisplayTask content={item} key={item.content} />
//             }):"Empty"}
//         </div>
//     }
// }

// DisplayTasks.defaultProps={
//     contents:[]
// }

// class DisplayTask extends React.Component{
    
//     render(){
//         return <div>
//             <a href="#" class="list-group-item list-group-item-action">{this.props.content.content}</a><br/>

//         </div>
//     }
// }
// export default App;

import React, { Component } from 'react';
<script src="https://gist.github.com/AntoninMarchardDev/2d3cdb7aa6dd7a7ae5fda85aab89eccc.js"></script>

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {
        // no event 
        // pass the item to indexOf
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    // add item to deleteTodo.bind(this, item)
    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item" key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this, item)}>X</button>
                </div>    
            );
        });
    }

    render() {
        return(
            <div>
                <h1 align="center">Ma Todo list</h1>
                <form className="form-row align-items-center">
                    <input 
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />
                    <button 
                        onClick={this.addTodo.bind(this)} 
                        className="btn btn-primary"
                    >
                        Ajouter
                    </button>
                </form>
                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;