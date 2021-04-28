import React from "react";
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {Header,Menu} from './Header2'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            items:[
            {
                text:"Home",
                link:"/home"
            },
            {
                text:"About",
                link:"/about"
            },
            {
                text:"Contacts",
                link:"/contacts"
            },
            {
                text:"Projects",
                link:"/projects"
            },
            {
                text:"Login",
                link:"/login"
            },
            {
                text:"Users",
                link:"/users"
            },
            {
                text:"Topics",
                link:"/topics"
            }
        ]
    }
    }

    toggleActive=(text)=>{
        
        this.state.items.forEach((item)=>item.active=false);
        let item = this.state.items.find(x=>x.text==text);
        item.active = !item.active
        this.setState({items:this.state.items});
        //this.forceUpdate();
    }


    render(){
        return <Router>
            <Header title="My website" logo={logo} menu={this.state.items} toggleActive={this.toggleActive} />
            <Switch>
                <Route path="/about" >
                    <About />
                </Route>
                <Route path="/contacts" >
                    <Contacts />
                </Route>
                <Route path="/projects" >
                    <Projects />
                </Route>
                <Route path="/users" >
                    <UserList />
                </Route>
                <Route path="/login" >
                    <Login />
                </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
                <Route path="/" >
                    <Home />
                </Route>
            </Switch>
        </Router>
    }
}


class Home extends React.Component{
    render(){
        return <div>Home</div>;
    }
}

class About extends React.Component{
    render(){
        return <div>About</div>;
    }
}

class Contacts extends React.Component{
    render(){
        return <div>Contacts</div>;
    }
}

class Projects extends React.Component{
    render(){
        return <div>Projects</div>;
    }
}


class UserList extends React.Component{

    constructor(){
        super();
        this.state={
            users:[],
            loading:false
        };
    }

    async componentDidMount(){
        this.setState({loading:true});
        setTimeout(async ()=>{

        
        let res= await fetch("https://reqres.in/api/users?page=2",{
            method:"GET",
            headers:{
                "content-type":"application/json"
            }
        });
        let resJson = await res.json();
        this.setState({users:resJson.data,loading: false});
    },5000)
    }

    render(){
        return <div>
            {!this.state.loading ? this.state.users.map((item)=>{
                return <UserView key={item.id}  user={item} />
            }): "Loading Users"}
        </div>
    }
}

class Login extends React.Component{
    
    constructor(){
        super();
        this.state={
            username:"",
            email:"",
            password:""
        }
    }

    setInputValue=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    login=async ()=>{
        let user = {
            email:this.state.email,
            password:this.state.password
        }
        let res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        });
        let resJson = await res.json();
        if(resJson.token){
            alert("Login success");
        }else{
            alert(resJson.error)
        }
    }

    render(){
        return <div>
            <h1>Login</h1>
            Username:<input type="text" value={this.state.username} onChange={this.setInputValue} name="username" /><br/>
            Password:<input type="password" value={this.state.password} onChange={this.setInputValue} name="password" /><br/>
            Email:<input type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} name="email" /><br/>
            <button onClick={this.login}>Login</button>
        </div>
    }
}

class UserView extends React.Component{
    constructor(){
        super();
        
    }

    render(){
        return <div>
            <img src={this.props.user.avatar} style={{width:100,height:100}} /><br/>
            <span>{this.props.user.first_name} {this.props.user.last_name}</span>
            <div>Email : {this.props.user.email}</div>
        </div>
    }
}

function Topics() {
    let match = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
  
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        {/* The Topics page has its own <Switch> with more routes
            that build on the /topics URL path. You can think of the
            2nd <Route> here as an "index" page for all topics, or
            the page that is shown when no topic is selected */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic.</h3>
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }

export default App;