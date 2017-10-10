import React, { Component } from 'react';
import './App.css';

const BaseComponent = (BasicComponent) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <BasicComponent { ...this.state } increment={ this.increment } />
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.increment} >Increase me!: {props.count}</button>
  )
}
const Mouseover = (props) => {
  return (
    <button onMouseOver={ props.increment } >Increase me!: { props.count }</button>
  )
}

const ClickButton = BaseComponent(Button);
const MouseoverButton = BaseComponent(Mouseover);
const App = () => {
  return (
    <div>
      <ClickButton />
      <MouseoverButton />
    </div>
  )
}

export default App;
