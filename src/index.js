import React from 'react';
import ReactDOM from 'react-dom';

const rootContainer = document.querySelector('#root')

class App extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          value: '',
          result: ''
      }
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (event) {
  	let result = event.target.value
    this.setState({
        value: event.target.value,
        result: result
    })
  }
  
  render() {
    return (
      <div className="App">
        <h3>Input</h3>
        <textarea value={this.state.value} onChange={this.handleChange}/>
        <h3>Result</h3>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, rootContainer)
