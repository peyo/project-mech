import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
