import React from 'react';
import ReactDOM from 'react-dom';
import ForgotPage from './ForgotPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <ForgotPage />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
