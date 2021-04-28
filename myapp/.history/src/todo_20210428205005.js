import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

class Todo extends React.Component{
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
    saveToLocalStorage=()=>{
        localStorage["contents"] = JSON.stringify(this.state.contents);
    }

    addContent=(content)=>{
        this.state.contents.push(content);
        this.setState({contents:this.state.contents});
        this.saveToLocalStorage();
    }


  

    render(){
        return <div>
            <h3 style={{textAlign:"center",}}>To Do List</h3>
            <div className="container center" >
            <DisplayTasks contents={this.state.contents} /><br/>
            </div>
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
           <br/> <button onClick={this.addContent} className="btn btn-primary " style={{ margin: 30,}}>Add</button>
        </div>
    }
}


class DisplayTasks extends React.Component{
    render(){
        return <div class="list-group ">          
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
    
    // <i className="fa fa-times danger" ></i>
    render(){
        return <div>
    <a href="#" class="list-group-item list-group-item-action " style={{width:600, textAlign:"center"}}>{this.props.content.content}   <button className="btn btn-danger"><i className="fa fa-times btn-danger" ></i></button></a>
      
    </div>
    }
}
export default Todo;
