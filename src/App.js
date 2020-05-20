import React from 'react';
import logo from './logo.svg';
import data from './constants.js';
import './App.css';
// import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const payload = JSON.stringify(this.state)
    console.log('JSON payload', payload)

    // axios.post('/', payload).then((result) => {
    //   // process the result
    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.handleSubmit}>
            { data.map((datum, index) => {
              if (!datum.conditional || datum.conditional.show_if(this.state.date_of_birth)) {
                return (
                  <div key={index}>
                    <label>{datum.human_label}</label>
                    {' '}
                    <input
                      type={datum.type}
                      name={datum.name}
                      onChange={this.handleChange}/>
                  </div>
                )}
              })
            }
            <input type="submit" value="Submit" />
            </form>
        </header>
      </div>
    );
  }
}

export default App;
