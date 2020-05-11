import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
