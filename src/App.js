import "./App.css";
import React, { Component } from "react";
import TestComponent from "./testComponent";
import Counter from "./counter.js";
import Overview from "./overview";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
    this.state = {
      task: { text: "", id: uniqid() },
      tasks: [],
    };
  }

  onClickBtn() {
    console.log("Button has been clicked");
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid() },
    });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <TestComponent title="React" onButtonClicked={this.onClickBtn} />
        <Counter />
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
        <p>links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile page</Link>
            </li>
            <li>
              <Link to="image">Fetched Image</Link>
            </li>
            <li>
              <Link to="store">Store</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
