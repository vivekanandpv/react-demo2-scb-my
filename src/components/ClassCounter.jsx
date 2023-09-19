import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((s, p) => {
      return {
        counter: s.counter + 1,
      };
    });
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <>
        <h4>Class Counter: {this.state.counter}</h4>
        <p>{this.props.message}</p>
        <button className='btn btn-primary' onClick={this.increment}>
          Increment
        </button>
      </>
    );
  }
}

export default ClassCounter;
