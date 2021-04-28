import React from 'react';

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
            <DisplayContacts contents={this.state.contents} />
            <AddContact addContent={this.addContent} />
        </div>
    }

}


class AddContact extends React.Component{

    constructor(props){
        super();
        this.state={
            content:"",
           
        }
    }

    addTask=()=>{
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


class DisplayContacts extends React.Component{
    render(){
        return <div>
            {this.props.contents.length > 0 ?this.props.contents.map((item)=>{
                return <DisplayContact content={item} key={item.content} />
            }):"Empty"}
        </div>
    }
}

DisplayContacts.defaultProps={
    contents:[]
}

class DisplayContact extends React.Component{
    render(){
        return <div>
            Task : {this.props.content} <br/>
        </div>
    }
}
export default App;