import React, { Component } from 'react';
import data from '../../constants.js'
// import axios from 'axios';
import './form.css';


class Form extends Component {

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
      <div className="ui form">
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
          <input type="submit" value="Submit" className="hi ui inverted button" />
        </form>
      </div>
    );
  }
}

export default Form;