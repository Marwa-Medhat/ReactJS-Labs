import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{

    constructor(){
        super();
        this.state={
            contents:[]
        }
    }

    componentDidMount(){
        if(localStorage["contents"]){
        let contents = JSON.parse(localStorage["contents"])
        
        this.setState({contents:contents})
        }
    }

    addContent=(content)=>{
        this.state.contents.push(content);
        this.setState({contents:this.state.contents});
        this.saveToLocalStorage();
    }

    saveToLocalStorage=()=>{
        localStorage["contents"] = JSON.stringify(this.state.contents);
    }

    render(){
        return <div>
            <h1>To Do List</h1>
            <DisplayTasks contents={this.state.contents} />
            <AddTask addContent={this.addContent} />
        </div>
    }

}


class AddTask extends React.Component{

    constructor(props){
        super();
        this.state={
            content:"",
           
        }
    }

    addContent=()=>{
        let content = {
            content:this.state.content, 
        }

        this.props.addContent(content);
    }


    render(){
        return <div>
            {this.state.error}<br/>
            content : <input type="text" value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})} />
            <button onClick={this.addContent} >Add</button>
        </div>
    }
}


class DisplayTasks extends React.Component{
    render(){
//    <div class="list-group">
//   <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
//     The current link item
//   </a>
//   <a href="#" class="list-group-item list-group-item-action">A second link item</a>
//   <a href="#" class="list-group-item list-group-item-action">A third link item</a>
//   <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
//   <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
// </div>




        return <div class="container">
          
            {this.props.contents.length > 0 ?this.props.contents.map((item)=>{
                return <DisplayTask content={item} key={item.content} />
            }):"Empty"}
        </div>
    }
}

DisplayTasks.defaultProps={
    contents:[]
}

class DisplayTask extends React.Component{
    render(){
        return <div>
            {/* Task : {this.props.content.content} <br/> */}
            <a href="#" class="list-group-item list-group-item-action">{this.props.content.content}</a><br/>

        </div>
    }
}
export default App;