import React from 'react';
import ReactDOM from 'react-dom';
import OnboardingAddModelPage from './OnboardingAddModelPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <OnboardingAddModelPage />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
