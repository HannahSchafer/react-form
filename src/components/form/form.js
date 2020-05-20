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
    let validForm = true;

    for (var i = 0; i < data.length; i++) {
      const value = this.state[data[i].name];
      if (!data[i].is_valid(value)) {
        const label = data[i].human_label;
        alert(`${value} is not a valid ${label}`)
        validForm = false;
      }
    }

    if (validForm) {
      const payload = JSON.stringify(this.state)
      console.log('payload', payload)
      // axios.post('/', payload).then((result) => {
      //   // process the result
      // });
    }
  }

  render() {
    return (
      <div className="ui form">
        <form onSubmit={this.handleSubmit}>
          { data.map((datum, index) => {
            if (!datum.conditional || datum.conditional.show_if(this.state.date_of_birth)) {
              return (
                <div key={index}>
                { datum.has_label ? <label>{datum.human_label}</label> : '' }
                  {' '}
                  <input
                    name={datum.name}
                    onChange={this.handleChange}
                    placeholder={datum.human_label}
                    required={datum.required}
                    type={datum.type}
                  />
                </div>
              )}
            })
          }
          <input
            className="ui inverted button"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default Form;