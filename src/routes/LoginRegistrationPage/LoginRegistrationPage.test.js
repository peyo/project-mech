import React from 'react';
import ReactDOM from 'react-dom';
import LoginRegistrationPage from './LoginRegistrationPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <LoginRegistrationPage />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
