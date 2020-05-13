import React from 'react';
import ReactDOM from 'react-dom';
import EditDTCComment from './EditDTCComment';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <EditDTCComment />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
