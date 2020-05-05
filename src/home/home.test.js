import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from './Home';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
        <Home />
      </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
