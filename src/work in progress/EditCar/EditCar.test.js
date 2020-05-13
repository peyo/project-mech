import React from 'react';
import ReactDOM from 'react-dom';
import EditCar from './EditCar';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const html = document.createElement('html');
  ReactDOM.render(
    <BrowserRouter>
      <EditCar />
    </BrowserRouter>,
    html
  );
  ReactDOM.unmountComponentAtNode(html);
});
