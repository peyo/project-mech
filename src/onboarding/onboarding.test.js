import React from 'react';
import ReactDOM from 'react-dom';
import Onboarding from './Onboarding';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <Onboarding />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
