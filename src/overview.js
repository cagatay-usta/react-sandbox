import React from "react";

const Overview = (props) => {
  const deleteTask = (e) => {
    console.log(e.target.value);
  };
  const { tasks } = props;
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text} </li>;
      })}
    </ul>
  );
};

export default Overview;
