import React from "react";
import "./Todo.css";
export default class List extends React.Component {
  clearHandler = e => {
    console.log(e.target.getAttribute("data-searched"));
    if (e.target.className.includes(`normal`)) {
      if (e.target.getAttribute("data-searched") === true) {
        e.target.className = `striked searched`;
      }
      if (e.target.getAttribute("data-searched") === false) {
        e.target.className = `striked nsearched`;
      }
      this.props.cb(e.target.id, true);
    }
    if (e.target.className.includes(`striked`)) {
      if (e.target.getAttribute("data-searched") === true) {
        e.target.className = `normal searched`;
      }
      if (e.target.getAttribute("data-searched") === false) {
        e.target.className = `normal nsearched`;
      }
      this.props.cb(e.target.id, false);
    }
  };

  listHandler = () => {
    if (this.props.list) {
      return this.props.list.map(item => {
        return (
          <p
            onClick={this.clearHandler}
            className={
              item.completed === false
                ? `normal ${item.searched === true ? "searched" : "nsearched"}`
                : `striked ${item.searched === true ? "searched" : "nsearched"}`
            }
            id={item.id}
            data-searched={item.searched}
          >
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
