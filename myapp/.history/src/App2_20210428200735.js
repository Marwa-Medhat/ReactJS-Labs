import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup } from 'react-bootstrap';

class Todo extends React.Component{

    constructor(){
        super();
        this.state={
            contents:[]
        }
    }

    
    addContent=(content)=>{
        this.state.contents.push(content);
        this.setState({contents:this.state.contents});
        // this.saveToLocalStorage();
    }


    // componentDidMount(){
    //     if(localStorage["contents"]){
    //     let contents = JSON.parse(localStorage["contents"]);
        
    //     this.setState({contents:contents})
    //     }
    // } 
    // saveToLocalStorage=()=>{
    //     localStorage["contents"] = JSON.stringify(this.state.contents);
    // }

    render(){
        return <div>
            <h3 style={{textAlign:"center",}}>To Do List</h3>
            <DisplayTasks contents={this.state.contents} />
            <AddTask style={{textAlign:"center",}}addContent={this.addContent} />
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
            content : <input type="text" value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})} />
           <br/> <button onClick={this.addContent} className="btn btn-primary " style={{ marginRight: 50,}}>Add</button>
        </div>
    }
}


class DisplayTasks extends React.Component{
    render(){
        return <div class="container list-group">          
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
    <a href="#" class="list-group-item list-group-item-action " style={{marginBottom:"auto"}}><i className="bi bi-x-square-fill" ></i>
{this.props.content.content}</a><br/>

        </div>
    }
}
export default Todo;
