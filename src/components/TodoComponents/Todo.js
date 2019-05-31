import React from "react";
import "./Todo.css";
import Form from "./TodoForm.js";
import search from "../../assets/search.png"
class Todo extends React.Component {
  state={
    text:"",
    searchText:""
  }
  searchHandler = () =>{
      this.setState({
        text: this.state.searchText
      })
  }
  textChangleHandler = (e) =>{
    this.setState({
      searchText: e.target.value,
      text:""
    })

  }
  render() {
    return (
      <div className="Jumbotron">
        <div className="searchbar">
        <h1>TODO list tracker</h1>
        <section className="search">
        <input type="text" value={this.state.searchText} onChange={this.textChangleHandler} className="ListInput searchInput"/>
        <button className="Btn" onClick={this.searchHandler}><img src={search} class="searchico" alt="search"/></button>
        </section>
        </div>
        <Form sText={this.state.text} />
      </div>
    );
  }
}

export default Todo;
