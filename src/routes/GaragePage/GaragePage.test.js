import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import GaragePage from './GaragePage';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
        <GaragePage />
      </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
