import React, { Component } from 'react';

class TestComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { title, onButtonClicked } = this.props;
    return (
      <div>
      <h1>{title}</h1>
      <button onClick={onButtonClicked}>Click Me!</button>
    </div>
  );
  }
}

export default TestComponent