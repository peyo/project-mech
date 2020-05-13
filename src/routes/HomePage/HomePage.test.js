import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import HomePage from './HomePage';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
