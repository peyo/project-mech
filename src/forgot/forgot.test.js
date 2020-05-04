import React from 'react';
import ReactDOM from 'react-dom';
import Forgot from './forgot';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <Forgot />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
