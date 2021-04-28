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
        let contacts = JSON.parse(localStorage["contents"])
        
        this.setState({contents:contents})
        }
    }

    addContent=(content)=>{
        this.state.contacts.push(content);
        this.setState({contents:this.state.contents});
        this.saveToLocalStorage();
    }

    saveToLocalStorage=()=>{
        localStorage["contents"] = JSON.stringify(this.state.contents);
    }

    render(){
        return <div>
            <h1>To Do List</h1>
            {/* <DisplayContacts contacts={this.state.contacts} /> */}
            <AddContact addContact={this.addContact} />
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
        let contact = {
            content:this.state.content, 
        }

        this.props.addTask(content);
    }


    render(){
        return <div>
            {this.state.error}<br/>
            content : <input type="text" value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})} />
            <button onClick={this.addTask} >Add</button>
        </div>
    }
}


// class DisplayContacts extends React.Component{
//     render(){
//         return <div>
//             {this.props.contacts.length > 0 ?this.props.contacts.map((item)=>{
//                 return <DisplayContact contact={item} key={item.phone} />
//             }):"Empty"}
//         </div>
//     }
// }

// DisplayContacts.defaultProps={
//     contacts:[]
// }

// class DisplayContact extends React.Component{
//     render(){
//         return <div>
//             Name : {this.props.contact.name} <br/>
//             Email : {this.props.contact.email} <br/>
//             Phone : <a href={"tel:"+this.props.contact.phone}>{this.props.contact.phone}</a> <hr/>
//         </div>
//     }
// }


export default App;