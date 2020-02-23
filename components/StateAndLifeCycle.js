import React, { Component } from 'react'

class StateAndLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}
      }
       tick() {
        this.setState({
          date: new Date()
        });
      }
      componentDidMount(){
          setInterval(() => {
              this.tick()
          }, 1000);
      }
      render() {
        return (
          <div>
            <h1>Hello, React!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
}

export default StateAndLifeCycle
