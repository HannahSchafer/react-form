import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../../components/form/form.js';

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});
