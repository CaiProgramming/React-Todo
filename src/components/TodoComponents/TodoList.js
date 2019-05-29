import React from "react";
import "./Todo.css";
export default class List extends React.Component {

  clearHandler = e => {
    if(e.target.className === "normal"){
      e.target.className = "striked"
      this.props.cb(e.target.id,true);
    }else{
      e.target.className = "normal"
      this.props.cb(e.target.id,false);
    }
  }

  listHandler = () => {
    if(this.props.list){
    return this.props.list.map(item => {
      return (
        <p onClick={this.clearHandler} className={(item.completed === false) ? "normal" : "striked"} id={item.id} key={item.id}>
          {item.task}
        </p>
      );
    });
  }
  };
  render() {
    return <div>{this.listHandler()}</div>;
  }
}
