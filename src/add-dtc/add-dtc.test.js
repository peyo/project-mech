import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddDTC from './add-dtc';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
        <AddDTC />
      </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
