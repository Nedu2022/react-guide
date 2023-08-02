import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Junior', age: 26},
      {name: 'Favour', age: 28},
      {name: 'John', age: 23}
    ]
  }

  switchNameHandler = () => {
      this.setState({
        persons: [
        {name: 'Fred', age: 66},
        {name: 'Juilet', age: 18},
        {name: 'Godwin', age: 93}
        ]
      });
  }

  render() {
    return (
      <div className="App">
       <h1>Hi i'm Nedu</h1>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Coding</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
