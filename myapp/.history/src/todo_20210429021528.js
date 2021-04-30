// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { ListGroup } from 'react-bootstrap';
// import 'font-awesome/css/font-awesome.min.css';
// import { Redirect } from 'react-router-dom';

// class Todo extends React.Component{
   
//     constructor(){
//         super();
//         this.state={
//             contents:[
//                 { 
//                 content:"",
//                 mark:false,
//                 }
//             ],
              
//         }
//     }
//     componentDidMount(){
//         if(localStorage["contents"]){
//         let contents = JSON.parse(localStorage["contents"])
//         this.setState({contents:contents})
//         }
//     } 
//     saveToLocalStorage=()=>{
//         localStorage["contents"] = JSON.stringify(this.state.contents);
//     }

//     addContent=(content)=>{
//         this.state.contents.push(content);
//         this.setState({contents:this.state.contents});
//         this.saveToLocalStorage();
//     }
//     deleteContent=(content)=>{
//         this.state.contents.pop(content);
//         this.setState({contents:this.state.contents});
//         this.saveToLocalStorage();
//     }
//     markContent=(content,index)=>{
//         // // this.state.mark=1;
//         this.setState({mark: !this.state.contents.mark})
//         // this.setState({contents:this.state.contents});
//         // this.saveToLocalStorage();
//     }


    

//     render(){
//         return <div>
//             <h3 style={{textAlign:"center",}}>To Do List</h3>
//             <div className="container center" >
//             <DisplayTasks contents={this.state.contents} mark={this.state.contents.mark} deleteContent={this.deleteContent} markContent={this.markContent}/><br/>
//             </div>
//             <AddTask style={{textAlign:"center",}}addContent={this.addContent} />
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
//            <br/> <button onClick={this.addContent} className="btn btn-primary " style={{ margin: 30,}}>Add</button>
//         </div>
//     }
// }


// class DisplayTasks extends React.Component{
   
//     constructor(props){
//             super();
//         }
    
//     render(){
//         return <div class="list-group ">          
//             {this.props.contents.length > 0 ?this.props.contents.map((item)=>{
//                 return <DisplayTask content={item} key={item.content} mark={this.props.contents.mark} markContent={this.props.markContent} deleteContent={this.props.deleteContent} />
//             }):"Empty"}
//         </div>
//     }
// }

// DisplayTasks.defaultProps={
//     contents:[]
// }

// class DisplayTask extends React.Component{
    
//     // <i className="fa fa-times danger" ></i>
// //    style=
// //     {
// //         backgroundColor: "black",

// //     }
//     constructor(props){
//         super();
        
//     }
//     // style={{backgroundColor: "lightblue"}}
//     render(){
//         let btn_class = this.props.mark ? "blackButton" : "whiteButton";
//         return <div  className={" list-group-item list-group-item-action "+btn_class} >
//       <a style={{width:600 ,fontWeight:'bolder',marginRight:50,}}>{this.props.content.content} 
//       <button  onClick={this.props.markContent} className="btn btn-success " style={{ marginLeft: 400,marginRight: 10 ,paddingRight:10}}><i className="fa fa-check "></i></button> 
//       <button onClick={this.props.deleteContent}  className="btn btn-danger" ><i className="fa fa-times btn-danger" ></i></button></a>
      
//     </div>
//     }
// }
// export default Todo;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { Redirect } from 'react-router-dom';

class Todo extends React.Component{
   
    constructor(){
        super();
        this.state={
            contents:[],
            mark:false,   
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
    deleteContent=(item)=>{
        // const index1 = this.state.contents.indexOf(content);
        const array = this.state.contents;
        const index = array.indexOf(item);
        array.splice(index-1, 1);
        this.setState({
            contents: array
        });
    }   
    deleteContent=(index)=>{   // console.log(index)
        // this.state.contents.splice(index, 1);
        // this.setState({contents:this.state.contents});
        // this.saveToLocalStorage();
    }
   
    markContent=(index)=>{
        // // this.state.mark=1;
        this.setState({mark: !this.state.mark})
        // this.setState({contents:this.state.contents});
        // this.saveToLocalStorage();
    }


    

    render(){
        return <div>
            <h3 style={{textAlign:"center",}}>To Do List</h3>
            <div className="container center" >
            <DisplayTasks contents={this.state.contents} mark={this.state.mark} deleteContent={this.deleteContent} markContent={this.markContent}/><br/>
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
   
    constructor(props){
            super();
        }
    
    render(){
        return <div class="list-group ">          
            {this.props.contents.length > 0 ?this.props.contents.map((item)=>{
                return <DisplayTask content={item} key={item.content} mark={this.props.mark} markContent={this.props.markContent} deleteContent={this.props.deleteContent} />
            }):"Empty"}
        </div>
    }
}

DisplayTasks.defaultProps={
    contents:[]
}

class DisplayTask extends React.Component{
    
    constructor(props){
        super();
        
    }
    render(){
        let btn_class = this.props.mark ? "blackButton" : "whiteButton";
        return <div  className={" list-group-item list-group-item-action "+btn_class} >
      <a style={{width:600 ,fontWeight:'bolder',marginRight:50,}}>{this.props.content.content} 
      <button  onClick={this.props.markContent} className="btn btn-success " style={{ marginLeft: 400,marginRight: 10 ,paddingRight:10}}><i className="fa fa-check "></i></button> 
      <button onClick={this.props.deleteContent}  className="btn btn-danger" ><i className="fa fa-times btn-danger" ></i></button></a>
      
    </div>
    }
}
export default Todo;