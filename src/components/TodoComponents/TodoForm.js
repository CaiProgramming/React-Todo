import React from "react";
import "./Todo.css";
import List from "./TodoList.js";
export default class Form extends React.Component {
  state = {
    text:"",
    List:[],
    remove:[]
  }
  textHandler = (e)=>{
    this.setState({
      text:e.target.value
    })
  }
  addHandler = ()=>{
    let id = Math.floor(Math.random() * 20000) + 7000;
    this.setState({
      List: this.state.List.concat({
          task: this.state.text,
          id: id,
          completed: false
        }),
      text:""
    })
  }
  callbackHandler = (id,bool) =>{
    let updateIndex = this.state.List.findIndex((obj => obj.id == id));
    let List = this.state.List;
    List[updateIndex].completed = bool
    this.setState({
      List : List
    })

  }
  clearHandler = () => {
    
    this.setState({
      List: this.state.List.filter(item => item.completed == false),
    })

  }
  render() {
    return (
      <div>
        <List list={this.state.List} cb={this.callbackHandler} />
        <section className="Form">
          <input type="text" onChange={this.textHandler} value={this.state.text}/>
          <button className="Btn" onClick={this.addHandler}>Add</button>
          <button className="Btn" onClick={this.clearHandler}>Clear Completed</button>
        </section>
      </div>
    );
  }
}
