import React from 'react';
import ReactDOM from 'react-dom';
import EmailSent from './email-sent';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <EmailSent />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
