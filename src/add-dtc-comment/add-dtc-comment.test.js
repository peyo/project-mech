import React from 'react';
import ReactDOM from 'react-dom';
import AddDTCComment from './add-dtc-comment';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <AddDTCComment />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
