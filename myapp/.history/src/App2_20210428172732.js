import React from 'react';

class App extends React.Component{

    constructor(){
        super();
        this.state={
            contacts:[]
        }
    }

    componentDidMount(){
        if(localStorage["contacts"]){
        let contacts = JSON.parse(localStorage["contacts"])
        
        this.setState({contacts:contacts})
        }
    }

    addContact=(contact)=>{
        this.state.contacts.push(contact);
        this.setState({contacts:this.state.contacts});
        this.saveToLocalStorage();
    }

    saveToLocalStorage=()=>{
        localStorage["contacts"] = JSON.stringify(this.state.contacts);
    }

    render(){
        return <div>
            <h1>Phone book</h1>
            <DisplayContacts contacts={this.state.contacts} />
            <AddContact addContact={this.addContact} />
        </div>
    }

}


class AddContact extends React.Component{

    constructor(props){
        super();
        this.state={
            name:"",
            phone:"",
            email:"",
            error:""
        }
    }

    addContact=()=>{
        let contact = {
            name:this.state.name,
            phone:this.state.phone,
            email:this.state.email
        }

        this.props.addContact(contact);
    }

    handleEmail=(e)=>{
        let email = e.target.value;
        if(email.indexOf("@")>-1){
            this.setState({email:email,error:""})
        }
        else{
            this.setState({email:email,error:"email not valid"})
        }


    }

    render(){
        return <div>
            {this.state.error}<br/>
            Name : <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
            <br/>Phone : <input type="text" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} />
            <br/>Email : <input type="text" value={this.state.email} onChange={this.handleEmail} />
            
            <button onClick={this.addContact} >Add</button>
        </div>
    }
}


class DisplayContacts extends React.Component{
    render(){
        return <div>
            {this.props.contacts.length > 0 ?this.props.contacts.map((item)=>{
                return <DisplayContact contact={item} key={item.phone} />
            }):"Empty"}
        </div>
    }
}

DisplayContacts.defaultProps={
    contacts:[]
}

class DisplayContact extends React.Component{
    render(){
        return <div>
            Name : {this.props.contact.name} <br/>
            Email : {this.props.contact.email} <br/>
            Phone : <a href={"tel:"+this.props.contact.phone}>{this.props.contact.phone}</a> <hr/>
        </div>
    }
}


export default App;