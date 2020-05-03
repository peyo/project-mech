import React from 'react';
import ReactDOM from 'react-dom';
import DeleteDTCComment from './delete-dtc-comment';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <DeleteDTCComment />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
