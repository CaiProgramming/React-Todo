import React from "react";
import "./Todo.css";
import List from "./TodoList.js";
export default class Form extends React.Component {

  state={
        List: JSON.parse(localStorage.getItem("List")),
        text:"",
        search:""
  }


  textHandler = e => {
    this.setState({
      text: e.target.value
    });
  };
  addHandler = () => {
    if(this.state.text !== ""){
    let id = Math.floor(Math.random() * 20000) + 7000;
    this.setState({
      List: this.state.List.concat({
        task: this.state.text,
        id: id,
        completed: false,
        searched: true
      }),
      text: ""
    });
  }
  };
  callbackHandler = (id, bool) => {
    let updateIndex = this.state.List.findIndex(obj => obj.id == id);
    let List = this.state.List;
    List[updateIndex].completed = bool;
    this.setState({
      List: List
    });
  };
  clearHandler = () => {
    this.setState({
      List: this.state.List.filter(item => item.completed == false)
    });
  };


  componentDidUpdate =  () => {
    if(this.state.List){
    localStorage.setItem("List",JSON.stringify(this.state.List));
  }else{
    this.setState({
      List: []
    })
  }
  if(this.props.sText !== ""){
    if(this.state.List){
    let list = this.state.List;
     list.forEach((item,index) => {if(item.task !== this.props.sText) list[index].searched = false; })
    }
   }
   else{
     if(this.state.List){
     let list = this.state.List;
      list.forEach((item,index) => {list[index].searched = true; })
      }
    }
  };
  componentDidMount = () =>{
    if(!localStorage.getItem("List")){
      localStorage.setItem("List",JSON.stringify([]));
      window.location.reload();
    }
  }

  render() {
    return (
      <div>
        <section className="Form">
          <input
            type="text"
            className="ListInput"
            onChange={this.textHandler}
            value={this.state.text}
          />
          <button className="Btn" onClick={this.addHandler}>
            Add
          </button>
          <button className="Btn delete" onClick={this.clearHandler}>
            Clear Completed
          </button>
        </section>
        <List list={this.state.List} cb={this.callbackHandler} />
      </div>
    );
  }
}
