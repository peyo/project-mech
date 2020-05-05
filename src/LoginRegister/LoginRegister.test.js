import React from 'react';
import ReactDOM from 'react-dom';
import LoginRegister from './LoginRegister';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <LoginRegister />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
